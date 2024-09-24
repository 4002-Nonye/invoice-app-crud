import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zygbimyoefdlvxvbpwnx.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5Z2JpbXlvZWZkbHZ4dmJwd254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0MDgwMDAsImV4cCI6MjAxMjk4NDAwMH0.SmESLKkWtFWVuv_kGvD7hWzEdC2WZ1ucLDGgMoE_UWs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
