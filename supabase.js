console.log("supabase.js started");

const url = "https://wixumwbadnwmoxkoshyv.supabase.co";

// Replace this with your CURRENT publishable key from the dashboard
const key = "sb_publishable_MUo1q-d08FoVd8NxgN2apQ_xVLY986j";

try {
    const client = window.supabase.createClient(url, key);

    window.client = client;

    console.log("Client created:", client);
    console.log("Auth:", client.auth);

} catch (err) {
    console.error("Error creating client:", err);
}