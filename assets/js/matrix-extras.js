/*!
 * matrix-extras.js — Matrix skin enhancements for Minimal Mistakes
 *
 * 1. "Decode" scramble effect on hover (nav links and titles).
 *    Layout-stable: text is rebuilt as per-character spans pinned to the
 *    measured width of each original glyph, so scrambling can never reflow
 *    the page — the link stays under the cursor and clicks always land.
 *    A mousedown snaps the text to its final state instantly.
 * 2. White rabbit easter egg (footer) → code-rain burst.
 */
(function () {
  "use strict";

  var GLYPHS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789Z:・.=*+-<>";
  var DECODE_SELECTORS = ".masthead__menu-item a, .page__title, .archive__item-title a";

  var REDUCED_MOTION = !!(window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* =====================================================================
     1. Decode effect
     ================================================================== */

  function isPlainText(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
      if (el.childNodes[i].nodeType !== 3) return false;
    }
    return true;
  }

  /* Rebuild the element's text as word spans containing per-character
     spans. Each character span is pinned to the rendered width of the
     original glyph, so scrambled glyphs can never change the layout. */
  function buildStructure(el) {
    var tokens = el.textContent.split(/(\s+)/);
    el.textContent = "";
    for (var t = 0; t < tokens.length; t++) {
      var token = tokens[t];
      if (token === "") continue;
      if (/^\s+$/.test(token)) {
        el.appendChild(document.createTextNode(token));
        continue;
      }
      var word = document.createElement("span");
      word.style.display = "inline-block";
      word.style.whiteSpace = "nowrap";
      for (var c = 0; c < token.length; c++) {
        var s = document.createElement("span");
        s.setAttribute("data-c", token.charAt(c));
        s.textContent = token.charAt(c);
        word.appendChild(s);
      }
      el.appendChild(word);
    }
    var spans = el.querySelectorAll("span[data-c]");
    var cs = window.getComputedStyle(el);
    var lineHeight = parseFloat(cs.lineHeight);
    if (isNaN(lineHeight) || lineHeight <= 0) {
      lineHeight = parseFloat(cs.fontSize) * 1.2;
    }
    for (var i = 0; i < spans.length; i++) {
      var s = spans[i];
      s.style.display = "inline-block";
      s.style.width = s.getBoundingClientRect().width + "px";
      /* pin the height too: katakana fallback fonts have taller vertical
         metrics than Latin text, and that was the last source of shift */
      s.style.height = lineHeight + "px";
      s.style.lineHeight = lineHeight + "px";
      /* top-align sidesteps the overflow-hidden baseline quirk, where an
         inline-block aligns by its bottom edge instead of the baseline */
      s.style.verticalAlign = "top";
      s.style.overflow = "hidden";
    }
    el.setAttribute("data-matrix-built", "1");
  }

  function decode(el) {
    if (el.getAttribute("data-matrix-busy") === "1") return;
    if (el.getAttribute("data-matrix-built") !== "1") {
      if (!isPlainText(el)) return;
      buildStructure(el);
    }

    var spans = el.querySelectorAll("span[data-c]");
    var n = spans.length;
    if (!n) return;
    el.setAttribute("data-matrix-busy", "1");

    /* freeze the box: nothing below this element may move while it plays */
    var height = el.getBoundingClientRect().height;
    if (height > 0) el.style.minHeight = height + "px";

    var total = Math.min(n * 2, 36); /* ~600ms cap */
    var frame = 0;

    function finish() {
      for (var i = 0; i < n; i++) {
        spans[i].textContent = spans[i].getAttribute("data-c");
      }
      el.style.minHeight = "";
      el.setAttribute("data-matrix-busy", "0");
    }
    el._matrixFinish = finish;

    function tick() {
      var settled = Math.floor((frame / total) * n);
      for (var i = 0; i < n; i++) {
        spans[i].textContent = i < settled
          ? spans[i].getAttribute("data-c")
          : GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
      }
      frame++;
      if (frame <= total) {
        requestAnimationFrame(tick);
      } else {
        finish();
      }
    }
    requestAnimationFrame(tick);
  }

  function initDecode() {
    if (REDUCED_MOTION) return;
    var els = document.querySelectorAll(DECODE_SELECTORS);
    for (var i = 0; i < els.length; i++) {
      (function (el) {
        el.addEventListener("mouseenter", function () { decode(el); });
        el.addEventListener("mousedown", function () {
          /* a click must never wait for the animation */
          if (el._matrixFinish) el._matrixFinish();
        });
      })(els[i]);
    }
  }

  /* =====================================================================
     2. White rabbit easter egg
     ================================================================== */

  function endBurst(state) {
    if (state.done) return;
    state.done = true;
    clearInterval(state.rainTimer);
    clearInterval(state.quoteTimer);
    if (state.canvas) state.canvas.style.opacity = "0";
    state.quote.style.opacity = "0";
    setTimeout(function () {
      if (state.canvas) state.canvas.remove();
      state.quote.remove();
    }, 650);
  }

  function startBurst() {
    var state = { done: false };
    var lines = ["Wake up, Neo...", "The Matrix has you...",
                 "Follow the white rabbit.", "Knock, knock, Neo."];

    if (!REDUCED_MOTION) {
      /* the rain layer goes on first; the message layer is added after it
         (DOM-last, plus a higher z-index in the skin) so it stays readable
         on top of the falling glyphs for the whole sequence */
      state.canvas = document.createElement("canvas");
      state.canvas.className = "matrix-burst";
      state.canvas.setAttribute("aria-hidden", "true");
      document.body.appendChild(state.canvas);

      var ctx = state.canvas.getContext("2d");
      var fontSize = 16;
      var drops = [];

      state.canvas.width = window.innerWidth;
      state.canvas.height = window.innerHeight;
      var columns = Math.ceil(state.canvas.width / fontSize);
      for (var i = 0; i < columns; i++) {
        drops.push(Math.floor(Math.random() * -50));
      }

      state.rainTimer = setInterval(function () {
        /* reality dissolves toward the page background */
        ctx.fillStyle = "rgba(12, 19, 16, 0.12)";
        ctx.fillRect(0, 0, state.canvas.width, state.canvas.height);
        ctx.font = fontSize + "px monospace";
        for (var i = 0; i < drops.length; i++) {
          var y = drops[i] * fontSize;
          ctx.fillStyle = "#00ff41";
          ctx.fillText(GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length)), i * fontSize, y);
          if (y > state.canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }, 50);

      setTimeout(function () { endBurst(state); }, 4200);
    }

    state.quote = document.createElement("div");
    state.quote.className = "matrix-burst-quote";
    state.quote.textContent = lines[0];
    document.body.appendChild(state.quote);

    var nextLine = 1;
    state.quoteTimer = setInterval(function () {
      state.quote.textContent = nextLine < lines.length ? lines[nextLine++] : "";
    }, 900);

    /* any click skips the rest of the show */
    document.addEventListener("mousedown", function () { endBurst(state); }, { once: true });

    if (REDUCED_MOTION) {
      /* calm version: the message, but no rain */
      setTimeout(function () { endBurst(state); }, 3800);
    }
  }

  function initRabbit() {
    var rabbit = document.querySelector(".matrix-rabbit");
    if (!rabbit) return;
    rabbit.addEventListener("click", startBurst);
    rabbit.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        startBurst();
      }
    });
  }

  /* ===================================================================== */

  function init() {
    initDecode();
    initRabbit();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
