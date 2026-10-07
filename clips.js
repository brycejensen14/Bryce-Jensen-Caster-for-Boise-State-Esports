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
    id: "Wuzy Goal",
    title: "Close goal to tie the game",
    game: "Rocket League",
    player: "Wuzy",
    date: "2026-10-05",
    platform: "youtube",
    videoId: "rnbBgqKO9S0",
    description:
      "",
    tags: ["PEC,Rocket Leauge, Bosie State"],
  
