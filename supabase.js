const SUPABASE_URL = "https://wixumwbadnwmoxkoshyv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpeHVtd2JhZG53bW94a29zaHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3MDgwODAsImV4cCI6MjA5ODI4NDA4MH0.lTveuB97kDhGsT9v-xdA2TJbB1JqmdpEanytAj0YBvc";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
