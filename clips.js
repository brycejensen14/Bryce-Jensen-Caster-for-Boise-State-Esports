/**
 * BRONCO ESPORTS — CLIP DATABASE
 * ---------------------------------------------------------------
 * To add a new clip, copy an object below, give it a unique "id",
 * and fill in the fields. Save the file and refresh the page —
 * no build step, no server, nothing to install.
 *
 * platform: "youtube" | "twitch" | "streamable"
 *   youtube    -> videoId is the part after "watch?v=" in the URL
 *   twitch     -> videoId is the clip slug from a clips.twitch.tv URL
 *   streamable -> videoId is the part after "streamable.com/"
 *
 * game: used for the filter chips. Keep spelling consistent between
 * clips so they group together correctly.
 * ---------------------------------------------------------------
 */

const CLIPS = [
  {
    id: "vct-ace-koga",
    title: "Full round ace to close out the map",
    game: "Valorant",
    player: "koga",
    date: "2026-02-14",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ",
    description:
      "koga cleans up a 1v4 retake on Bind to seal the map against Utah in the MWEC quarterfinal.",
    tags: ["ace", "retake", "playoffs"],
  },
  {
    id: "rl-ceiling-shot-nova",
    title: "Ceiling shot bank buzzer beater",
    game: "Rocket League",
    player: "Nova",
    date: "2026-02-08",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ",
    description:
      "Nova banks a ceiling shot off the wall with 0.3 seconds left to force overtime vs. Idaho.",
    tags: ["clutch", "overtime"],
  },
  {
    id: "ow-triple-kill-echo",
    title: "Echo triple kill through the choke",
    game: "Overwatch 2",
    player: "Bronc",
    date: "2026-01-27",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ",
    description:
      "Bronc duplicates the enemy Reinhardt and turns a 4v5 fight around on King's Row.",
    tags: ["team fight", "duplicate"],
  },
  {
    id: "lol-baron-steal-frontier",
    title: "Baron steal with a smite flash",
    game: "League of Legends",
    player: "Frontier",
    date: "2026-01-19",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ",
    description:
      "Frontier flashes over the wall for a blind smite steal that swings the late-game gold lead.",
    tags: ["steal", "objective"],
  },
  {
    id: "smash-reads-buster",
    title: "Three-stock read against Utah's top seed",
    game: "Super Smash Bros. Ultimate",
    player: "Buster",
    date: "2026-01-12",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ",
    description:
      "Buster reads three consecutive ledge options to take game 1 of the MWEC opener.",
    tags: ["reads", "tournament"],
  },
  {
    id: "vct-clutch-mesa",
    title: "1v3 clutch on match point",
    game: "Valorant",
    player: "Mesa",
    date: "2025-12-03",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ",
    description:
      "Mesa holds a 1v3 post-plant on Haven to close out the Bronco Esports home showcase.",
    tags: ["clutch", "post-plant"],
  },
];
