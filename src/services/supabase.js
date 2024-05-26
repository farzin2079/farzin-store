import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mdqgzyjqvpvwnecnesdu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kcWd6eWpxdnB2d25lY25lc2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzODA4MTgsImV4cCI6MjAzMTk1NjgxOH0.xu56KEncD7ysN_8ioySg3BMD2zavCIBnESA4pBytMAo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
