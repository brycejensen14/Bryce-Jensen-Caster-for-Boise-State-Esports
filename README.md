# Bronco Esports — Clips

A static site for posting highlight clips from Boise State's esports program. Plain HTML/CSS/JS, no build step, no framework, no dependencies to install — which means it runs as-is on **GitHub Pages**.

## Put it on GitHub

1. Create a new repository on GitHub (public, so Pages can serve it for free).
2. Push this folder to it:
   ```bash
   cd bronco-esports-clips
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-ORG/YOUR-REPO.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. GitHub gives you a URL like `https://YOUR-ORG.github.io/YOUR-REPO/` within a minute or two.

To use a custom domain instead, add a `CNAME` file at the repo root with the domain on one line, and point your DNS at GitHub's Pages servers (documented in GitHub's own Pages settings page).

## Adding a clip

All clips live in one file: **`data/clips.js`**. Nothing else needs to change.

1. Get the clip online first — upload it to YouTube (unlisted is fine), or clip it on Twitch, or upload to Streamable.
2. Open `data/clips.js` and copy one of the existing objects.
3. Fill in the fields:

   | field | notes |
   |---|---|
   | `id` | unique, no spaces — used internally, not shown |
   | `title` | shown on the card |
   | `game` | groups clips into filter chips — keep spelling identical across clips of the same game |
   | `player` | gamertag or player name |
   | `date` | `YYYY-MM-DD` |
   | `platform` | `"youtube"`, `"twitch"`, or `"streamable"` |
   | `videoId` | see below |
   | `description` | one sentence is plenty |
   | `tags` | optional, used by the search box |

   **Getting `videoId`:**
   - YouTube: the part after `watch?v=` in the URL, e.g. `dQw4w9WgXcQ` from `youtube.com/watch?v=dQw4w9WgXcQ`.
   - Twitch: the clip slug from a `clips.twitch.tv/SlugGoesHere` link.
   - Streamable: the part after `streamable.com/` in the link.

4. Save the file, commit, and push. The clip appears on the site automatically — its game is added to the filter bar if it's a new one, and the newest clip with no filter/search active is shown as the large featured card.

The included clips use a placeholder YouTube ID as a stand-in — replace them with real match footage before publishing.

## Editing the rest of the site

- `index.html` — page copy: hero text, about section, roster list, social links.
- `css/style.css` — colors and type are set as CSS variables at the top of the file (Boise State's official blue `#0033A0` and orange `#D64309`).
- `js/main.js` — filtering, search, and the click-to-play embed behavior. Shouldn't need edits unless you're changing how clips are displayed.

## Local preview

Any static file server works, e.g. from the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Twitch embeds and `parent`

Twitch's embed requires a `parent` query parameter matching the domain the page is served from. The script sets this automatically from `window.location.hostname`, so it works on GitHub Pages and localhost without edits. If you later put the site behind a different domain, no change is needed — it reads the domain live.
