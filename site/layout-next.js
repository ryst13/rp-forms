/* Ryan Painting site layout helper (2026-11-23, Ryan's Interior page rules applied site-wide).
   A call-to-action link that sits on a line of its own (quote, price online, Google reviews) gets the
   site's button look (class rp-cta-btn, styled in layout.css). Links inside a sentence stay links.
   Loaded from the site-wide Code Injection; source of truth is the rp-forms repo. */
(function () {
  var HREF = /(\/getquote|#price-online|google\.com\/maps|g\.page\/|maps\.app\.goo\.gl)/i;
  function visibleText(el) {
    var t = "";
    el.childNodes.forEach(function (n) {
      if (n.nodeType === 3) t += n.textContent;
      else if (n.nodeType === 1) {
        var cs = getComputedStyle(n);
        if (cs.display === "none" || cs.visibility === "hidden" || (cs.position === "absolute" && parseFloat(cs.width) <= 1)) return;
        t += visibleText(n);
      }
    });
    return t;
  }
  function run() {
    var links = document.querySelectorAll("article .sqs-html-content a[href]");
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      if (a.closest("#rp-gate") || a.classList.contains("rp-cta-btn")) continue;
      if (!HREF.test(a.getAttribute("href") || "")) continue;
      var line = a.closest("p, h1, h2, h3, h4, li");
      if (!line || line.tagName === "LI") continue;
      var own = visibleText(a).replace(/\s+/g, " ").trim();
      var whole = visibleText(line).replace(/\s+/g, " ").trim();
      if (own && own === whole && own.length <= 60) a.classList.add("rp-cta-btn");
    }
  }
  /* Testimonials (2026-11-24): a text block of quotes followed by names, ending in the Google reviews link,
     is marked up as cards (styled in layout.css). A heading block beside it ("What ... clients say") is marked too. */
  function quotes() {
    var blocks = document.querySelectorAll("article .sqs-html-content");
    for (var i = 0; i < blocks.length; i++) {
      var c = blocks[i], ps = c.querySelectorAll(":scope > p"), n = 0;
      if (!c.querySelector('a[href*="google.com/maps"]')) continue;
      for (var k = 0; k < ps.length; k++) {
        var t = ps[k].textContent.trim();
        if (/^[“"]/.test(t) && t.length > 40) { ps[k].classList.add("rp-q"); n++; if (ps[k + 1] && ps[k + 1].textContent.trim().length < 60) ps[k + 1].classList.add("rp-q-name"); }
      }
      if (n < 2) continue;
      c.classList.add("rp-quotes");
      var sec = c.closest("section");
      var heads = sec ? sec.querySelectorAll(".sqs-html-content") : [];
      for (var h = 0; h < heads.length; h++) {
        var first = heads[h].firstElementChild;
        if (first && /clients say/i.test(first.textContent) && first.textContent.trim().length < 70) first.classList.add("rp-quotes-title");
      }
    }
  }
  /* Section titles added where a section has none (gallery sections cannot hold text). Keyed by section id. */
  var TITLES = { "6b04c07154009371916c148c": "Before, during and after" };
  function titles() {
    for (var id in TITLES) {
      var s = document.querySelector('section[data-section-id="' + id + '"] .content-wrapper .content') || document.querySelector('section[data-section-id="' + id + '"] .content-wrapper');
      if (!s || s.querySelector(".rp-section-title")) continue;
      var h = document.createElement("h2"); h.className = "rp-section-title"; h.textContent = TITLES[id];
      s.insertBefore(h, s.firstChild);
    }
  }
  var run0 = run; run = function () { quotes(); titles(); run0(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();
