/* Depths multiplayer config.
   The anon (publishable) key is meant to be public, so committing this file is fine.
   Never put a service_role / secret key here.

   Supabase counts every message sent AND every message delivered, so load is
   about players^2 * sendHz per second in the busiest case. The free plan allows
   100/sec (Pro: 500). 4 players * 4 players * 5 Hz = 80/sec. */
window.DEPTHS_MP = {
  url: 'https://zbvbwzdlmazsoalpfeoh.supabase.co',
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpidmJ3emRsbWF6c29hbHBmZW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5MTgxOTUsImV4cCI6MjEwNTQ5NDE5NX0.ErDEe8QXg8P5bKdI_uPDxoYeiPFMKSiEckqnGJPjMlI',
  sendHz: 5,       // position updates per second per player
  maxPlayers: 4    // per room
};
