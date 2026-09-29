# Depths: Evolution of the Sea (online)

Static site. Supabase Realtime carries the multiplayer, GitHub Pages hosts it. No tables, no server code.

## 1. Supabase (2 minutes)

1. Create a project at supabase.com.
2. Project Settings > API: copy the Project URL and the anon (publishable) key.
3. Paste both into `config.js`.
4. If the roster dot in-game stays red, open the project's Realtime settings and make sure public access is allowed.

## 2. GitHub Pages

```bash
cd depths
git init -b main
git add .
git commit -m "Depths online"
gh repo create depths --public --source=. --push
gh api -X POST "repos/{owner}/{repo}/pages" -f "source[branch]=main" -f "source[path]=/"
```

Your game is live in about a minute at `https://<your-username>.github.io/depths/`. Without the `gh` CLI: repo Settings > Pages > Deploy from branch `main`, folder `/ (root)`.

## 3. Play

Main menu > Mode: Online. Pick a name and a room. Anyone who types the same room name shares your ocean.

## Limits

Free plan: 100 messages/sec, 2M messages/month. Load is roughly players^2 x sendHz per second while everyone moves, so 4 players at 5 Hz is about 80/sec and 2M messages lasts roughly 7 hours of continuous 4-player play. Idle fish drop to 1 update/sec. Raise `maxPlayers` only with a Pro plan or a lower `sendHz`.

## What is and is not shared

Shared: every player's position, form, level, health, bites, kills, deaths.
Local to each client: AI fish, food, the Kraken. Each player fights their own Kraken.
Trust: each client decides its own damage, so a modified client can cheat. Fine for friends, not for public rooms.
