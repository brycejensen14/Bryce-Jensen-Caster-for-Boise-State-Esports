(function () {
  "use strict";

  var grid = document.getElementById("clip-grid");
  var filterBar = document.getElementById("filter-chips");
  var searchInput = document.getElementById("clip-search");
  var emptyState = document.getElementById("empty-state");
  var countLabel = document.getElementById("result-count");

  var state = { game: "All", query: "" };

  function embedUrl(clip) {
    if (clip.platform === "youtube") {
      return (
        "https://www.youtube.com/embed/" +
        clip.videoId +
        "?autoplay=1&rel=0"
      );
    }
    if (clip.platform === "twitch") {
      var parentHost = window.location.hostname || "localhost";
      return (
        "https://clips.twitch.tv/embed?clip=" +
        clip.videoId +
        "&parent=" +
        parentHost +
        "&autoplay=true"
      );
    }
    if (clip.platform === "streamable") {
      return "https://streamable.com/e/" + clip.videoId + "?autoplay=1";
    }
    return "";
  }

  function thumbUrl(clip) {
    if (clip.platform === "youtube") {
      return "https://img.youtube.com/vi/" + clip.videoId + "/hqdefault.jpg";
    }
    // Twitch and Streamable don't expose a predictable thumbnail URL
    // without an API call, so fall back to a plain placeholder panel.
    return "";
  }

  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function playIcon() {
    return (
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>'
    );
  }

  function cardTemplate(clip, isFeatured) {
    var thumb = thumbUrl(clip);
    var mediaInner = thumb
      ? '<img src="' + thumb + '" alt="" loading="lazy">'
      : '<div style="width:100%;height:100%;display:flex;align-items:center;' +
        'justify-content:center;color:#8f9ab5;font-family:var(--font-display);' +
        'text-transform:uppercase;letter-spacing:.06em;font-size:.85rem;">' +
        clip.platform +
        " clip</div>";

    var article = document.createElement("article");
    article.className = "clip-card" + (isFeatured ? " featured" : "");
    article.innerHTML =
      '<div class="clip-media" data-id="' +
      clip.id +
      '">' +
      mediaInner +
      '<button class="play-btn" type="button" aria-label="Play clip: ' +
      escapeHtml(clip.title) +
      '">' +
      playIcon() +
      "</button>" +
      "</div>" +
      '<div class="clip-body">' +
      '<p class="clip-game">' +
      escapeHtml(clip.game) +
      "</p>" +
      '<h3 class="clip-title">' +
      escapeHtml(clip.title) +
      "</h3>" +
      '<p class="clip-desc">' +
      escapeHtml(clip.description || "") +
      "</p>" +
      '<div class="clip-meta"><span><strong>' +
      escapeHtml(clip.player || "Bronco Esports") +
      "</strong></span><span>" +
      formatDate(clip.date) +
      "</span></div>" +
      "</div>";

    var playBtn = article.querySelector(".play-btn");
    playBtn.addEventListener("click", function () {
      var media = article.querySelector(".clip-media");
      var iframe = document.createElement("iframe");
      iframe.src = embedUrl(clip);
      iframe.title = clip.title;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      media.innerHTML = "";
      media.appendChild(iframe);
    });

    return article;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
          c
        ] || c
      );
    });
  }

  function matches(clip) {
    var gameOk = state.game === "All" || clip.game === state.game;
    if (!gameOk) return false;
    if (!state.query) return true;
    var haystack = [
      clip.title,
      clip.player,
      clip.game,
      (clip.tags || []).join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.indexOf(state.query.toLowerCase()) !== -1;
  }

  function render() {
    var list = CLIPS.filter(matches);
    grid.innerHTML = "";

    list.forEach(function (clip, i) {
      grid.appendChild(cardTemplate(clip, i === 0 && state.game === "All" && !state.query));
    });

    emptyState.style.display = list.length ? "none" : "block";
    countLabel.textContent =
      list.length + (list.length === 1 ? " clip" : " clips");
  }

  function buildFilterChips() {
    var games = ["All"].concat(
      Array.from(new Set(CLIPS.map(function (c) { return c.game; })))
    );
    filterBar.innerHTML = "";
    games.forEach(function (game) {
      var btn = document.createElement("button");
      btn.className = "chip";
      btn.type = "button";
      btn.textContent = game;
      btn.setAttribute("aria-pressed", game === "All" ? "true" : "false");
      btn.addEventListener("click", function () {
        state.game = game;
        Array.from(filterBar.children).forEach(function (c) {
          c.setAttribute("aria-pressed", c === btn ? "true" : "false");
        });
        render();
      });
      filterBar.appendChild(btn);
    });
  }

  searchInput.addEventListener("input", function (e) {
    state.query = e.target.value.trim();
    render();
  });

  // Mobile nav toggle
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      header.classList.toggle("open");
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  buildFilterChips();
  render();
})();
