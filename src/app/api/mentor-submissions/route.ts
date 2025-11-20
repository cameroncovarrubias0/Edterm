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
  expertise: z.string().min(2),
  experience_years: z.number().int().min(0).max(80),
  linkedin: z.string().url().max(255).nullable().optional(),
  message: z.string().min(10),
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
    expertise: parsed.data.expertise,
    experience_years: parsed.data.experience_years,
    linkedin: parsed.data.linkedin ?? null,
    message: parsed.data.message,
  };

  const { data, error } = await supabase
    .from('mentor_submissions')
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
            <p><strong>Expertise:</strong> ${escapeHtml(submission.expertise)}</p>
            <p><strong>Experience:</strong> ${submission.experience_years} years</p>
            ${
              submission.linkedin
                ? `<p><strong>LinkedIn:</strong> <a href="${escapeHtml(
                    submission.linkedin
                  )}" target="_blank" rel="noreferrer">${escapeHtml(submission.linkedin)}</a></p>`
                : ''
            }
            <p style="margin-top:16px;"><strong>Message:</strong><br>${escapeHtml(
              submission.message
            ).replace(/\n/g, '<br />')}</p>
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
