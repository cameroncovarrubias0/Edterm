import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { z } from 'zod';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const SubmissionSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  country: z.string().optional(),
  message: z.string().optional(),
});

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = SubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const submission = {
    name: parsed.data.name,
    email: parsed.data.email,
    country: parsed.data.country ?? null,
    message: parsed.data.message ?? null,
  };

  const { data, error } = await supabase
    .from('partners')
    .insert(submission)
    .select('*')
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  let emailSent = false;
  if (resend) {
    try {
      await resend.emails.send({
        from: 'EdTerm Notifications <partners@edterm.com>',
        to: ['partners@edterm.com'],
        subject: 'New Mentor Submission – Shell-less Mentors Program',
        html: `
          <div style="font-family:Arial, sans-serif; line-height:1.6; color:#0f172a;">
            <h2 style="margin-bottom:16px;">New mentor submission received</h2>
            <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
            ${
              submission.country
                ? `<p><strong>Country:</strong> ${escapeHtml(submission.country)}</p>`
                : ''
            }
            ${
              submission.message
                ? `<p style="margin-top:16px;"><strong>Message:</strong><br>${escapeHtml(
                    submission.message
                  ).replace(/\n/g, '<br />')}</p>`
                : ''
            }
            <hr style="margin:24px 0; border:none; border-top:1px solid #e2e8f0;" />
            <p style="font-size:13px; color:#475569;">This email was triggered automatically after a new Shell-less Mentors submission was stored in Supabase.</p>
          </div>
        `,
      });
      emailSent = true;
    } catch (emailError) {
      console.error('[MentorSubmissions] Resend error', emailError);
    }
  } else {
    console.warn('[MentorSubmissions] RESEND_API_KEY is not configured');
  }

  return NextResponse.json({
    data,
    emailSent,
  });
}
