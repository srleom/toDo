import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aejhaswkjgmezfzmngtk.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlamhhc3dramdtZXpmem1uZ3RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyNzA5ODgsImV4cCI6MjAxMjg0Njk4OH0.rPtzfyaRPG8CoARNbvjG1t2Q9Z03wIK6bfo--Tnj0js';
export const supabase = createClient(supabaseUrl, supabaseKey);
