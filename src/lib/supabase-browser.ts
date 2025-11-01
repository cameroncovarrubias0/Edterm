'use client';
import { createClient } from '@supabase/supabase-js';

export const supabaseBrowser = createClient(
  'https://vwkmjyjifhgwnlmciyxk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3a21qeWppZmhnd25sbWNpeXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4MjExMDksImV4cCI6MjA3NjM5NzEwOX0.wItWFmEhXATSAk6hqjHzLUaFVKy3b-zCjZbd_8i2FJM'
);
