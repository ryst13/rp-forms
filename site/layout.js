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
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();
