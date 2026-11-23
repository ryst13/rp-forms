/* Ryan Painting quote form. BUILT FILE, do not edit here.
   Source: estimate-schedule-gate.html in the vault (60-technology/estimate-automation).
   Build: v3.17 staircase starts at 0 doors / 0 windows 2026-11-23 | source sha 151556bdb36b | 2026-11-23 */
(function () {
  if (window.__rpGateBuild) { return; }
  window.__rpGateBuild = "v3.17 staircase starts at 0 doors / 0 windows 2026-11-23 151556bdb36b";
  var d = document, links = [{"rel": "preconnect", "href": "https://fonts.gstatic.com", "crossOrigin": "anonymous"}, {"href": "https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap", "rel": "stylesheet"}];
  links.forEach(function (a) {
    var l = d.createElement("link");
    Object.keys(a).forEach(function (k) { if (k === "crossOrigin") { l.crossOrigin = a[k]; } else { l.setAttribute(k, a[k]); } });
    d.head.appendChild(l);
  });
  var st = d.createElement("style");
  st.setAttribute("data-rp-gate", "1");
  st.textContent = "\n  /* Designed for a DARK page section: base text is white; white cards re-assert dark text. */\n  #rp-gate { max-width: 640px; margin: 0 auto; font-family: 'Open Sans', -apple-system, sans-serif;\n    color: #fff; border: 2px solid #000; border-radius: 14px; padding: 24px; }\n  @media (max-width: 560px) { #rp-gate { padding: 16px; } }\n  #rp-gate p, #rp-gate label, #rp-gate summary, #rp-gate h1, #rp-gate h2, #rp-gate h3 { color: inherit; }\n  /* a11y: on a light page section (set by script, e.g. /proposal) the text outside the white cards turns dark */\n  #rp-gate.rpg-light { color: #1c1e1c; }\n  #rp-gate.rpg-light > .rpg-q, #rp-gate.rpg-light > .rpg-lbl, #rp-gate.rpg-light > .rpg-note,\n  #rp-gate.rpg-light > .rpg-inline, #rp-gate.rpg-light > .rpg-chk { color: #1c1e1c; }\n  #rp-gate.rpg-light > .rpg-back { color: #1d5f2f; }\n  .rpg-q { font-size: 1.35rem; font-weight: 600; margin: 1.2em 0 0.8em; color: #fff;\n    font-family: 'Familjen Grotesk', 'Open Sans', -apple-system, sans-serif; }\n  .rpg-room .rpg-q, .rpg-panel .rpg-q { color: #1c1e1c; }\n  .rpg-room, .rpg-panel { color: #1c1e1c; }\n  .rpg-opts { display: grid; gap: 10px; grid-template-columns: 1fr 1fr; }\n  @media (max-width: 560px) { .rpg-opts { grid-template-columns: 1fr; } }\n  .rpg-opt { padding: 16px 14px; border: 2px solid #d8d8d8; border-radius: 10px;\n    background: #fff; color: #1c1e1c; cursor: pointer; font-size: 1rem; text-align: center;\n    transition: border-color .15s, background .15s; font-family: inherit; }\n  .rpg-opt:hover { border-color: #70d44b; background: #70d44b; color: #000; }\n  .rpg-sel2 { border-color: #24a149; background: #f2faf4; }\n  /* a11y: one focus ring for every control; dark ring with a thin white gap shows on the green section and on white cards */\n  #rp-gate :focus-visible { outline: 3px solid #1c1e1c; outline-offset: 2px; box-shadow: 0 0 0 2px #fff; }\n  #rp-gate .rpg-q:focus { outline: none; box-shadow: none; }\n  .rpg-back { background: none; border: none; color: #fff; cursor: pointer;\n    font-size: .9rem; margin-top: 14px; text-decoration: underline; padding: 0; font-family: inherit; }\n  .rpg-room .rpg-back, .rpg-panel .rpg-back { color: #1d5f2f; }\n  .rpg-cta { display: inline-block; margin-top: 16px; padding: 14px 26px; border: none;\n    border-radius: 8px; background: #000; color: #fff; font-size: 1.05rem;\n    font-weight: 600; cursor: pointer; font-family: inherit; }\n  .rpg-cta:hover { background: #70d44b; color: #000; }\n  .rpg-panel { border: 1px solid #e2e2e2; border-radius: 12px; padding: 22px; margin-top: 18px; background: #fff; }\n  .rpg-panel ul { padding-left: 20px; }\n  .rpg-price { font-size: 2rem; font-weight: 700; color: #1d5f2f; margin: .3em 0;\n    font-family: 'Familjen Grotesk', 'Open Sans', -apple-system, sans-serif; }\n  .rpg-note { font-size: .85rem; color: #fff; margin-top: 10px; }\n  .rpg-room .rpg-note, .rpg-panel .rpg-note { color: #666; }\n  .rpg-field { width: 100%; padding: 12px; margin: 6px 0; border: 1.5px solid #ccc;\n    border-radius: 8px; font-size: 1rem; box-sizing: border-box; background: #fff; color: #1c1e1c; font-family: inherit; }\n  .rpg-err { color: #b3261e; font-size: .9rem; font-weight: 600; display: none; background: #fff; border: 1.5px solid #b3261e; border-radius: 8px; padding: 10px 12px; margin-top: 10px; }\n  #rpg-accept, #rpg-accept-final { background: #fff; color: #1d5f2f; border: 2px solid #24a149; }\n  #rpg-accept:hover, #rpg-accept-final:hover { background: #70d44b; border-color: #70d44b; color: #000; }\n  .rpg-check { width: 44px; height: 44px; border-radius: 50%; background: #e7f6ec; color: #1d5f2f;\n    font-size: 1.4rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; }\n  .rpg-room { border: 1px solid #e2e2e2; border-radius: 12px; padding: 16px; margin: 12px 0; background: #fff; }\n  .rpg-room.rpg-timing { background: #eaf6e4; border: 2px solid #70d44b; }\n  .rpg-room-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }\n  .rpg-x { background: none; border: none; color: #b3261e; font-size: .8rem; cursor: pointer; text-decoration: underline; font-family: inherit; }\n  .rpg-lbl { display: block; font-size: .82rem; font-weight: 600; color: #fff; margin-top: 10px; }\n  .rpg-room .rpg-lbl, .rpg-panel .rpg-lbl { color: #4a4f4a; }\n  .rpg-sel { margin-top: 4px; }\n  .rpg-segrow { display: flex; gap: 8px; margin-top: 6px; }\n  .rpg-seg { flex: 1; padding: 10px 6px; border: 2px solid #d8d8d8; border-radius: 8px; background: #fff;\n    color: #1c1e1c; cursor: pointer; font-size: .9rem; font-family: inherit; }\n  .rpg-seg-on { border-color: #24a149; background: #f2faf4; font-weight: 600; }\n  .rpg-inline { display: flex; gap: 18px; margin-top: 10px; flex-wrap: wrap; align-items: center; }\n  .rpg-chk { font-size: .92rem; display: flex; align-items: center; gap: 6px; color: inherit; }\n  .rpg-num { width: 64px; padding: 8px; border: 1.5px solid #ccc; border-radius: 8px; font-size: 1rem;\n    margin-left: 6px; background: #fff; color: #1c1e1c; font-family: inherit; }\n  .rpg-add { display: block; width: 100%; padding: 12px; margin-top: 4px; border: 2px dashed #b9ddb9;\n    border-radius: 10px; background: #fbfefb; color: #1d5f2f; font-weight: 600; cursor: pointer; font-family: inherit; }\n  .rpg-add:hover { border-color: #24a149; }\n  .rpg-bd { margin: 16px 0 4px; border-top: 1px solid #eee; padding-top: 10px; }\n  .rpg-bd summary { cursor: pointer; font-weight: 600; color: #1d5f2f; }\n  .rpg-bd-sec { margin-top: 10px; }\n  .rpg-bd-head { display: flex; justify-content: space-between; font-weight: 600; font-size: .92rem; }\n  .rpg-bd-item { display: flex; justify-content: space-between; font-size: .85rem; color: #666; padding-left: 14px; margin-top: 2px; }\n  .rpg-bd-total { display: flex; justify-content: space-between; font-weight: 700; border-top: 1px solid #e2e2e2;\n    margin-top: 10px; padding-top: 8px; font-variant-numeric: tabular-nums; }\n  .rpg-photo-ok { display: inline-block; background: #e7f6ec; color: #1d5f2f; font-weight: 600;\n    border: 1.5px solid #24a149; border-radius: 8px; padding: 6px 10px; margin-top: 8px; font-size: .88rem; }\n  .rpg-photo-ok a { color: #b3261e; }\n  .rpg-thumbs { margin-top: 6px; }\n  .rpg-thumbs img { width: 54px; height: 54px; object-fit: cover; border-radius: 6px; margin: 0 6px 6px 0; border: 2px solid #24a149; }\n  .rpg-ceil-note { background: #70d44b; color: #1c1e1c; font-size: .9rem; font-weight: 600; text-align: center;\n    padding: 10px 14px; border-radius: 8px; margin-top: 12px; }\n  .rpg-ceil-note a { color: #0a2ea8; }\n  #rp-bird { display: none; pointer-events: none; transition: transform 1.6s cubic-bezier(.33,.72,.28,.99); will-change: transform; animation: rpBirdSway 5s ease-in-out infinite; }\n  .rpg-prep { background: #fff; border: 2px solid #70d44b; border-radius: 12px; padding: 14px 16px; margin: 14px 0; text-align: left; color: #1c1e1c; }\n  .rpg-prep b { display: block; font-size: 1rem; margin-bottom: 4px; }\n  .rpg-prep .rpg-bar { height: 8px; background: #e6efe2; border-radius: 6px; overflow: hidden; margin: 10px 0 4px; }\n  .rpg-prep .rpg-bar i { display: block; height: 100%; width: 5%; background: #24a149; transition: width 1s linear; }\n  .rpg-spin { display: inline-block; width: 14px; height: 14px; border: 2px solid #b9dcae; border-top-color: #24a149; border-radius: 50%; animation: rpSpin 0.9s linear infinite; vertical-align: -2px; margin-right: 6px; }\n  @keyframes rpSpin { to { transform: rotate(360deg); } }\n  .rpg-approve-wait { opacity: .55; }\n  .rpg-approve-wait .rpg-cta { background: #9aa39a; cursor: not-allowed; }\n  @keyframes rpBirdSway { 0%,100% { rotate: -2deg; } 50% { rotate: 2.5deg; } }\n  @media (prefers-reduced-motion: reduce) { #rp-bird { transition: none; animation: none; } }\n  @media (max-width: 767px) { #rp-bird { display: none !important; } }\n";
  d.head.appendChild(st);
})();

  window.RP_GATE_CONFIG = {
    TEST_MODE: false,
    WALKTHROUGH_MEETING_URL: "https://meetings.hubspot.com/ryan-streete",
    PAINTER_DAY_MEETING_URL: "https://meetings.hubspot.com/boo-kings/hire-a-painter",
    HUBSPOT_PORTAL_ID: "20661878",
    HUBSPOT_QUOTE_FORM_GUID: "e51bff37-4c5d-4b6b-8161-a0bcfd1f7833",
    ACCEPT_WEBHOOK_URL: "https://ryanpaintingco.app.n8n.cloud/webhook/instant-quote-accept",   // IQ2: records acceptance, flags deal for review — NO payment
    PDF_STATUS_WEBHOOK_URL: "https://ryanpaintingco.app.n8n.cloud/webhook/instant-quote-pdf",  // returns { pdf_url } once the estimate PDF exists in Drive
    SUBMISSION_WEBHOOK_URL: "https://ryanpaintingco.app.n8n.cloud/webhook/instant-quote-intake",
    INTAKE_ALERT_URL: "https://ryanpaintingco.app.n8n.cloud/webhook/rp-gate-intake-alert",  // emails both owners if photos were dropped or the quote did not save
    PRICING_CONFIG_URL: "https://script.google.com/macros/s/AKfycbwK5dphCEzP9wKH32sJsyr0LTsXZUxnCMtMPg-tWhHJf0Q0hNDnFlEyHwCWySlSBIP0Hg/exec", // optional: RP Pricing sheet Apps Script endpoint (see build/pricing-hub-setup.md); blank = baked-in pricing
    TRANSPARENT_DECK_MULTIPLIER: 2,
    DECK_SOLID_MULTIPLIER: 1.3,
    EXT_STORY_MULTIPLIERS: { 1: 1.0, 2: 1.25, 3: 1.5 },
    SERVICE_ZIP_PREFIXES: ["017","020","021","022","024"], // Boston core + inner metro + MetroWest; excludes 018/019 (Woburn–North Shore) and 023 (Brockton corridor) per Ryan 2026-07-12
    PAINTER_DAY_PRICE: 850,
    GOOGLE_MAPS_API_KEY: "AIzaSyBAMUj3eiWOzUw-7sw9YNMX7cmiRndK01g", // enable Places API on the key; used for address autocomplete
    TERMS_URL: "/terms",
    MIN_PROJECT: 1000,
    RUSH_MULTIPLIER: 1.3, // rush = complete within the coming week
    MAX_SQ_ROOMS: 6, // interior self-quote room cap (baked fallback, keep equal to the sheet); live value = PRICING sheet gate/MAX_SQ_ROOMS, so a change (6 from 2026-11-21; maybe lower in March, tbc) is a sheet edit, no publish
    DEPOSIT_PERCENT: 0.30,
    PRICING_OPTIONS: {},   // catalog-direct engine: premium/settings come from the engine + PRICING sheet
    PHONE_DISPLAY: "(617) 804-5300"
  };

;

/**
 * Ryan Painting — instant quote pricing engine.
 * Ported from internal pricing system, calibrated on RP historical projects.
 * Do not edit rates here without updating the source system.
 *
 * Self-contained browser module (no dependencies, ES2017). Exposes a global
 * `RPPricing` with:
 *
 *   RPPricing.quoteInterior(scope [, options])
 *   RPPricing.quoteExterior(scope [, options])
 *   RPPricing.OPTIONS      — allowed room types / sizes / item names for UIs
 *   RPPricing.THRESHOLDS   — job-size policy numbers (walkthrough cutoff, etc.)
 *
 * Pricing model: production_rate -> hours -> labor_cost -> margin -> price.
 * Each returned quote: { grand_total, sections, surcharges, labor_subtotal,
 * labor_total, materials, materials_total, production }.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = api; // Node (validation harness)
  }
  root.RPPricing = api; // browser global
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // null/undefined coalescing helper (keeps `??` semantics on ES2017)
  function nn(v, d) { return (v === null || v === undefined) ? d : v; }

  // ─── DEFAULT SETTINGS (RP's own numbers) ─────────────────────
  var DEFAULT_SETTINGS = {
    crew_wage: 28.50,          // Boston metro crew hourly wage
    crew_size: 2,
    gross_margin: 0.40,
    eos_enabled: true,         // economy-of-scale: folded setup/mobilization (2026-07-31)
    mobilization_hours: 2,     // real crew setup is 1-3 hrs (Ryan, 2026-07-31)
    quote_premium: 0.04,       // instant-quote premium over Catalog pricing (keep equal to PRICING settings/quote_premium)
    setup_hours_per_area: 0.5,
    shelves_uplift: 0.35,      // closet shelving adds 35% of that closet's price (Ryan, 2026-08-23)
    paint_coats: 2,            // coats of walls/trim/ceiling paint, same as the Generator since 2026-11-14 (primer stays 1)
    tp_hourly: 40              // Generator Catalog!P18: crew hours = trade-partner cost / this
  };

  // ─── GENERATOR LINKS (2026-11-23) ──────────────────────────────
  // Size curve: [job total $, multiplier], Generator Config!B17:C23.
  var SIZE_CURVE = [[0, 1], [2000, 1], [6000, 1.07], [12000, 0.8], [40000, 0.65], [65000, 0.67], [999999, 0.67]];
  // Trade-partner cost per room (walls) and per item, Generator Catalog K/N/Q37:55 and J7:20.
  // Baked copy of the Generator values on 2026-11-23 (fallback); the PRICING feed overwrites them on load.
  var WALL_SUB = {'Kitchen':{'Small':340.79,'Medium':541.48,'Large':605.85},'Living Room':{'Small':567.99,'Medium':681.59,'Large':757.32},'Bedroom':{'Small':378.66,'Medium':408.95,'Large':521.84},'Master Bedroom':{'Small':541.48,'Medium':643.72,'Large':757.32},'Dining Room':{'Small':499.83,'Medium':583.13,'Large':666.44},'Bathroom':{'Small':263.8,'Medium':383.71,'Large':455.65},'Full Bathroom':{'Small':359.73,'Medium':407.69,'Large':479.63},'Foyer/Hallway':{'Small':287.78,'Medium':471.22,'Large':928.98},'Closet':{'Small':75.73,'Medium':87.09,'Large':111.07},'Den':{'Small':454.39,'Medium':499.83,'Large':567.99},'Office':{'Small':528.23,'Medium':590.71,'Large':666.44},'Media Room':{'Small':413.68,'Medium':618.48,'Large':708.09},'Eating Area':{'Small':429.15,'Medium':469.54,'Large':565.46},'Pantry':{'Small':100.98,'Medium':163.45,'Large':225.3},'Laundry Room':{'Small':210.16,'Medium':326.91,'Large':498.88},'Utility/Mud Room':{'Small':277.68,'Medium':326.91,'Large':498.88},'Recreation Room':{'Small':643.72,'Medium':782.56,'Large':848.19},'Family Room':{'Small':600.8,'Medium':665.18,'Large':782.56},'Staircase Hallway':{'Small':476.74,'Medium':848.19,'Large':1272.29}};
  var ITEM_SUB = {'Window - Standard Frame':36.22,'Door - Frame Standard':18.11,'Trim - Baseboard/Crown':21.73,'Door - w/ Panels':27.17,'Repair - Drywall Repair':18.11,'Door - Flat':18.11,'Door - w/ Glass':36.22,'Door - Frame Double':27.17,'Window - Small Frame':27.17,'Trim - Wainscotting':43.46,'Trim - Spindles/Balusters':110.98,'Trim - Radiator':28.98,'Trim - Handrail':35.86};
  // Ceiling paint sqft per room, Generator Catalog G37:I55 (baked 2026-11-23; feed section ceiling_sqft overwrites).
  var CEIL_SQFT = {'Kitchen':{'Small':50,'Medium':160,'Large':240},'Living Room':{'Small':216,'Medium':320,'Large':616},'Bedroom':{'Small':100,'Medium':144,'Large':224},'Master Bedroom':{'Small':163,'Medium':270,'Large':396},'Dining Room':{'Small':120,'Medium':192,'Large':252},'Bathroom':{'Small':30,'Medium':60,'Large':84},'Full Bathroom':{'Small':45,'Medium':70,'Large':96},'Foyer/Hallway':{'Small':36,'Medium':80,'Large':120},'Closet':{'Small':15,'Medium':15,'Large':20},'Den':{'Small':100,'Medium':144,'Large':224},'Office':{'Small':80,'Medium':168,'Large':252},'Media Room':{'Small':140,'Medium':192,'Large':255},'Eating Area':{'Small':100,'Medium':144,'Large':206},'Pantry':{'Small':20,'Medium':25,'Large':50},'Laundry Room':{'Small':18,'Medium':48,'Large':80},'Utility/Mud Room':{'Small':60,'Medium':48,'Large':40},'Recreation Room':{'Small':216,'Medium':384,'Large':540},'Family Room':{'Small':192,'Medium':560,'Large':384},'Staircase Hallway':{'Small':70,'Medium':110,'Large':170}};
  function ceilSqftFor(type, size, wallSqft, ratio) {
    var t = CEIL_SQFT[type];
    if (t && size === 'XL' && t.Large && t.Medium) return t.Large + (t.Large - t.Medium);
    if (t && t[size] > 0) return t[size];
    return Math.round(wallSqft * ratio);
  }
  /* trade-partner share of the room price, for a room type the Catalog has no row for (generic 'Room') */
  function subRatio() {
    var b = WALL_SUB.Bedroom, r = CATALOG_WALL_RATE.Bedroom, q = WALL_SQFT.Bedroom;
    return (b && r && q && b.Medium > 0 && r.Medium > 0 && q.Medium > 0) ? b.Medium / (r.Medium * q.Medium) : 0.48;
  }
  function sizeFactor(total) {
    var c = SIZE_CURVE; if (!c || c.length < 2) return 1;
    var i = 0;
    for (var k = 0; k < c.length; k++) if (c[k][0] <= total) i = k;
    i = Math.min(i, c.length - 2);           /* Generator: MIN(MATCH(...), 6) */
    var b0 = c[i][0], m0 = c[i][1], b1 = c[i + 1][0], m1 = c[i + 1][1];
    var f = m0 + (total - b0) * (m1 - m0) / ((b1 - b0) || 1);
    return Math.round(f * 1e4) / 1e4;
  }
  function wallSub(type, size) {
    var t = WALL_SUB[type]; if (!t) return null;
    if (size === 'XL' && t.Large && t.Medium) return t.Large + (t.Large - t.Medium);
    return (t[size] > 0) ? t[size] : null;
  }

  // ─── SURCHARGES (flat, resolved defaults) ────────────────────
  var DEFAULT_SURCHARGES = {
    trash_enabled: true,
    trash_interior: 50,
    trash_exterior: 225,
    transportation_enabled: true,
    transportation_amount: 50,
    cc_fee_enabled: true,
    cc_pct: 0.032,
    color_samples_enabled: true,
    color_samples_amount: 98.95
  };

  // ─── MATERIALS (paint products, coverage sqft/gal, $/gal) ────
  var DEFAULT_MATERIALS = {
    interior: {
      walls:   { product: 'Regal Select Eggshell',   coverage: 350, price_per_gallon: 67.56 },
      trim:    { product: 'Regal Select Semi Gloss', coverage: 350, price_per_gallon: 67.56 },
      primer:  { product: 'Fresh Start',             coverage: 400, price_per_gallon: 58.64 },
      ceiling: { product: 'Ben Moore Muresco',       coverage: 400, price_per_gallon: 43.32 }
    },
    exterior: {
      siding:  { product: 'Moorgard Low Lustre',     coverage: 300, price_per_gallon: 69.59 },
      trim:    { product: 'Moorgard Soft Gloss',     coverage: 300, price_per_gallon: 69.59 }
    }
  };

  // ─── PRODUCTION RATES ────────────────────────────────────────
  // Physical constants: sqft per painter-hour (2-coat basis) or hours per item.
  var PRODUCTION = {
    interior_walls: 150,
    interior_ceiling: 120,
    interior_primer: 200,

    interior_items: {
      'Door - Frame Standard': 0.30,
      'Door - Frame Double': 0.45,
      'Door - Flat': 0.40,
      'Door - w/ Panels': 0.55,
      'Door - w/ Glass': 0.60,
      'Window - Standard Frame': 0.45,
      'Window - Small Frame': 0.30,
      'Trim - Baseboard/Crown': 0.50,
      'Trim - Wainscotting': 1.20,
      'Trim - Spindles/Balusters': 2.50,
      'Trim - Radiator': 0.60,
      'Trim - Handrail': 0.40,
      'Repair - Drywall Repair': 0.75
    },

    exterior_siding: {
      'Cedar Shingles': 120,
      'Clapboard': 180,
      'HardieBoard': 180,
      'PVC Siding': 200,
      'Decking': 150
    },

    exterior_items: {
      // Doors
      'Standard Frame': 0.75,
      'Double Frame': 1.00,
      'w/Glass': 0.80,
      'w/Panels': 0.75,
      'Metal': 0.60,
      'High Gloss': 0.90,
      'Bulkhead': 0.80,
      'Garage': 1.50,
      // Windows
      'Standard': 0.50,
      'Non-Standard': 0.65,
      'Dormer': 0.65,
      'Bay': 0.75,
      'Shutters': 0.35,
      'Basement': 0.30,
      // Trim
      'Fascia (10ft)': 0.45,
      'Dentil Molding': 0.60,
      'Downspout': 0.25,
      'Column': 0.75,
      'Soffit (10ft)': 0.55,
      'Spindles (10ft)': 2.50,
      'Staircase': 1.50,
      'Handrail': 0.45,
      'Fencing (10ft)': 0.80,
      'Dormer Fascia': 0.55,
      'Porch Ceiling': 1.20,
      'Ornate': 2.00,
      // Carpentry repairs
      'Cedar Shingle (1/2 Sq)': 1.50,
      'Cedar Shingle (1 Sq)': 2.50,
      'Clapboard': 0.80,
      'Fascia Board (8ft)': 0.60,
      'Molding (8ft)': 0.50,
      'Window Sill': 0.60,
      'Window Frame': 0.80,
      'Window Flashing': 0.45,
      'Spindle': 0.40,
      'Newel Post': 1.20,
      'Handrail Assy': 1.80,
      'Deck Board (12ft)': 0.50,
      'Deck Board Premium': 0.60
    },

    // Setup time per exterior surface (flat hours per crew)
    exterior_setup_per_surface: 1.0
  };

  // ─── COMPLEXITY FACTORS ──────────────────────────────────────
  // Skill premium multipliers: brush/detail work commands a higher $/hr
  // than roller. Back-calculated from RP rate tables and validated against
  // RP historical quotes.
  var COMPLEXITY = {
    interior: {
      walls: 1.00,     // baseline (roller)
      ceiling: 0.666,  // simpler despite being slower
      primer: 0.711,   // straightforward single-coat
      'Door - Frame Standard': 2.78,
      'Door - Frame Double': 2.78,
      'Door - Flat': 3.12,
      'Door - w/ Panels': 3.08,
      'Door - w/ Glass': 2.78,
      'Window - Standard Frame': 3.71,
      'Window - Small Frame': 4.17,
      'Trim - Baseboard/Crown': 2.50,
      'Trim - Wainscotting': 2.78,
      'Trim - Spindles/Balusters': 2.55,
      'Trim - Radiator': 2.78,
      'Trim - Handrail': 3.12,
      'Repair - Drywall Repair': 2.26
    },
    exterior_siding: {
      'Cedar Shingles': 7.99,
      'Clapboard': 9.99,
      'HardieBoard': 7.99,
      'PVC Siding': 7.77,
      'Decking': 8.33
    },
    exterior: {
      // Doors
      'Standard Frame': 2.22,
      'Double Frame': 2.50,
      'w/Glass': 2.78,
      'w/Panels': 2.66,
      'Metal': 2.41,
      'High Gloss': 3.08,
      'Bulkhead': 4.16,
      'Garage': 2.96,
      // Windows
      'Standard': 3.33,
      'Non-Standard': 3.42,
      'Dormer': 4.27,
      'Bay': 4.44,
      'Shutters': 3.17,
      'Basement': 2.96,
      // Trim
      'Fascia (10ft)': 3.70,
      'Dentil Molding': 3.70,
      'Downspout': 3.55,
      'Column': 4.44,
      'Soffit (10ft)': 4.04,
      'Spindles (10ft)': 2.54,
      'Staircase': 3.70,
      'Handrail': 3.70,
      'Fencing (10ft)': 3.47,
      'Dormer Fascia': 4.04,
      'Porch Ceiling': 3.70,
      'Ornate': 3.33,
      // Carpentry repairs (siding uses the exterior_siding table above)
      'Cedar Shingle (1/2 Sq)': 3.70,
      'Cedar Shingle (1 Sq)': 4.00,
      'Clapboard': 4.16,
      'Fascia Board (8ft)': 3.70,
      'Molding (8ft)': 3.55,
      'Window Sill': 3.70,
      'Window Frame': 4.16,
      'Window Flashing': 3.95,
      'Spindle': 2.78,
      'Newel Post': 3.70,
      'Handrail Assy': 3.70,
      'Deck Board (12ft)': 3.55,
      'Deck Board Premium': 4.44
    }
  };

  // ─── CONDITION MODIFIERS ─────────────────────────────────────
  // Bad conditions = slower production = more hours = higher cost.
  var CONDITION_MODIFIERS = {
    surface_grade: { A: 1.00, B: 1.00, C: 0.85, D: 0.70 },
    prep_level: { Basic: 1.10, Standard: 1.00, Superior: 0.80, Restoration: 0.60 }
  };

  // ─── WALL SQFT LOOKUP ────────────────────────────────────────
  var WALL_SQFT = {
    'Kitchen':            { Small: 240, Medium: 416, Large: 512 },
    'Living Room':        { Small: 480, Medium: 576, Large: 800 },
    'Bedroom':            { Small: 320, Medium: 384, Large: 420 },
    'Master Bedroom':     { Small: 416, Medium: 544, Large: 640 },
    'Dining Room':        { Small: 352, Medium: 448, Large: 512 },
    'Bathroom':           { Small: 176, Medium: 256, Large: 304 },
    'Full Bathroom':      { Small: 240, Medium: 272, Large: 320 },
    'Foyer/Hallway':      { Small: 192, Medium: 256, Large: 368 },
    'Closet':             { Small: 80,  Medium: 96,  Large: 128 },
    'Den':                { Small: 320, Medium: 384, Large: 480 },
    'Office':             { Small: 372, Medium: 416, Large: 512 },
    'Media Room':         { Small: 276, Medium: 448, Large: 544 },
    'Eating Area':        { Small: 320, Medium: 384, Large: 512 },
    'Pantry':             { Small: 64,  Medium: 112, Large: 168 },
    'Laundry Room':       { Small: 144, Medium: 224, Large: 372 },
    'Utility/Mud Room':   { Small: 176, Medium: 224, Large: 372 },
    'Recreation Room':    { Small: 480, Medium: 640, Large: 768 },
    'Family Room':        { Small: 448, Medium: 544, Large: 640 },
    /* Staircase Hallway is sized by LEVELS SPANNED, not by floor area:
       Small = 1 level, Medium = 2, Large = 3, XL = 4. The 2->3 step is +288 sqft,
       so 4 levels extrapolates linearly to 1152. XL exists for this room type only. */
    'Staircase Hallway':  { Small: 296, Medium: 576, Large: 864 }
  };

  var CEILING_RATIO = {
    'Kitchen': 0.50, 'Living Room': 0.40, 'Bedroom': 0.45, 'Master Bedroom': 0.40,
    'Dining Room': 0.45, 'Bathroom': 0.55, 'Full Bathroom': 0.50, 'Foyer/Hallway': 0.35,
    'Closet': 0.60, 'Den': 0.45, 'Office': 0.45, 'Media Room': 0.40,
    'Eating Area': 0.45, 'Pantry': 0.55, 'Laundry Room': 0.50, 'Utility/Mud Room': 0.50,
    'Recreation Room': 0.35, 'Family Room': 0.40, 'Staircase Hallway': 0.30
  };

  var CLOSET_SQFT = { small: 48, medium: 64, large: 96 };

  /* ─── CATALOG PRICING (single source of truth: Generator "Catalog" tab) ───
     The gate charges Catalog sales price × (1 + settings.quote_premium).
     wall sales $ = WALL_SQFT[type][size] × CATALOG_WALL_RATE[type][size];
     ceiling/primer sales = walls sales × 0.66 (sub ratio) × 0.33 × 1.5 —
     the Generator's own formulas (Estimate room block G/H columns).
     Live-editable via the PRICING sheet (sections wall_rate / item_sales). */
  var CATALOG_WALL_RATE = {
    'Kitchen': { Small: 2.97, Medium: 2.7225, Large: 2.475 },
    'Living Room': { Small: 2.475, Medium: 2.475, Large: 1.98 },
    'Bedroom': { Small: 2.475, Medium: 2.2275, Large: 2.59875 },
    'Master Bedroom': { Small: 2.7225, Medium: 2.475, Large: 2.475 },
    'Dining Room': { Small: 2.97, Medium: 2.7225, Large: 2.7225 },
    'Bathroom': { Small: 3.135, Medium: 3.135, Large: 3.135 },
    'Full Bathroom': { Small: 3.135, Medium: 3.135, Large: 3.135 },
    'Foyer/Hallway': { Small: 3.135, Medium: 3.85, Large: 5.28 },
    'Closet': { Small: 1.98, Medium: 1.8975, Large: 1.815 },
    'Den': { Small: 2.97, Medium: 2.7225, Large: 2.475 },
    'Office': { Small: 2.97, Medium: 2.97, Large: 2.7225 },
    'Media Room': { Small: 3.135, Medium: 2.8875, Large: 2.7225 },
    'Eating Area': { Small: 2.805, Medium: 2.5575, Large: 2.31 },
    'Pantry': { Small: 3.3, Medium: 3.0525, Large: 2.805 },
    'Laundry Room': { Small: 3.0525, Medium: 3.0525, Large: 2.805 },
    'Utility/Mud Room': { Small: 3.3, Medium: 3.0525, Large: 2.805 },
    'Recreation Room': { Small: 2.805, Medium: 2.5575, Large: 2.31 },
    'Family Room': { Small: 2.805, Medium: 2.5575, Large: 2.5575 },
    'Staircase Hallway': { Small: 3.36875, Medium: 3.08, Large: 3.08 }
  };
  var CATALOG_ITEM_SALES = {
    'Window - Standard Frame': 82.5,
    'Door - Frame Standard': 41.25,
    'Trim - Baseboard/Crown': 61.875,
    'Door - w/ Panels': 83.875,
    'Repair - Drywall Repair': 83.875,
    'Door - Flat': 61.875,
    'Door - w/ Glass': 82.5,
    'Door - Frame Double': 61.875,
    'Window - Small Frame': 61.875,
    'Trim - Wainscotting': 165,
    'Trim - Spindles/Balusters': 315.557,
    'Trim - Radiator': 82.5,
    'Trim - Handrail': 123.75
  };
  /* The 4-level staircase has no Catalog row of its own. Derive it from the 3-level
     values rather than carrying a literal, which silently goes stale the moment the
     Catalog moves (a raise once left 4 levels cheaper than 3). Called again from
     applyOverrides so live Catalog edits reach it too. */
  function deriveStairXL() {
    var r = CATALOG_WALL_RATE['Staircase Hallway'];
    if (r) r.XL = r.Large;                                  /* same $/sqft as 3 levels */
    var s = WALL_SQFT['Staircase Hallway'];
    if (s) s.XL = s.Large + (s.Large - s.Medium);           /* one more step up the ladder */
  }
  deriveStairXL();

  var WALLS_SUB_RATIO = 0.66;   // walls sub_cost = sales × 0.66 (catalog K/L cols)
  var CEIL_OF_WALLS_SUB = 0.33; // Generator: ceiling sub = walls sub × 0.33
  var CEIL_MARKUP = 1.5;        //            ceiling sales = ceiling sub × 1.5
  var ITEM_SUB_DIV = 1.65;      // items: sub_cost = sales / 1.65 (catalog J/K)


  // ─── SQFT PER UNIT (material calculations) ───────────────────
  var INTERIOR_ITEM_SQFT = {
    'Window - Standard Frame': 15, 'Window - Small Frame': 25,
    'Door - Frame Standard': 8, 'Door - Frame Double': 12,
    'Door - Flat': 21, 'Door - w/ Panels': 21, 'Door - w/ Glass': 21,
    'Trim - Baseboard/Crown': 20, 'Trim - Wainscotting': 60,
    'Trim - Spindles/Balusters': 43, 'Trim - Radiator': 22,   /* spindles 43 sqft per 10ft like the Generator (its 430 was a typo, fixed there 2026-11-12) */
    'Trim - Handrail': 10, 'Repair - Drywall Repair': 50
  };

  var EXTERIOR_ITEM_SQFT = {
    siding: { 'Cedar Shingles': 200, 'Clapboard': 200, 'HardieBoard': 200, 'PVC Siding': 200, 'Decking': 200 },
    doors: { 'Standard Frame': 21, 'Double Frame': 42, 'w/Glass': 21, 'w/Panels': 21, 'Metal': 21, 'High Gloss': 21, 'Bulkhead': 30, 'Garage': 160 },
    windows: { 'Standard': 15, 'Non-Standard': 20, 'Dormer': 25, 'Bay': 30, 'Shutters': 12, 'Basement': 8 },
    trim: { 'Fascia (10ft)': 20, 'Dentil Molding': 10, 'Downspout': 8, 'Column': 30, 'Soffit (10ft)': 30, 'Spindles (10ft)': 430, 'Staircase': 60, 'Handrail': 10, 'Fencing (10ft)': 40, 'Dormer Fascia': 20, 'Porch Ceiling': 80, 'Ornate': 40 },
    carpentry_repairs: { 'Cedar Shingle (1/2 Sq)': 100, 'Cedar Shingle (1 Sq)': 200, 'Clapboard': 32, 'Fascia Board (8ft)': 8, 'Molding (8ft)': 8, 'Window Sill': 4, 'Window Frame': 12, 'Window Flashing': 6, 'Spindle': 2, 'Newel Post': 8, 'Handrail Assy': 20, 'Deck Board (12ft)': 12, 'Deck Board Premium': 12 }
  };

  var CARPENTRY_MATERIAL_PRICES = {
    'Cedar Shingle (1/2 Sq)': 150, 'Cedar Shingle (1 Sq)': 275, 'Clapboard': 45,
    'Fascia Board (8ft)': 30, 'Molding (8ft)': 25, 'Window Sill': 35,
    'Window Frame': 55, 'Window Flashing': 20, 'Spindle': 18,
    'Newel Post': 85, 'Handrail Assy': 120, 'Deck Board (12ft)': 30, 'Deck Board Premium': 55
  };

  // ─── JOB-SIZE POLICY THRESHOLDS ──────────────────────────────
  // For the instant-quote UI: totals above requires_walkthrough_min should
  // route to an in-person walkthrough instead of an instant number.
  var THRESHOLDS = {
    auto_approve_max: 5000,
    requires_walkthrough_min: 15000,
    progress_payment_min: 10000,
    max_rooms_per_quote: 16,
    deposit_percent: 0.33
  };

  // ─── UI OPTION LISTS ─────────────────────────────────────────
  var OPTIONS = {
    interior: {
      room_types: Object.keys(WALL_SQFT),
      room_sizes: ['Small', 'Medium', 'Large'],
      /* Staircase Hallway only: size means levels spanned, and it has a 4th tier */
      staircase_levels: [['Small', '1 level'], ['Medium', '2 levels'], ['Large', '3 levels'], ['XL', '4 levels']],
      // Approximate room dimensions per size, for UI labels
      size_dimensions: {
        'Kitchen':          { Small: '5 x 10',  Medium: '10 x 16', Large: '12 x 20' },
        'Living Room':      { Small: '12 x 18', Medium: '16 x 20', Large: '22 x 28' },
        'Bedroom':          { Small: '10 x 10', Medium: '12 x 12', Large: '14 x 16' },
        'Master Bedroom':   { Small: '12 x 14', Medium: '14 x 20', Large: '16 x 24' },
        'Dining Room':      { Small: '10 x 12', Medium: '12 x 16', Large: '14 x 18' },
        'Bathroom':         { Small: '5 x 6',   Medium: '6 x 10',  Large: '7 x 12' },
        'Full Bathroom':    { Small: '6 x 9',   Medium: '7 x 10',  Large: '8 x 12' },
        'Foyer/Hallway':    { Small: '6 x 6',   Medium: '8 x 10',  Large: '8 x 15' },
        'Closet':           { Small: '2 x 3',   Medium: '2 x 4',   Large: '2 x 6' },
        'Den':              { Small: '10 x 10', Medium: '12 x 12', Large: '14 x 16' },
        'Laundry Room':     { Small: '3 x 6',   Medium: '6 x 8',   Large: '8 x 10' },
        'Family Room':      { Small: '12 x 16', Medium: '14 x 20', Large: '16 x 24' },
        'Recreation Room':  { Small: '12 x 18', Medium: '16 x 24', Large: '18 x 30' }
      },
      closet_options: [
        { value: 'not_included', label: 'Not Included' },
        { value: 'small',  label: 'Small (2x3)' },
        { value: 'medium', label: 'Medium (2x4)' },
        { value: 'large',  label: 'Large (2x6)' }
      ],
      items: Object.keys(PRODUCTION.interior_items),
      surface_grades: ['A', 'B', 'C', 'D'],
      prep_levels: ['Basic', 'Standard', 'Superior', 'Restoration']
    },
    exterior: {
      surface_names: ['Front', 'Left Side', 'Rear', 'Right Side', 'Garage', 'Porch', 'Deck', 'Other'],
      siding: Object.keys(PRODUCTION.exterior_siding), // counted in squares; 1 square = 200 sqft
      doors: ['Standard Frame', 'Double Frame', 'w/Glass', 'w/Panels', 'Metal', 'High Gloss', 'Bulkhead', 'Garage'],
      windows: ['Standard', 'Non-Standard', 'Dormer', 'Bay', 'Shutters', 'Basement'],
      trim: ['Fascia (10ft)', 'Dentil Molding', 'Downspout', 'Column', 'Soffit (10ft)', 'Spindles (10ft)', 'Staircase', 'Handrail', 'Fencing (10ft)', 'Dormer Fascia', 'Porch Ceiling', 'Ornate'],
      carpentry_repairs: ['Cedar Shingle (1/2 Sq)', 'Cedar Shingle (1 Sq)', 'Clapboard', 'Fascia Board (8ft)', 'Molding (8ft)', 'Window Sill', 'Window Frame', 'Window Flashing', 'Spindle', 'Newel Post', 'Handrail Assy', 'Deck Board (12ft)', 'Deck Board Premium'],
      surface_grades: ['A', 'B', 'C', 'D'],
      prep_levels: ['Basic', 'Standard', 'Superior', 'Restoration'],
      color_schemes: ['1-2 Colors', '3 Colors', '4 Colors']
    }
  };

  // ─── SETTINGS / CONFIG RESOLUTION ────────────────────────────
  function resolveSettings(options) {
    var o = options || {};
    return {
      crew_wage: nn(o.crew_wage, DEFAULT_SETTINGS.crew_wage),
      crew_size: nn(o.crew_size, DEFAULT_SETTINGS.crew_size),
      gross_margin: nn(o.gross_margin, DEFAULT_SETTINGS.gross_margin),
      eos_enabled: nn(o.eos_enabled, DEFAULT_SETTINGS.eos_enabled),
      mobilization_hours: nn(o.mobilization_hours, DEFAULT_SETTINGS.mobilization_hours),
      setup_hours_per_area: nn(o.setup_hours_per_area, DEFAULT_SETTINGS.setup_hours_per_area),
      quote_premium: (o.quote_premium !== undefined && isFinite(Number(o.quote_premium)))
        ? Number(o.quote_premium) : DEFAULT_SETTINGS.quote_premium,
      shelves_uplift: (o.shelves_uplift !== undefined && isFinite(Number(o.shelves_uplift)))
        ? Number(o.shelves_uplift) : DEFAULT_SETTINGS.shelves_uplift,
      paint_coats: (Number(o.paint_coats) >= 1 && Number(o.paint_coats) <= 3) ? Number(o.paint_coats) : DEFAULT_SETTINGS.paint_coats,
      tp_hourly: (Number(o.tp_hourly) > 0) ? Number(o.tp_hourly) : DEFAULT_SETTINGS.tp_hourly
    };
  }

  function resolveSurcharges(options) {
    var out = {};
    var over = (options && options.surcharges) || {};
    for (var k in DEFAULT_SURCHARGES) {
      out[k] = nn(over[k], DEFAULT_SURCHARGES[k]);
    }
    return out;
  }

  function resolveMaterials(options) {
    var over = (options && options.materials) || {};
    function pick(section, key) {
      var d = DEFAULT_MATERIALS[section][key];
      var o = (over[section] && over[section][key]) || {};
      return {
        product: o.product || d.product,
        coverage: (o.coverage && o.coverage > 0) ? o.coverage : d.coverage,
        price_per_gallon: (o.price_per_gallon !== null && o.price_per_gallon !== undefined && o.price_per_gallon >= 0) ? o.price_per_gallon : d.price_per_gallon
      };
    }
    return {
      interior: { walls: pick('interior', 'walls'), trim: pick('interior', 'trim'), primer: pick('interior', 'primer'), ceiling: pick('interior', 'ceiling') },
      exterior: { siding: pick('exterior', 'siding'), trim: pick('exterior', 'trim') }
    };
  }

  // ─── CORE FORMULA ────────────────────────────────────────────
  // hours × wage × complexity = labor_cost
  // labor_cost / (1 - margin) = sales_price
  function priceFromHours(hours, wage, margin, complexityFactor) {
    var cf = (complexityFactor === undefined) ? 1.0 : complexityFactor;
    var laborCost = hours * wage * cf;
    var salesPrice = laborCost / (1 - margin);
    return { sub_cost: laborCost, sales_price: salesPrice };
  }

  // "Setup & Mobilization" section shown when economy-of-scale is enabled.
  // Complexity 1.0 — plain labor time, not skilled brushwork.
  function mobilizationSection(hours, areaCount, areaNoun, wage, margin) {
    var price = priceFromHours(hours, wage, margin, 1.0);
    return {
      label: 'Setup & Mobilization',
      items: [{
        label: 'Mobilization, protection & site setup (' + areaCount + ' ' + areaNoun + (areaCount === 1 ? '' : 's') + ')',
        quantity: 1,
        sub_cost: price.sub_cost,
        sales_price: price.sales_price,
        allocated_time: hours
      }],
      sub_cost: price.sub_cost,
      sales_price: price.sales_price
    };
  }

  // ═════════════════════════════════════════════════════════════
  // INTERIOR
  // ═════════════════════════════════════════════════════════════
  function quoteInterior(scope, options) {
    var settings = resolveSettings(options);
    var crew_wage = settings.crew_wage;
    var gross_margin = settings.gross_margin;
    var project = scope.project || {};
    var rooms = scope.rooms || [];

    var gradeMod = nn(CONDITION_MODIFIERS.surface_grade[project.surface_grade], 1.0);
    var prepMod = nn(CONDITION_MODIFIERS.prep_level[project.prep_level], 1.0);
    var conditionMod = gradeMod * prepMod;
    var premium = 1 + Math.max(0, Number(settings.quote_premium) || 0);

    var sections = [];
    var totalSubCost = 0;
    var totalSalesPrice = 0;
    var totalPainterHours = 0;
    var totalWallSqft = 0;
    var totalCeilingSqft = 0;
    var totalTrimSqft = 0;
    var totalPrimerSqft = 0;
    var genHours = 0, genRooms = 0;

    for (var r = 0; r < rooms.length; r++) {
      var room = rooms[r];
      var wallSqft = (WALL_SQFT[room.room_type] && WALL_SQFT[room.room_type][room.room_size]) || 300;
      var ceilingRatio = CEILING_RATIO[room.room_type] || 0.45;
      var ceilingSqft = room.ceiling_included ? ceilSqftFor(room.room_type, room.room_size, wallSqft, ceilingRatio) : 0;   /* Generator ceiling areas (2026-11-23) */
      /* Walls toggle (2026-11-03): a ceiling-only room keeps its wall-based sizing so the
         ceiling and primer lines price exactly as before (a fraction of the wall price,
         the same model as the Generator's per-room Walls cell); only the Walls line
         itself and its paint are dropped. */
      var wallsIncluded = room.walls_included !== false;
      var items = [];
      /* v3.14: each room carries its own wall condition (falls back to the project's) */
      conditionMod = gradeMod * nn(CONDITION_MODIFIERS.prep_level[room.prep_level || project.prep_level], 1.0);
      /* Generator hours (2026-11-23): trade-partner cost of each line / painter hourly rate */
      var gWall = wallSub(room.room_type, room.room_size);
      if (gWall === null) gWall = wallSqft * ((CATALOG_WALL_RATE[room.room_type] && CATALOG_WALL_RATE[room.room_type][room.room_size]) || 1.65) * subRatio();   /* generic room: same share as the Catalog rooms */
      var gOk = gWall !== null, gSub = 0;
      if (gOk && wallsIncluded) gSub += gWall;

      // Walls
      var wallHours = (wallSqft / PRODUCTION.interior_walls) / conditionMod;
      var wallRate = (CATALOG_WALL_RATE[room.room_type] && CATALOG_WALL_RATE[room.room_type][room.room_size]) || 1.65;
      var wallsBaseSales = wallSqft * wallRate;                    // Catalog sales $
      var wallSales = (wallsBaseSales * premium) / conditionMod;
      var wallPrice = { sub_cost: wallSales * WALLS_SUB_RATIO, sales_price: wallSales };
      if (wallsIncluded) {
        items.push({
          label: 'Walls (' + wallSqft + ' sqft)',
          quantity: 1,
          sub_cost: wallPrice.sub_cost,
          sales_price: wallPrice.sales_price,
          allocated_time: wallHours
        });
        totalWallSqft += wallSqft;
      }

      // Ceiling
      if (room.ceiling_included) {
        var ceilHours = (ceilingSqft / PRODUCTION.interior_ceiling) / conditionMod;
        var ceilSub = (wallsBaseSales * WALLS_SUB_RATIO * CEIL_OF_WALLS_SUB * premium) / conditionMod;
        var ceilPrice = { sub_cost: ceilSub, sales_price: ceilSub * CEIL_MARKUP };
        items.push({
          label: 'Ceiling (' + ceilingSqft + ' sqft)',
          quantity: 1,
          sub_cost: ceilPrice.sub_cost,
          sales_price: ceilPrice.sales_price,
          allocated_time: ceilHours
        });
        totalCeilingSqft += ceilingSqft;
        if (gOk) gSub += gWall * 0.33;                 /* Generator: ceiling sub = walls sub x 0.33 */
      }

      // Closet
      var closet = nn(room.closet, 'not_included');
      if (closet !== 'not_included') {
        var closetSqft = CLOSET_SQFT[closet] || 0;
        var closetHours = (closetSqft / PRODUCTION.interior_walls) / conditionMod;
        var closetSizeKey = closet === 'small' ? 'Small' : closet === 'medium' ? 'Medium' : 'Large';
        var closetSales = (((WALL_SQFT['Closet'] && WALL_SQFT['Closet'][closetSizeKey]) || 80) *
                           ((CATALOG_WALL_RATE['Closet'] && CATALOG_WALL_RATE['Closet'][closetSizeKey]) || 1.32) *
                           premium) / conditionMod;
        var closetPrice = { sub_cost: closetSales * WALLS_SUB_RATIO, sales_price: closetSales };
        items.push({
          label: 'Closet (' + closet + ')',
          quantity: 1,
          sub_cost: closetPrice.sub_cost,
          sales_price: closetPrice.sales_price,
          allocated_time: closetHours
        });
        totalWallSqft += ((WALL_SQFT['Closet'] && WALL_SQFT['Closet'][closetSizeKey]) || closetSqft);   /* paint: Generator closet wall area (80/96/128) */
        var gCloset = wallSub('Closet', closetSizeKey);
        if (gCloset === null) gOk = false; else gSub += gCloset * (1 + (room.closet_shelves ? Math.max(0, Number(settings.shelves_uplift) || 0) : 0));
        // Shelving rides the closet price so it inherits size/condition/premium
        if (room.closet_shelves) {
          var shelvesUplift = Math.max(0, Number(settings.shelves_uplift) || 0);
          items.push({
            label: 'Closet shelving',
            quantity: 1,
            sub_cost: closetPrice.sub_cost * shelvesUplift,
            sales_price: closetPrice.sales_price * shelvesUplift,
            allocated_time: closetHours * shelvesUplift
          });
        }
      }

      // Primer
      if (room.primer_required) {
        var primerSqft = (wallsIncluded ? wallSqft : 0) + ceilingSqft;
        totalPrimerSqft += primerSqft;
        if (gOk) gSub += gWall * 0.33;                 /* Generator: primer sub = walls sub x 0.33 */
        var primerHours = (primerSqft / PRODUCTION.interior_primer) / conditionMod;
        var primerSub = (wallsBaseSales * WALLS_SUB_RATIO * CEIL_OF_WALLS_SUB * premium) / conditionMod;
        var primerPrice = { sub_cost: primerSub, sales_price: primerSub * CEIL_MARKUP };
        items.push({
          label: 'Primer (' + primerSqft + ' sqft)',
          quantity: 1,
          sub_cost: primerPrice.sub_cost,
          sales_price: primerPrice.sales_price,
          allocated_time: primerHours
        });
      }

      // Line items (doors, windows, trim, repairs)
      var roomItems = room.items || {};
      for (var itemName in roomItems) {
        var qty = roomItems[itemName];
        if (qty <= 0) continue;
        var itemHoursEach = PRODUCTION.interior_items[itemName];
        if (itemHoursEach === undefined) continue;

        var totalItemHours = (itemHoursEach * qty) / conditionMod;
        var itemPrice;
        var catSales = CATALOG_ITEM_SALES[itemName];
        if (catSales !== undefined) {
          var itemSales = (catSales * qty * premium) / conditionMod;
          itemPrice = { sub_cost: itemSales / ITEM_SUB_DIV, sales_price: itemSales };
        } else {
          var cf = nn(COMPLEXITY.interior[itemName], 1.5);
          itemPrice = priceFromHours(totalItemHours, crew_wage, gross_margin, cf);
        }

        items.push({
          label: itemName,
          quantity: qty,
          sub_cost: itemPrice.sub_cost,
          sales_price: itemPrice.sales_price,
          allocated_time: totalItemHours
        });

        if (itemName.indexOf('Trim') === 0 || itemName.indexOf('Door') === 0 || itemName.indexOf('Window') === 0) {
          totalTrimSqft += nn(INTERIOR_ITEM_SQFT[itemName], 0) * qty;
        }
        if (ITEM_SUB[itemName] > 0) gSub += ITEM_SUB[itemName] * qty; else gOk = false;
      }

      var sectionSubCost = items.reduce(function (s, i) { return s + i.sub_cost; }, 0);
      var sectionSalesPrice = items.reduce(function (s, i) { return s + i.sales_price; }, 0);
      var sectionTime = items.reduce(function (s, i) { return s + i.allocated_time; }, 0);

      sections.push({
        label: room.room_type + ' (' + room.room_size + ')',
        items: items,
        sub_cost: sectionSubCost,
        sales_price: sectionSalesPrice
      });

      totalSubCost += sectionSubCost;
      totalSalesPrice += sectionSalesPrice;
      totalPainterHours += sectionTime;
      genHours += gOk ? gSub / settings.tp_hourly : sectionTime;
      if (gOk) genRooms++;
    }

    // Economy of scale: fixed setup/mobilization block per job, FOLDED
    // invisibly into room prices (Ryan 2026-07-31). Priced at the Generator's
    // internal $40/hr fee basis (matches the Generator's own J504 fold) plus
    // the quote premium, spread across rooms proportional to their price.
    if (settings.eos_enabled) {
      var roomCount0 = rooms.length;
      var mobHours = settings.mobilization_hours + settings.setup_hours_per_area * roomCount0;
      var mobSales = mobHours * 40 * premium;
      var mobSub = mobSales * WALLS_SUB_RATIO;
      var baseSales = totalSalesPrice || 1;
      var fSales = 1 + mobSales / baseSales;
      var fSub = totalSubCost > 0 ? 1 + mobSub / totalSubCost : 1;
      sections.forEach(function (sec) {
        sec.sales_price = sec.sales_price * fSales;
        sec.sub_cost = sec.sub_cost * fSub;
        (sec.items || []).forEach(function (it) {
          it.sales_price = it.sales_price * fSales;
          it.sub_cost = it.sub_cost * fSub;
        });
      });
      totalSubCost += mobSub;
      totalSalesPrice += mobSales;
      totalPainterHours += mobHours;
    }

    // Surcharges — flat costs (margin is already embedded in line items)
    var scfg = resolveSurcharges(options);
    var mcfg = resolveMaterials(options);
    var surcharges = [];

    if (project.color_samples && scfg.color_samples_enabled && scfg.color_samples_amount > 0) {
      surcharges.push({ label: 'Color Samples', sub_amount: scfg.color_samples_amount, sales_amount: scfg.color_samples_amount });
    }
    if (project.transportation && scfg.transportation_enabled && scfg.transportation_amount > 0) {
      surcharges.push({ label: 'Transportation', sub_amount: scfg.transportation_amount, sales_amount: scfg.transportation_amount });
    }
    if (scfg.trash_enabled && scfg.trash_interior > 0) {
      surcharges.push({ label: 'Trash Removal', sub_amount: scfg.trash_interior, sales_amount: scfg.trash_interior });
    }

    var surchargeSalesTotal = surcharges.reduce(function (s, sc) { return s + sc.sales_amount; }, 0);
    var laborTotal = totalSalesPrice + surchargeSalesTotal;

    // Materials
    var materials = [];
    var coats = settings.paint_coats || 1;   /* Generator: 2 coats on walls, trim, ceiling; primer 1 */
    var wallGallons = Math.ceil(totalWallSqft * coats / mcfg.interior.walls.coverage);
    if (wallGallons > 0) {
      materials.push({ label: mcfg.interior.walls.product, gallons: wallGallons, cost: wallGallons * mcfg.interior.walls.price_per_gallon });
    }
    var trimGallons = Math.ceil(totalTrimSqft * coats / mcfg.interior.trim.coverage);
    if (trimGallons > 0) {
      materials.push({ label: mcfg.interior.trim.product, gallons: trimGallons, cost: trimGallons * mcfg.interior.trim.price_per_gallon });
    }
    if (totalPrimerSqft > 0) {
      var primerGallons = Math.ceil(totalPrimerSqft / mcfg.interior.primer.coverage);
      materials.push({ label: mcfg.interior.primer.product, gallons: primerGallons, cost: primerGallons * mcfg.interior.primer.price_per_gallon });
    }
    if (totalCeilingSqft > 0) {
      var ceilingGallons = Math.ceil(totalCeilingSqft * coats / mcfg.interior.ceiling.coverage);
      materials.push({ label: mcfg.interior.ceiling.product, gallons: ceilingGallons, cost: ceilingGallons * mcfg.interior.ceiling.price_per_gallon });
    }

    var materialSubtotal = materials.reduce(function (s, m) { return s + m.cost; }, 0);
    var wastage = materialSubtotal * 0.10;
    var materialsTotal = materialSubtotal + wastage;

    // CC surcharge on grand total
    var grandBeforeCC = laborTotal + materialsTotal;
    var ccFee = scfg.cc_fee_enabled ? grandBeforeCC * scfg.cc_pct : 0;
    if (scfg.cc_fee_enabled && scfg.cc_pct > 0) {
      surcharges.push({ label: 'CC Fee (' + (scfg.cc_pct * 100).toFixed(1) + '%)', sub_amount: ccFee, sales_amount: ccFee });
    }

    /* Size curve (2026-11-23): same as the Generator, total = (labor + surcharges) x factor + paint,
       factor read off Config!B17:C23 at the job's raw total. Lines are scaled so they still add up. */
    var sizeF = sizeFactor(grandBeforeCC + ccFee);
    if (sizeF > 0 && sizeF !== 1) {
      sections.forEach(function (sec) {
        sec.sales_price = sec.sales_price * sizeF;
        (sec.items || []).forEach(function (it) { it.sales_price = it.sales_price * sizeF; });
      });
      surcharges.forEach(function (sc) { sc.sales_amount = sc.sales_amount * sizeF; });
      totalSalesPrice = totalSalesPrice * sizeF;
      laborTotal = laborTotal * sizeF;
      ccFee = ccFee * sizeF;
    }
    var grandTotal = laborTotal + ccFee + materialsTotal;

    // Production: Generator hours when the feed has the room costs, 3 painters above 48 hours
    var paintingHours = genRooms > 0 ? genHours : totalPainterHours;
    var crewSize = paintingHours > 48 ? 3 : 2;
    var durationDays = Math.max(paintingHours / crewSize / 8, 0.5);

    return {
      trade_type: 'interior',
      sections: sections,
      labor_subtotal: totalSalesPrice,
      surcharges: surcharges,
      labor_total: laborTotal + ccFee,
      materials: materials,
      materials_total: materialsTotal,
      grand_total: grandTotal,
      size_factor: sizeF,
      production: { painting_hours: paintingHours, crew_size: crewSize, duration_days: durationDays }
    };
  }

  // ═════════════════════════════════════════════════════════════
  // EXTERIOR
  // ═════════════════════════════════════════════════════════════
  function quoteExterior(scope, options) {
    var settings = resolveSettings(options);
    var crew_wage = settings.crew_wage;
    var gross_margin = settings.gross_margin;
    var project = scope.project || {};
    var surfaces = scope.surfaces || [];

    var gradeMod = nn(CONDITION_MODIFIERS.surface_grade[project.surface_grade], 1.0);
    var prepMod = nn(CONDITION_MODIFIERS.prep_level[project.prep_level], 1.0);
    var conditionMod = gradeMod * prepMod;
    var premium = 1 + Math.max(0, Number(settings.quote_premium) || 0);

    var sections = [];
    var totalSubCost = 0;
    var totalSalesPrice = 0;
    var totalPainterHours = 0;
    var totalSidingSqft = 0;
    var totalTrimSqft = 0;
    var totalCarpentryMaterials = 0;

    var categories = ['siding', 'doors', 'windows', 'trim', 'carpentry_repairs'];

    for (var si = 0; si < surfaces.length; si++) {
      var surface = surfaces[si];
      var items = [];

      // Setup time per surface (flat, per crew). With economy of scale on,
      // the job-level mobilization block absorbs the truck/site overhead,
      // so per-surface setup drops to the smaller staging-only figure.
      var setupHours = settings.eos_enabled
        ? settings.setup_hours_per_area
        : PRODUCTION.exterior_setup_per_surface;
      var setupPrice = priceFromHours(setupHours, crew_wage, gross_margin, 1.0);
      items.push({
        label: 'Setup & Staging',
        quantity: 1,
        sub_cost: setupPrice.sub_cost,
        sales_price: setupPrice.sales_price,
        allocated_time: setupHours
      });

      for (var c = 0; c < categories.length; c++) {
        var category = categories[c];
        var surfaceItems = surface[category];
        if (!surfaceItems) continue;

        for (var itemName in surfaceItems) {
          var qty = surfaceItems[itemName];
          if (qty <= 0) continue;

          var itemHoursEach;
          var cf;

          if (category === 'siding') {
            // Area-based: siding is counted in squares (1 square = 200 sqft)
            var sqftPerUnit = nn(EXTERIOR_ITEM_SQFT.siding[itemName], 200);
            var sidingRate = nn(PRODUCTION.exterior_siding[itemName], 180);
            itemHoursEach = sqftPerUnit / sidingRate;
            cf = nn(COMPLEXITY.exterior_siding[itemName], 8.0);
            totalSidingSqft += sqftPerUnit * qty;
          } else {
            // Discrete items
            itemHoursEach = nn(PRODUCTION.exterior_items[itemName], 0.50);
            cf = nn(COMPLEXITY.exterior[itemName], 1.5);

            var sqft = nn(EXTERIOR_ITEM_SQFT[category] && EXTERIOR_ITEM_SQFT[category][itemName], 0);
            if (category === 'trim' || category === 'doors' || category === 'windows') {
              totalTrimSqft += sqft * qty;
            }
            if (category === 'carpentry_repairs') {
              var matPrice = nn(CARPENTRY_MATERIAL_PRICES[itemName], 0);
              totalCarpentryMaterials += matPrice * qty * 0.75;
            }
          }

          var totalItemHours = (itemHoursEach * qty) / conditionMod;
          var itemPrice = priceFromHours(totalItemHours, crew_wage, gross_margin, cf);

          items.push({
            label: itemName,
            quantity: qty,
            sub_cost: itemPrice.sub_cost,
            sales_price: itemPrice.sales_price,
            allocated_time: totalItemHours
          });
        }
      }

      var sectionSubCost = items.reduce(function (s, i) { return s + i.sub_cost; }, 0);
      var sectionSalesPrice = items.reduce(function (s, i) { return s + i.sales_price; }, 0);
      var sectionTime = items.reduce(function (s, i) { return s + i.allocated_time; }, 0);

      sections.push({ label: surface.name, items: items, sub_cost: sectionSubCost, sales_price: sectionSalesPrice });
      totalSubCost += sectionSubCost;
      totalSalesPrice += sectionSalesPrice;
      totalPainterHours += sectionTime;
    }

    // Economy of scale: job-level mobilization once per job; per-surface
    // staging stays in each surface section (at the reduced rate).
    if (settings.eos_enabled) {
      var surfaceCount0 = surfaces.length;
      var mob = mobilizationSection(settings.mobilization_hours, surfaceCount0, 'surface', crew_wage, gross_margin);
      sections.unshift(mob);
      totalSubCost += mob.sub_cost;
      totalSalesPrice += mob.sales_price;
      totalPainterHours += settings.mobilization_hours;
    }

    // Surcharges
    var scfg = resolveSurcharges(options);
    var mcfg = resolveMaterials(options);
    var surcharges = [];

    if (project.color_samples && scfg.color_samples_enabled && scfg.color_samples_amount > 0) {
      surcharges.push({ label: 'Color Samples', sub_amount: scfg.color_samples_amount, sales_amount: scfg.color_samples_amount });
    }
    if (scfg.transportation_enabled && scfg.transportation_amount > 0) {
      surcharges.push({ label: 'Transportation', sub_amount: scfg.transportation_amount, sales_amount: scfg.transportation_amount });
    }
    if (scfg.trash_enabled && scfg.trash_exterior > 0) {
      surcharges.push({ label: 'Trash Removal', sub_amount: scfg.trash_exterior, sales_amount: scfg.trash_exterior });
    }

    // Staging — additional hours, not a % markup
    if (project.staging) {
      var stagingHours = totalPainterHours * 0.10;
      var stagingPrice = priceFromHours(stagingHours, crew_wage, gross_margin, 1.0);
      surcharges.push({ label: 'Staging', sub_amount: stagingPrice.sub_cost, sales_amount: stagingPrice.sales_price });
      totalPainterHours += stagingHours;
    }

    // Color scheme complexity — more colors = more masking time
    if (project.color_scheme === '3 Colors') {
      var colorHours3 = totalPainterHours * 0.05;
      var colorPrice3 = priceFromHours(colorHours3, crew_wage, gross_margin, 1.0);
      surcharges.push({ label: '3-Color Scheme', sub_amount: colorPrice3.sub_cost, sales_amount: colorPrice3.sales_price });
      totalPainterHours += colorHours3;
    } else if (project.color_scheme === '4 Colors') {
      var colorHours4 = totalPainterHours * 0.08;
      var colorPrice4 = priceFromHours(colorHours4, crew_wage, gross_margin, 1.0);
      surcharges.push({ label: '4-Color Scheme', sub_amount: colorPrice4.sub_cost, sales_amount: colorPrice4.sales_price });
      totalPainterHours += colorHours4;
    }

    var surchargeSalesTotal = surcharges.reduce(function (s, sc) { return s + sc.sales_amount; }, 0);
    var laborTotal = totalSalesPrice + surchargeSalesTotal;

    // Materials
    var materials = [];
    var sidingGallons = Math.ceil(totalSidingSqft / mcfg.exterior.siding.coverage);
    if (sidingGallons > 0) {
      materials.push({ label: mcfg.exterior.siding.product, gallons: sidingGallons, cost: sidingGallons * mcfg.exterior.siding.price_per_gallon });
    }
    var trimGallons = Math.ceil(totalTrimSqft / mcfg.exterior.trim.coverage);
    if (trimGallons > 0) {
      materials.push({ label: mcfg.exterior.trim.product, gallons: trimGallons, cost: trimGallons * mcfg.exterior.trim.price_per_gallon });
    }
    if (totalCarpentryMaterials > 0) {
      materials.push({ label: 'Carpentry Materials', gallons: 0, cost: totalCarpentryMaterials });
    }

    var materialSubtotal = materials.reduce(function (s, m) { return s + m.cost; }, 0);
    var wastage = materialSubtotal * 0.10;
    var materialsTotal = materialSubtotal + wastage;

    // CC fee
    var grandBeforeCC = laborTotal + materialsTotal;
    var ccFee = scfg.cc_fee_enabled ? grandBeforeCC * scfg.cc_pct : 0;
    if (scfg.cc_fee_enabled && scfg.cc_pct > 0) {
      surcharges.push({ label: 'CC Fee (' + (scfg.cc_pct * 100).toFixed(1) + '%)', sub_amount: ccFee, sales_amount: ccFee });
    }

    var grandTotal = grandBeforeCC + ccFee;

    // Production
    var paintingHours = totalPainterHours;
    var crewSize = settings.crew_size || (paintingHours > 24 ? 3 : 2);
    var durationDays = Math.max(paintingHours / crewSize / 8, 0.5);

    return {
      trade_type: 'exterior',
      sections: sections,
      labor_subtotal: totalSalesPrice,
      surcharges: surcharges,
      labor_total: laborTotal + ccFee,
      materials: materials,
      materials_total: materialsTotal,
      grand_total: grandTotal,
      production: { painting_hours: paintingHours, crew_size: crewSize, duration_days: durationDays }
    };
  }

  /* ─── LIVE PRICING OVERRIDES ────────────────────────────────────
     Merges a config object (served from the RP Pricing sheet via Apps Script)
     over the baked-in tables. Only positive numeric values for KNOWN keys are
     applied — a typo'd row in the sheet can never corrupt the engine. Shape:
     { settings:{crew_wage,...}, thresholds:{requires_walkthrough_min,...},
       interior_production:{'Door - Flat':0.4,...}, interior_complexity:{...},
       production_rates:{interior_walls:150,...},
       exterior_production:{...}, exterior_complexity:{...},
       siding_production:{...}, siding_complexity:{...},
       material_prices:{'interior.walls':63.59,...}, wall_sqft:{'Bedroom|Medium':384,...} } */
  function applyOverrides(cfg) {
    if (!cfg || typeof cfg !== "object") return;
    function num(v) { var n = Number(v); return (isFinite(n) && n > 0) ? n : null; }
    function mergeKnown(target, src) {
      if (!target || !src) return;
      Object.keys(src).forEach(function (k) {
        if (Object.prototype.hasOwnProperty.call(target, k)) {
          var v = num(src[k]); if (v !== null) target[k] = v;
        }
      });
    }
    var qpIn = cfg.settings && cfg.settings.quote_premium;   /* checked before the merge: 0 is allowed, more than 50% is a typo */
    mergeKnown(DEFAULT_SETTINGS, cfg.settings);
    if (qpIn !== undefined && qpIn !== null && qpIn !== '') {
      var qp = Number(qpIn);
      DEFAULT_SETTINGS.quote_premium = (isFinite(qp) && qp >= 0 && qp <= 0.5) ? qp : 0.04;
    }
    if (!(DEFAULT_SETTINGS.paint_coats >= 1 && DEFAULT_SETTINGS.paint_coats <= 3)) DEFAULT_SETTINGS.paint_coats = 2;
    mergeKnown(THRESHOLDS, cfg.thresholds);
    mergeKnown(PRODUCTION, cfg.production_rates);            /* interior_walls / interior_ceiling / interior_primer */
    mergeKnown(PRODUCTION.interior_items, cfg.interior_production);
    mergeKnown(COMPLEXITY.interior, cfg.interior_complexity);
    mergeKnown(PRODUCTION.exterior_items, cfg.exterior_production);
    mergeKnown(COMPLEXITY.exterior, cfg.exterior_complexity);
    mergeKnown(PRODUCTION.exterior_siding, cfg.siding_production);
    mergeKnown(COMPLEXITY.exterior_siding, cfg.siding_complexity);
    if (cfg.material_prices) Object.keys(cfg.material_prices).forEach(function (k) {
      var parts = k.split(".");                               /* e.g. "interior.walls" */
      var m = DEFAULT_MATERIALS[parts[0]] && DEFAULT_MATERIALS[parts[0]][parts[1]];
      var v = num(cfg.material_prices[k]);
      if (m && v !== null) m.price_per_gallon = v;
    });
    if (cfg.wall_rate) Object.keys(cfg.wall_rate).forEach(function (k) {
      var parts = k.split("|");
      var v = num(cfg.wall_rate[k]);
      if (CATALOG_WALL_RATE[parts[0]] && CATALOG_WALL_RATE[parts[0]][parts[1]] !== undefined && v !== null) CATALOG_WALL_RATE[parts[0]][parts[1]] = v;
    });
    if (cfg.item_sales) mergeKnown(CATALOG_ITEM_SALES, cfg.item_sales);
    mergeKnown(DEFAULT_SURCHARGES, cfg.surcharges);         /* color_samples_amount from the Generator */
    if (cfg.size_curve) {
      var pts = Object.keys(cfg.size_curve).map(function (k) { return [Number(k), Number(cfg.size_curve[k])]; })
        .filter(function (p) { return isFinite(p[0]) && p[0] >= 0 && isFinite(p[1]) && p[1] > 0; })
        .sort(function (a, b) { return a[0] - b[0]; });
      if (pts.length >= 2 && pts[0][0] === 0) SIZE_CURVE = pts;
    }
    if (cfg.wall_sub) Object.keys(cfg.wall_sub).forEach(function (k) {
      var parts = k.split("|"), v = num(cfg.wall_sub[k]);
      if (v === null) return;
      (WALL_SUB[parts[0]] = WALL_SUB[parts[0]] || {})[parts[1]] = v;
    });
    if (cfg.ceiling_sqft) Object.keys(cfg.ceiling_sqft).forEach(function (k) {
      var parts = k.split("|"), v = num(cfg.ceiling_sqft[k]);
      if (v !== null) (CEIL_SQFT[parts[0]] = CEIL_SQFT[parts[0]] || {})[parts[1]] = v;
    });
    if (cfg.item_sub) Object.keys(cfg.item_sub).forEach(function (k) {
      var v = num(cfg.item_sub[k]); if (v !== null) ITEM_SUB[k] = v;
    });
    if (cfg.wall_sqft) Object.keys(cfg.wall_sqft).forEach(function (k) {
      var parts = k.split("|");                               /* e.g. "Bedroom|Medium" */
      var v = num(cfg.wall_sqft[k]);
      if (WALL_SQFT[parts[0]] && WALL_SQFT[parts[0]][parts[1]] !== undefined && v !== null) WALL_SQFT[parts[0]][parts[1]] = v;
    });
    deriveStairXL();   /* keep 4 levels pinned to the live 3-level values */
  }

  return {
    quoteInterior: quoteInterior,
    quoteExterior: quoteExterior,
    applyOverrides: applyOverrides,
    OPTIONS: OPTIONS,
    THRESHOLDS: THRESHOLDS,
    DEFAULT_SETTINGS: DEFAULT_SETTINGS
  };
});

;

/* RP Gate v6 UI — expects RPPricing global + RP_GATE_CONFIG global.
   v6.2 (2026-11-03): per-room "Paint the walls" tick (ceiling-only rooms);
   v6.1 (promo-patch): agent promo codes + config-driven room cap;
   v6: 2-room cap (3+ -> walkthrough); exterior items -> Painter for a Day;
   accept-proposal flow (review & approve before contract/invoice — no direct payment);
   estimate-PDF link on the quote screen (polled); delegated back-button handling;
   optional live pricing overrides via PRICING_CONFIG_URL. */
(function () {
  var C = window.RP_GATE_CONFIG;
  var WALKTHROUGH_CAP = (RPPricing.THRESHOLDS && RPPricing.THRESHOLDS.requires_walkthrough_min) || 15000;
  var MIN_PROJECT = C.MIN_PROJECT || 1000;
  var DEPOSIT_PCT = C.DEPOSIT_PERCENT || 0.30;
  var PRICING_OPTS = C.PRICING_OPTIONS || {};

  /* ── Agent promo codes (agent-channel campaign, 2026-09) ──
     The registry lives in the PRICING tab as a promo_codes section (key = CODE,
     value = discount pct; note column = agent | brokerage, read by IQ1 only) and
     arrives in the same doGet payload as the pricing overrides. Empty until that
     fetch lands — an unknown, deactivated or not-yet-loaded code simply doesn't
     validate, which is the graceful failure mode: a code can never block a quote. */
  var PROMO_CODES = {};
  function promoLookup(raw) {
    var code = String(raw || "").trim().toUpperCase();
    if (!code || !Object.prototype.hasOwnProperty.call(PROMO_CODES, code)) return null;
    var pct = Number(PROMO_CODES[code]);
    return (isFinite(pct) && pct > 0 && pct < 100) ? { code: code, pct: pct } : null;
  }

  /* ── Interior self-quote room cap ──
     The live number comes from the PRICING sheet (gate / MAX_SQ_ROOMS), so the
     seasonal flip (up to 8 rooms Nov 1, back down in March) is a sheet edit, not a
     re-paste; the baked-in config value is the fallback when the sheet is
     unreachable. Clamped to the engine's 16-room policy ceiling. */
  function sqRoomCap() {
    var n = Math.round(Number(C.MAX_SQ_ROOMS));
    return (isFinite(n) && n >= 1 && n <= 16) ? n : 6;
  }
  function maxRooms() { return operator.on ? Math.max(OPERATOR_MAX_ROOMS, sqRoomCap()) : sqRoomCap(); }

  /* UI label -> engine room type key */
  var ROOM_TYPES = [
    ["Room", "Bedroom"], ["Bedroom", "Bedroom"],   /* generic Room prices like a Bedroom of that size (Ryan 2026-11-23) */ ["Primary Bedroom", "Master Bedroom"],
    ["Living Room", "Living Room"], ["Kitchen", "Kitchen"], ["Bathroom", "Bathroom"],
    ["Primary Bathroom", "Full Bathroom"], ["Dining Room", "Dining Room"], ["Office", "Office"],
    ["Den", "Den"], ["Family Room", "Family Room"], ["Foyer/Hallway", "Foyer/Hallway"],
    ["Staircase Hallway", "Staircase Hallway"], ["Eating Area", "Eating Area"],
    ["Laundry Room", "Laundry Room"], ["Utility/Mud Room", "Utility/Mud Room"],
    ["Recreation Room", "Recreation Room"], ["Media Room", "Media Room"], ["Pantry", "Pantry"]
  ];

  /* Staircase hallways are sized by the number of LEVELS the stairwell spans, not by
     floor area, and they carry a 4th tier (XL = 4 levels) no other room type has. */
  var STAIR_TYPE = "Staircase Hallway";
  var STAIR_LEVELS = [["Small", "1 level"], ["Medium", "2 levels"], ["Large", "3 levels"], ["XL", "4 levels"]];
  var PLAIN_SIZES = [["Small", "Small"], ["Medium", "Medium"], ["Large", "Large"]];
  function sizeOptsFor(typeLabel) { return typeLabel === STAIR_TYPE ? STAIR_LEVELS : PLAIN_SIZES; }

  /* "Small" means a different room in a kitchen than in a living room, so every size
     button carries the dimensions it actually prices against. Baked from the Catalog's
     own Room Pricing labels (two of which carry typos there — normalised on the way in). */
  var SIZE_DIMS = {
    'Kitchen': ['5 x 10', '10 x 16', '12 x 20'],
    'Living Room': ['12 x 18', '16 x 20', '22 x 28'],
    'Bedroom': ['10 x 10', '12 x 12', '14 x 16'],
    'Master Bedroom': ['12 x 14', '14 x 20', '16 x 24'],
    'Dining Room': ['10 x 12', '12 x 16', '14 x 18'],
    'Bathroom': ['5 x 6', '6 x 10', '7 x 12'],
    'Full Bathroom': ['6 x 9', '7 x 10', '8 x 12'],
    'Foyer/Hallway': ['6 x 6', '8 x 10', '8 x 15'],
    'Closet': ['2 x 3', '2 x 4', '2 x 6'],
    'Den': ['10 x 10', '12 x 12', '14 x 16'],
    'Office': ['8 x 10', '12 x 14', '14 x 18'],
    'Media Room': ['10 x 14', '12 x 16', '14 x 20'],
    'Eating Area': ['10 x 10', '12 x 12', '16 x 16'],
    'Pantry': ['2 x 2', '3 x 4', '4 x 6'],
    'Laundry Room': ['3 x 6', '6 x 8', '8 x 10'],
    'Utility/Mud Room': ['5 x 6', '6 x 8', '8 x 10'],
    'Recreation Room': ['12 x 18', '16 x 24', '18 x 30'],
    'Family Room': ['12 x 16', '14 x 20', '16 x 24']
  };
  /* The engine's own room key differs from the picker label for two types */
  var DIM_ALIAS = { 'Primary Bedroom': 'Master Bedroom', 'Primary Bathroom': 'Full Bathroom', 'Room': 'Bedroom' };
  function dimsFor(typeLabel, sizeKey) {
    var d = SIZE_DIMS[DIM_ALIAS[typeLabel] || typeLabel];
    if (!d) return "";
    var i = sizeKey === "Small" ? 0 : sizeKey === "Medium" ? 1 : sizeKey === "Large" ? 2 : -1;
    return i < 0 ? "" : d[i];
  }

  /* Interior trim is priced per 10 linear feet (Catalog rows 20/29/31), so a staircase's
     trim derives from its step count: 5 ft of riser + skirt board per step (Ryan, 2026-08-06),
     and handrail/spindles run the sloped length at ~12.5in per step. */
  var STAIR_FT_PER_STEP = { risers: 5, handrail: 1.04, spindles: 1.04 };
  var STAIR_TRIM = [
    ["stair_risers", "Stair risers and skirt boards", "risers", "Trim - Baseboard/Crown"],
    ["stair_handrail", "Handrail", "handrail", "Trim - Handrail"],
    ["stair_spindles", "Spindles / balusters", "spindles", "Trim - Spindles/Balusters"]
  ];
  function sizeLabel(r) {
    if (r.type_label !== STAIR_TYPE) return r.room_size;
    for (var i = 0; i < STAIR_LEVELS.length; i++) if (STAIR_LEVELS[i][0] === r.room_size) return STAIR_LEVELS[i][1];
    return r.room_size;
  }
  /* "3 levels Staircase Hallway" reads badly, so stairs get their size in parentheses */
  function roomTitle(r) {
    return r.type_label === STAIR_TYPE ? r.type_label + " (" + sizeLabel(r) + ")" : r.room_size + " " + r.type_label;
  }

  var TRIM_OPTS = [
    ["baseframes", "Baseboard and Door Frames"],
    ["crown", "Crown Molding"],
    ["wainscot", "Wainscotting"],
    ["chairrail", "Chair Rail"]
  ];

  /* Exterior items: engine category / engine key / homeowner label */
  var EXT_ITEMS = [
    ["doors", "Standard Frame", "Exterior door"],
    ["doors", "Double Frame", "Double door"],
    ["doors", "Garage", "Garage door"],
    ["doors", "Bulkhead", "Bulkhead door"],
    ["windows", "Standard", "Window frame"],
    ["windows", "Shutters", "Shutter"],
    ["trim", "Porch Ceiling", "Porch ceiling"],
    ["trim", "Column", "Column"],
    ["trim", "Spindles (10ft)", "Spindles (10 ft section)"],
    ["trim", "Fascia (10ft)", "Fascia (10 ft section)"],
    ["trim", "Soffit (10ft)", "Soffit (10 ft section)"],
    ["trim", "Downspout", "Downspout"],
    ["trim", "Fencing (10ft)", "Fence (10 ft section)"],
    ["trim", "Staircase", "Exterior staircase"]
  ];

  /* styles the address-suggestion dropdown without touching page CSS */
  (function () {
    var st = document.createElement("style");
    st.textContent = ".rpg-sugg{position:absolute;left:0;right:0;top:100%;z-index:50;background:#fff;border:1.5px solid #ccc;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.12);overflow:hidden}" +
      ".rpg-sugg-item{display:block;width:100%;text-align:left;padding:11px 14px;border:none;background:#fff;color:#1c1e1c;cursor:pointer;font-size:.95rem;font-family:inherit}" +
      ".rpg-sugg-item:hover{background:#f2faf4}" +
      ".rpg-items{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px;margin-top:8px}" +
      ".rpg-item{display:flex;justify-content:space-between;align-items:center;gap:8px;border:1px solid #e2e2e2;border-radius:10px;padding:10px 12px;background:#fff}" +
      ".rpg-item.rpg-item-on{border-color:#24a149;background:#f2faf4}" +
      ".rpg-item span{font-size:.88rem}" +
      ".rpg-step{display:flex;align-items:center;gap:6px}" +
      ".rpg-step button{width:30px;height:30px;border-radius:8px;border:1.5px solid #ccc;background:#fff;color:#1c1e1c;font-size:1.1rem;line-height:1;cursor:pointer;font-family:inherit}" +
      ".rpg-step button:hover{border-color:#24a149;color:#1d5f2f}" +
      ".rpg-step b{min-width:20px;text-align:center;font-variant-numeric:tabular-nums}" +
      ".rpg-dim{display:block;font-size:.72rem;font-weight:400;opacity:.75;margin-top:2px}" +
      ".rpg-stair{border:1px dashed #cfe3d4;border-radius:10px;padding:10px 12px;margin-top:8px;background:#fafdfb}";
    document.head.appendChild(st);
  })();

  var state = {
    type: null, size: null, contact: {}, address: {}, rooms: [], ext: null,
    condition: "Standard", rush: false, promo: null, promoInput: "",
    quote: null, images: [], projectId: newProjectId()
  };
  var root = document.getElementById("rp-gate");
  /* a11y: this tool is styled for a dark page section (white text). Work out the colour actually
     behind it; on a light one, such as the /proposal page, add a class that switches the text
     outside the white cards to dark. */
  (function () {
    try {
      var el = root, bg = null;
      while (el && el !== document.documentElement && !bg) {
        var c = getComputedStyle(el).backgroundColor.match(/[0-9.]+/g);
        if (c && (c.length < 4 || +c[3] > 0.9)) bg = c;
        if (!bg && el.tagName === "SECTION") {
          var sb = el.querySelector(".section-background");
          var c2 = sb && getComputedStyle(sb).backgroundColor.match(/[0-9.]+/g);
          if (c2 && (c2.length < 4 || +c2[3] > 0.9)) bg = c2;
        }
        el = el.parentElement;
      }
      if (!bg) bg = [255, 255, 255];
      if ((0.2126 * bg[0] + 0.7152 * bg[1] + 0.0722 * bg[2]) / 255 > 0.6) root.classList.add("rpg-light");
    } catch (e) {}
  })();

  /* ============ OPERATOR MODE ============
     Ryan opens ?edit=RPQ-...&k=<operator key> to correct a quote a client got wrong
     (a room they left out, a room they mislabelled) and reshare it. The key is only
     ever verified server-side by the quote-info endpoint, so the page holds no secret.
     Operator mode differs from the client flow in five ways: room photos are optional
     (the originals are already on file), the client room cap is lifted, the walkthrough and
     minimum-project reroutes are skipped, he can send a price of his own, and he can
     correct the record without emailing the client. Everything downstream is the
     ordinary revision chain: Rev N estimate, old PDF archived, deal amount updated. */
  var operator = { on: false, key: "", status: "", priorTotal: 0, revision: 1, notify: true, override: null, priorScope: "" };
  var OPERATOR_MAX_ROOMS = 8;   /* the client cap is sqRoomCap(); Ryan is the human check, so he isn't held to it */

  function newProjectId() {
    var d = new Date();
    var ymd = String(d.getFullYear()).slice(2) + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
    var rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    return "RPQ-" + ymd + "-" + rand;
  }
  /* GA4 funnel-name aliases: the gate's internal event names map to the canonical
     funnel names GA4 marks as Key Events (quote_completed / quote_accepted). GA4 gets
     ONE clean funnel with no double-counting; the Meta Pixel block below still keys off
     the internal names. quote_started has no legacy name — it passes through unchanged. */
  var GA4_ALIAS = { instant_quote_shown: "quote_completed", proposal_accepted: "quote_accepted" };
  function track(evt, params) {
    var gaEvt = GA4_ALIAS[evt] || evt;
    if (C.TEST_MODE && window.rpConsole) window.rpConsole("GA4", gaEvt + " " + JSON.stringify(params || {}));
    try { if (typeof gtag === "function") gtag("event", gaEvt, params || {}); } catch (e) {}
    /* The site loads GA4 through Google Tag Manager, which ignores raw gtag() calls —
       they land in dataLayer in argument form, not the {event:...} object form GTM's
       Custom Event triggers listen for. Push the object form too, so a GTM trigger on
       quote_started|quote_completed|quote_accepted can forward these to GA4. Harmless
       when GTM has no such trigger yet. */
    try {
      window.dataLayer = window.dataLayer || [];
      var dlEvt = { event: gaEvt };
      var dlP = params || {};
      for (var dlK in dlP) { if (Object.prototype.hasOwnProperty.call(dlP, dlK)) dlEvt[dlK] = dlP[dlK]; }
      window.dataLayer.push(dlEvt);
    } catch (e) {}
    /* Meta Pixel: mirror the primary funnel conversions */
    try {
      if (typeof fbq === "function") {
        if (evt === "proposal_accepted") fbq("track", "Lead");
        if (evt === "instant_quote_shown") fbq("track", "ViewContent", { content_name: "instant_quote" });
      }
    } catch (e) {}
  }
  /* Re-renders of the SAME screen (add/remove room, size/condition/rush toggles) must not
     scroll — only genuine screen changes do. Screen identity = leading markup fingerprint. */
  var curScreen = "";
  /* a11y: smooth scrolling only when the visitor has not asked for reduced motion */
  function scrollOpts() {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return { behavior: reduce ? "auto" : "smooth", block: "start" };
  }
  /* a11y: an innerHTML swap drops keyboard focus to the top of the page. Remember which
     control had focus (by id, or by its data-* attributes) so the same control can be
     re-focused after a same-screen re-render. */
  function focusKey() {
    var a = document.activeElement;
    if (!a || a === document.body || !root.contains(a)) return null;
    if (a.id) return { sel: "#" + a.id, idx: 0 };
    var sel = a.tagName.toLowerCase();
    if (a.className && typeof a.className === "string") {
      var c0 = a.className.split(/\s+/)[0];
      if (c0) sel += "." + c0;
    }
    var n = 0;
    for (var i = 0; i < a.attributes.length; i++) {
      var at = a.attributes[i];
      if (at.name.indexOf("data-") === 0) { sel += "[" + at.name + '="' + String(at.value).replace(/["\\]/g, "\\$&") + '"]'; n++; }
    }
    if (n) return { sel: sel, idx: 0 };
    /* no id or data-* (e.g. the wall-condition choices): fall back to its position among its kind */
    return { sel: sel, idx: Array.prototype.indexOf.call(root.querySelectorAll(sel), a) };
  }
  function h(html) {
    var screen = html.slice(0, 60);
    var first = curScreen === "";
    var changed = screen !== curScreen;
    var key = changed ? null : focusKey();
    root.innerHTML = html;
    a11y();
    noteScreen(changed, first);
    if (draftEligible()) saveDraft();
    if (changed && !C.TEST_MODE) root.scrollIntoView(scrollOpts());
    curScreen = screen;
    try {
      if (key) {
        var refocus = function () {
          var again = root.querySelectorAll(key.sel)[key.idx < 0 ? 0 : key.idx];
          if (again) again.focus({ preventScroll: true });
          return !!again;
        };
        /* some screens add their buttons right after the render call returns: retry once */
        if (!refocus()) setTimeout(function () {
          try {
            if (!refocus()) { var hd2 = root.querySelector(".rpg-q"); if (hd2) hd2.focus({ preventScroll: true }); }
          } catch (e) {}
        }, 0);
      } else if (changed && !first) {
        /* new screen: put focus on its heading so screen readers announce the step */
        var hd = root.querySelector(".rpg-q");
        if (hd) hd.focus({ preventScroll: true });
      }
    } catch (e) {}
    updateBird();
  }

  /* a11y: one pass that names and describes whatever is on screen. Runs after every
     render and (through the observer below) after any later change inside the tool,
     so individual screens do not each need their own markup changes. Only sets
     attributes; never changes classes, text, ids or handlers. */
  function a11yText(el) { return String(el ? el.textContent : "").replace(/\s+/g, " ").trim(); }
  function a11ySet(el, name, value) { if (el.getAttribute(name) !== value) el.setAttribute(name, value); }
  function a11y() {
    try {
      var each = function (sel, fn) { Array.prototype.forEach.call(root.querySelectorAll(sel), fn); };
      /* step titles are headings */
      each(".rpg-q", function (el) {
        a11ySet(el, "role", "heading"); a11ySet(el, "aria-level", "2"); a11ySet(el, "tabindex", "-1");
      });
      /* each room / level card is a named group, and its remove button says what it removes */
      each(".rpg-room", function (card) {
        var head = card.querySelector(".rpg-room-head strong");
        if (!head) return;
        var nm = a11yText(head);
        a11ySet(card, "role", "group"); a11ySet(card, "aria-label", nm);
        var x = card.querySelector(".rpg-room-head .rpg-x");
        if (x) a11ySet(x, "aria-label", "Remove " + nm);
      });
      /* choice rows: the row takes the name of the label above it; each choice reports on/off */
      each(".rpg-segrow", function (row) {
        var lb = row.previousElementSibling;
        if (lb && lb.classList.contains("rpg-lbl")) { a11ySet(row, "role", "group"); a11ySet(row, "aria-label", a11yText(lb)); }
      });
      each(".rpg-seg", function (b) { a11ySet(b, "aria-pressed", b.classList.contains("rpg-seg-on") ? "true" : "false"); });
      each("#rpg-cond .rpg-opt", function (b) { a11ySet(b, "aria-pressed", b.classList.contains("rpg-sel2") ? "true" : "false"); });
      var cond = root.querySelector("#rpg-cond");
      if (cond) { a11ySet(cond, "role", "group"); a11ySet(cond, "aria-label", "Overall condition of the walls"); }
      /* plus / minus steppers */
      each(".rpg-item", function (item) {
        var nm = a11yText(item.querySelector("span"));
        var qty = item.querySelector(".rpg-step b");
        Array.prototype.forEach.call(item.querySelectorAll(".rpg-step button"), function (b) {
          a11ySet(b, "aria-label", (b.getAttribute("data-d") === "-1" ? "One fewer: " : "One more: ") + nm + (qty ? " (now " + a11yText(qty) + ")" : ""));
        });
      });
      /* fields: use the label just above, else the placeholder */
      each("input, select, textarea", function (f) {
        if (f.type === "hidden" || f.type === "checkbox") return;
        if (f.getAttribute("aria-label") || (f.labels && f.labels.length)) return;
        var prev = f.previousElementSibling, guard = 0;
        while (prev && guard++ < 3 && !(prev.classList && prev.classList.contains("rpg-lbl"))) prev = prev.previousElementSibling;
        var nm = prev && prev.classList && prev.classList.contains("rpg-lbl") ? a11yText(prev) : (f.getAttribute("placeholder") || "");
        if (nm) a11ySet(f, "aria-label", nm);
      });
      /* messages that appear without a page change get announced */
      each(".rpg-err", function (el) { a11ySet(el, "role", "alert"); });
      each("#rpg-addr-picked, #rpg-photo-count, .rpg-photo-ok", function (el) { a11ySet(el, "role", "status"); a11ySet(el, "aria-live", "polite"); });
      /* the booking calendar frame */
      each("iframe", function (f) { if (!f.getAttribute("title")) f.setAttribute("title", "Booking calendar"); });
    } catch (e) {}
  }
  if (window.MutationObserver) {
    var a11yQueued = false;
    new MutationObserver(function () {
      if (a11yQueued) return;
      a11yQueued = true;
      setTimeout(function () { a11yQueued = false; a11y(); }, 0);
    }).observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
  }


  /* ============ SAVED PROGRESS + BROWSER BACK (v3.12, Ryan 2026-11-23) ============
     The room builder is saved on this device as the visitor works: choices and contact
     details in localStorage, photos in IndexedDB (too big for localStorage). A refresh or a
     return visit within 7 days offers "Pick up where you left off". The draft is cleared once
     the quote is shown. The browser Back button steps back through the form instead of
     leaving the page. Every storage call is wrapped: private windows simply don't save. */
  var DRAFT_KEY = "rp_gate_draft_v1", DRAFT_DAYS = 7, draftTimer = null, draftPhotoSig = "";
  function draftEligible() {
    return !operator.on && state.type === "interior" && state.size === "rooms" && state.rooms.length > 0 && !state.quoteShown;
  }
  function idb(cb) {
    try {
      var rq = window.indexedDB.open("rp_gate", 1);
      rq.onupgradeneeded = function () { rq.result.createObjectStore("kv"); };
      rq.onsuccess = function () { cb(rq.result); };
      rq.onerror = function () { cb(null); };
    } catch (e) { cb(null); }
  }
  function idbPut(key, val) { idb(function (db) { if (!db) return; try { db.transaction("kv", "readwrite").objectStore("kv").put(val, key); } catch (e) {} }); }
  function idbGet(key, cb) {
    idb(function (db) {
      if (!db) return cb(null);
      try { var g = db.transaction("kv").objectStore("kv").get(key); g.onsuccess = function () { cb(g.result || null); }; g.onerror = function () { cb(null); }; }
      catch (e) { cb(null); }
    });
  }
  function saveDraftNow() {
    if (!draftEligible()) return;
    try {
      /* contact fields typed but not yet submitted */
      var fv = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : null; };
      if (fv("rpg-email") !== null) {
        state.contact = { name: fv("rpg-name") || "", email: fv("rpg-email") || "", phone: fv("rpg-phone") || "" };
        state.promoInput = fv("rpg-promo") || "";
      }
      var rooms = state.rooms.map(function (r) { var c = {}; for (var k in r) if (k !== "images") c[k] = r[k]; return c; });
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ ts: Date.now(), projectId: state.projectId, type: state.type, size: state.size,
        rooms: rooms, condition: state.condition, rush: state.rush, contact: state.contact, promoInput: state.promoInput, zipFirst: state.zipFirst || "" }));
      var sig = state.rooms.map(function (r) { return (r.images || []).length + ":" + ((r.images || [])[0] || {}).name; }).join("|");
      if (sig !== draftPhotoSig) { draftPhotoSig = sig; idbPut(DRAFT_KEY, state.rooms.map(function (r) { return r.images || []; })); }
    } catch (e) {}
  }
  function saveDraft() { clearTimeout(draftTimer); draftTimer = setTimeout(saveDraftNow, 600); }
  function clearDraft() {
    clearTimeout(draftTimer);
    try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
    idbPut(DRAFT_KEY, null); draftPhotoSig = "";
  }
  function readDraft() {
    try {
      var d = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
      if (!d || !d.rooms || !d.rooms.length || Date.now() - d.ts > DRAFT_DAYS * 864e5) return null;
      return d;
    } catch (e) { return null; }
  }
  function offerDraft(d, fallback) {
    backHandler = null;
    var n = d.rooms.length;
    h('<div class="rpg-panel">' +
      '<div class="rpg-q" style="margin-top:0">Pick up where you left off?</div>' +
      '<p>You started pricing ' + n + ' room' + (n > 1 ? 's' : '') + ' on this device. Your choices' + (d.contact && d.contact.email ? ' and contact details' : '') + ' are saved.</p>' +
      '<button class="rpg-cta" id="rpg-draft-go">Continue my quote</button><br>' +
      '<button type="button" class="rpg-opt" id="rpg-draft-new" style="margin-top:10px">Start a new quote</button>' +
      '<div class="rpg-note">Pressing Continue brings back your rooms and photos. Start a new quote clears them from this device.</div>' +
      '</div>');
    document.getElementById("rpg-draft-new").onclick = function () { clearDraft(); fallback(); };
    document.getElementById("rpg-draft-go").onclick = function () {
      state.type = d.type; state.size = d.size; state.condition = d.condition || "Standard"; state.rush = !!d.rush;
      state.contact = d.contact || {}; state.promoInput = d.promoInput || ""; state.zipFirst = d.zipFirst || "";
      if (d.projectId) state.projectId = d.projectId;
      state.rooms = d.rooms.map(function (r) { r.images = []; return r; });
      idbGet(DRAFT_KEY, function (imgs) {
        if (imgs && imgs.length) state.rooms.forEach(function (r, i) { r.images = (imgs[i] || []).slice(0, ROOM_PHOTO_MAX); });
        track("draft_resumed", { rooms: n });
        renderRooms();
      });
    };
  }
  /* browser Back: one history entry per screen; Back runs the form's own back step */
  var histDepth = 0, fromPop = false;
  function noteScreen(changed, first) {
    if (operator.on || !window.history || !history.pushState) return;
    try {
      if (first) { history.replaceState({ rpg: 0 }, ""); histDepth = 0; return; }
      if (changed && !fromPop) { histDepth++; history.pushState({ rpg: histDepth }, ""); }
    } catch (e) {}
  }
  window.addEventListener("popstate", function (ev) {
    if (operator.on) return;
    if (!ev.state || ev.state.rpg === undefined) return;
    histDepth = ev.state.rpg;
    if (backHandler) { fromPop = true; try { backHandler(); } finally { fromPop = false; } }
  });

  /* Back buttons are wired through ONE delegated capture-phase listener instead of
     per-render .onclick assignments — innerHTML churn and overlapping elements can
     no longer orphan a back button. Each screen just sets backHandler (or null). */
  var backHandler = null;
  root.addEventListener("change", function () { if (draftEligible()) saveDraft(); }, true);
  root.addEventListener("input", function () { if (draftEligible()) saveDraft(); }, true);
  root.addEventListener("click", function (ev) {
    var t = ev.target;
    while (t && t !== root && !(t.classList && t.classList.contains("rpg-back")) && !(t.getAttribute && t.getAttribute("data-mockdoc"))) t = t.parentNode;
    if (!t || t === root) return;
    if (t.getAttribute && t.getAttribute("data-mockdoc")) {
      ev.preventDefault();
      if (window.rpConsole) window.rpConsole("MOCK", t.getAttribute("data-mockdoc") + " — opens the real document on the live page");
      t.textContent = "Opens on the live page ✓";
      setTimeout(function () { refreshPdfSlots(); }, 1600);
      return;
    }
    ev.preventDefault();
    if (backHandler) backHandler();
  }, true);

  /* Brand asset: an <img id="rp-bird"> beside the tool parachutes down as the
     tool grows taller (rooms/levels added) and floats back up on shorter screens. */
  var birdBase = 0;
  function updateBird() {
    var bird = document.getElementById("rp-bird");
    if (!bird) return;
    /* only visible on instant-quote routes (rooms/deck/items and their follow-on screens);
       hidden on the doorman questions, walkthrough and PFAD routes, and always on mobile (CSS) */
    var show = state.size === "rooms" || state.size === "deck" || state.size === "extitem";
    bird.style.display = show ? "block" : "none";
    if (!show) { birdBase = 0; bird.style.transform = ""; return; }
    requestAnimationFrame(function () {
      var hgt = root.offsetHeight;
      if (!birdBase) birdBase = hgt;
      bird.style.transform = "translateY(" + Math.max(0, (hgt - birdBase) * 0.7) + "px)";
    });
  }
  function money(n) { return "$" + Math.round(n).toLocaleString(); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  /* Rush option: +RUSH_MULTIPLIER premium (baked silently into the quoted price),
     for projects that need completing within the coming week */
  function rushBlockHtml() {
    return '<label class="rpg-lbl">When do you need it done?</label><div class="rpg-segrow">' +
      '<button type="button" class="rpg-seg' + (!state.rush ? " rpg-seg-on" : "") + '" id="rpg-rush-no">Flexible timing</button>' +
      '<button type="button" class="rpg-seg' + (state.rush ? " rpg-seg-on" : "") + '" id="rpg-rush-yes">Rush &mdash; within a week<br><small>priority scheduling</small></button></div>';
  }
  function wireRush(rerender) {
    var no = document.getElementById("rpg-rush-no"), yes = document.getElementById("rpg-rush-yes");
    if (no) no.onclick = function () { state.rush = false; rerender(); };
    if (yes) yes.onclick = function () { state.rush = true; track("rush_selected", { project_id: state.projectId }); rerender(); };
  }

  function opts(list, onPick) {
    var grid = root.querySelector(".rpg-opts");
    list.forEach(function (o) {
      var b = document.createElement("button");
      b.className = "rpg-opt"; b.type = "button"; b.textContent = o.label;
      b.onclick = function () { onPick(o.value); };
      grid.appendChild(b);
    });
  }

  /* ============ DOORMAN ============ */
  function q1() {
    state.size = null;
    backHandler = null;
    h('<div class="rpg-q">What kind of project do you have?</div><div class="rpg-opts"></div>');
    opts([
      { label: "Interior Painting", value: "interior" },
      { label: "Exterior Painting", value: "exterior" },
      { label: "Interior + Exterior", value: "both" },
      { label: "Touch-Ups / Small Repairs", value: "touchup" }
    ], function (v) {
      state.type = v; track("triage_step", { step: "type", value: v });
      if (v === "touchup") return routeDay(false, q1);
      if (v === "both") {
        track("triage_completed", { route: "walkthrough", type: v, size: "combined" });
        return routeWalkthrough("Great &mdash; let&rsquo;s schedule your project consultation.",
          "Interior + exterior projects deserve an in-person look &mdash; we&rsquo;ll walk the project with you so your quote is accurate. Pick a time:", q1);
      }
      q2();
    });
  }

  function q2() {
    var list;
    if (state.type === "interior") {
      /* the split point follows the live room cap (sheet-editable — see sqRoomCap) */
      var cap = sqRoomCap();
      list = [
        { label: cap > 1 ? "1–" + cap + " rooms" : "1 room", value: "rooms" },
        { label: (cap + 1) + "+ rooms", value: "whole" }
      ];
    } else {
      list = [
        { label: "A few items (doors, trim, railings…)", value: "extitem" },
        { label: "Decks", value: "deck" },
        { label: "Full exterior repaint", value: "full" }
      ];
    }
    h('<div class="rpg-q">How big is the project?</div><div class="rpg-opts"></div><button type="button" class="rpg-back">&larr; back</button>');
    backHandler = q1;
    opts(list, function (v) {
      state.size = v; track("triage_step", { step: "size", value: v });
      if (v === "whole" || v === "full") {
        track("triage_completed", { route: "walkthrough", type: state.type, size: v });
        return routeWalkthrough("Great &mdash; let&rsquo;s schedule your project consultation.",
          "Projects this size deserve an in-person look &mdash; we&rsquo;ll walk the project with you so your quote is accurate. Pick a time:", q2);
      }
      if (v === "deck") {
        track("triage_completed", { route: "walkthrough", type: state.type, size: v });
        return routeWalkthrough("Let\u2019s take a look at your deck.",
          "Deck refinishing is priced from an on-site look \u2014 we\u2019ll walk it with you so the quote is accurate. Pick a time:", q2);
      }
      if (v === "extitem") {
        /* short exterior item lists are exactly the Painter-for-a-Day product */
        track("triage_completed", { route: "painter_day", type: state.type, size: v });
        return routeDay(false, q2);
      }
      track("triage_completed", { route: "instant_quote", type: state.type, size: v });
      track("quote_started", { type: state.type, size: v, project_id: state.projectId });
      if (v === "rooms") return zipFirst(roomBuilder, q2);
      deckBuilder();
    });
  }


  /* ============ ZIP FIRST (v3.13, Ryan 2026-11-23) ============
     Before anyone builds a scope, check the project ZIP is in the service area, as the
     Terms page promises. The full address is still asked at the contact step. */
  function zipFirst(next, backFn) {
    backHandler = backFn;
    h('<div class="rpg-panel">' +
      '<div class="rpg-q" style="margin-top:0">What&rsquo;s the ZIP code of the property?</div>' +
      '<p style="margin:4px 0 10px">We check it&rsquo;s in our service area before you build your quote.</p>' +
      '<input class="rpg-field" id="rpg-zip1" inputmode="numeric" maxlength="5" placeholder="ZIP code (e.g. 02130)" aria-label="ZIP code" autocomplete="postal-code" value="' + esc(state.zipFirst || "") + '">' +
      '<div class="rpg-err" id="rpg-zip1-err" role="alert"></div>' +
      '<button class="rpg-cta" id="rpg-zip1-go">Continue</button>' +
      '<div class="rpg-note">Pressing Continue checks your ZIP and, if we serve it, takes you to the room builder.</div>' +
      '<button type="button" class="rpg-back">&larr; back</button></div>');
    var inp = document.getElementById("rpg-zip1"), err = document.getElementById("rpg-zip1-err");
    function go() {
      var z = String(inp.value || "").replace(/\D/g, "");
      if (z.length !== 5) { err.textContent = "Please enter the 5-digit ZIP code of the property."; err.style.display = "block"; inp.focus(); return; }
      if (!inServiceArea(z, "MA")) {
        track("zip_out_of_area", { zip: z });
        h('<div class="rpg-panel"><div class="rpg-q" style="margin-top:0">Sorry, that&rsquo;s outside our service area</div>' +
          '<p>We serve Boston and its metro area, and ' + esc(z) + ' is outside it. If you think that&rsquo;s not right, call us at ' + C.PHONE_DISPLAY + '.</p>' +
          '<button type="button" class="rpg-back">&larr; try a different ZIP</button></div>');
        backHandler = function () { zipFirst(next, backFn); };
        return;
      }
      state.zipFirst = z; track("zip_ok", { zip: z });
      next();
    }
    document.getElementById("rpg-zip1-go").onclick = go;
    inp.onkeydown = function (ev) { if (ev.key === "Enter") { ev.preventDefault(); go(); } };
  }

  /* ============ INTERIOR ROOM BUILDER ============ */
  /* v3.14: the project counts as 'repairs needed' if any room is */
  function roomCond(r) { return r.condition || state.condition || "Standard"; }
  function projectCondition() {
    return state.rooms.some(function (r) { return roomCond(r) === "Superior"; }) ? "Superior" : "Standard";
  }
  function newRoom() {
    return { type_label: "Bedroom", room_size: "Medium", walls_included: true, ceiling_included: true, condition: "Standard",
      doors: 1, windows: 2, closet: "not_included", closet_shelves: false, notes: "", images: [],
      baseframes: true, crown: false, wainscot: false, chairrail: false,
      steps: 0, stair_risers: false, stair_handrail: false, stair_spindles: false };
  }

  /* With walls optional, a room can be left with nothing ticked; that has nothing to price. */
  function roomHasScope(r) {
    if (r.walls_included !== false || r.ceiling_included) return true;
    if (r.closet !== "not_included" || r.doors > 0 || r.windows > 0) return true;
    if (TRIM_OPTS.some(function (t) { return r[t[0]]; })) return true;
    return r.type_label === STAIR_TYPE && r.steps > 0 && STAIR_TRIM.some(function (t) { return r[t[0]]; });
  }

  /* A stairwell's trim is the fiddly, expensive part, and nobody knows it in linear feet.
     Ask for the one number a homeowner can actually count - steps - and derive the rest. */
  function stairTrimHtml(r, i) {
    var boxes = STAIR_TRIM.map(function (t) {
      return '<label class="rpg-chk"><input type="checkbox" data-i="' + i + '" data-f="' + t[0] + '"' +
        (r[t[0]] ? " checked" : "") + "> " + t[1] + "</label>";
    }).join("");
    return '<div class="rpg-stair">' +
      '<label class="rpg-lbl" style="margin-top:0">Painting any of the stairs themselves?</label>' +
      '<div class="rpg-inline">' + boxes + "</div>" +
      '<label class="rpg-lbl">Total number of steps <span style="font-weight:400">(all flights added together)</span>' +
      ' <input class="rpg-num" type="number" min="0" max="80" value="' + (r.steps || 0) + '" data-i="' + i + '" data-f="steps"></label>' +
      '<div class="rpg-note">A typical flight between two floors is 13 to 15 steps. We work out the handrail, spindles and riser trim from that.</div>' +
      "</div>";
  }

  function roomBuilder() {
    if (state.rooms.length === 0) state.rooms.push(newRoom());
    renderRooms();
  }

  function renderRooms() {
    var cards = state.rooms.map(function (r, i) {
      var typeOpts = ROOM_TYPES.map(function (t) {
        return '<option value="' + t[0] + '"' + (r.type_label === t[0] ? " selected" : "") + ">" + t[0] + "</option>";
      }).join("");
      var isStair = r.type_label === STAIR_TYPE;
      var sizeSeg = sizeOptsFor(r.type_label).map(function (o) {
        var dim = dimsFor(r.type_label, o[0]);
        return '<button type="button" class="rpg-seg' + (r.room_size === o[0] ? " rpg-seg-on" : "") +
          '" data-i="' + i + '" data-f="room_size" data-v="' + o[0] + '">' + o[1] +
          (dim ? '<span class="rpg-dim">' + dim + " ft</span>" : "") + "</button>";
      }).join("");
      var closetOpts = [["not_included", "No closet"], ["small", "Small closet"], ["medium", "Medium closet"], ["large", "Large closet"]]
        .map(function (o) { return '<option value="' + o[0] + '"' + (r.closet === o[0] ? " selected" : "") + ">" + o[1] + "</option>"; }).join("");
      var trims = TRIM_OPTS.map(function (t) {
        return '<label class="rpg-chk"><input type="checkbox" data-i="' + i + '" data-f="' + t[0] + '"' + (r[t[0]] ? " checked" : "") + "> " + t[1] + "</label>";
      }).join("");
      return '<div class="rpg-room">' +
        '<div class="rpg-room-head"><strong>Room ' + (i + 1) + "</strong>" +
        (state.rooms.length > 1 ? '<button type="button" class="rpg-x" data-del="' + i + '">remove</button>' : "") + "</div>" +
        '<label class="rpg-lbl">Room type</label>' +
        '<select class="rpg-field rpg-sel" data-i="' + i + '" data-f="type_label">' + typeOpts + "</select>" +
        '<label class="rpg-lbl">' + (isStair ? "How many levels does the stairwell span?" : "Size") + "</label>" +
        '<div class="rpg-segrow">' + sizeSeg + "</div>" +
        (isStair
          ? '<div class="rpg-note" style="margin-top:4px">Count every level the stairwell walls run through &mdash; a basement-to-second-floor stairwell spans 3 levels.</div>' + stairTrimHtml(r, i)
          : '<div class="rpg-note" style="margin-top:4px">Pick the closest &mdash; we confirm exact sizes on site and tell you before anything changes.</div>') +
        '<div class="rpg-inline">' +
        '<label class="rpg-chk"><input type="checkbox" data-i="' + i + '" data-f="walls_included"' + (r.walls_included !== false ? " checked" : "") + "> Paint the walls</label>" +
        '<label class="rpg-chk"><input type="checkbox" data-i="' + i + '" data-f="ceiling_included"' + (r.ceiling_included ? " checked" : "") + "> Paint the ceiling</label>" +
        '<select class="rpg-field rpg-sel" style="width:auto" aria-label="Closet" data-i="' + i + '" data-f="closet">' + closetOpts + "</select>" +
        (r.closet !== "not_included"
          ? '<label class="rpg-chk"><input type="checkbox" data-i="' + i + '" data-f="closet_shelves"' + (r.closet_shelves ? " checked" : "") + "> Paint the shelving</label>"
          : "") +
        "</div>" +
        '<label class="rpg-lbl">Trim</label><div class="rpg-inline">' + trims + "</div>" +
        '<div class="rpg-inline">' +
        '<label class="rpg-lbl">Doors <input class="rpg-num" type="number" min="0" max="8" value="' + r.doors + '" data-i="' + i + '" data-f="doors"></label>' +
        '<label class="rpg-lbl">Windows <input class="rpg-num" type="number" min="0" max="12" value="' + r.windows + '" data-i="' + i + '" data-f="windows"></label>' +
        "</div>" +
        '<label class="rpg-lbl">Condition of the walls in this room</label><div class="rpg-segrow">' +
        [["Standard", "Good shape &mdash; normal prep"], ["Superior", "Some cracks / repairs needed"]].map(function (c) {
          return '<button type="button" class="rpg-seg' + (roomCond(r) === c[0] ? " rpg-seg-on" : "") + '" data-i="' + i + '" data-f="condition" data-v="' + c[0] + '">' + c[1] + "</button>";
        }).join("") + "</div>" +
        '<label class="rpg-lbl">Photos of this room <span style="font-weight:400">' +
        (operator.on
          ? (r.photos_on_file ? "(already on file from the original submission)" : "(optional)")
          : "(required, up to " + ROOM_PHOTO_MAX + " &mdash; a few quick phone shots keep your price accurate)") + "</span></label>" +
        '<input class="rpg-field rpg-room-photos" type="file" accept="image/*" multiple data-i="' + i + '">' +
        ((r.images || []).length
          ? '<div class="rpg-photo-ok">&#10003; ' + r.images.length + ' photo' + (r.images.length > 1 ? 's' : '') + ' added to this room &middot; <a href="#" data-clearimg="' + i + '">clear</a></div>' +
            '<div class="rpg-thumbs">' + r.images.map(function (im) { return '<img src="' + im.data + '" alt="">'; }).join('') + "</div>"
          : "") +
        '<label class="rpg-lbl">Anything else about this room? <span style="font-weight:400">(wallpaper, repairs, special requests)</span></label>' +
        '<textarea class="rpg-field" rows="2" data-i="' + i + '" data-f="notes" placeholder="Optional notes">' + esc(r.notes) + "</textarea>" +
        "</div>";
    }).join("");

    h((operator.on
        ? '<div class="rpg-q">Editing ' + esc(state.projectId) + (state.contact.name ? " &mdash; " + esc(state.contact.name) : "") + "</div>" +
          '<div class="rpg-note">Add, remove or relabel rooms, then continue to review the new price. The client&rsquo;s original photos stay on file.</div>'
        : '<div class="rpg-q">Tell us about your rooms</div>' +
          '<div class="rpg-note">Painting a stairwell? Add it as its own room and choose <strong>Staircase Hallway</strong>.</div>') +
      cards +
      (state.rooms.length < maxRooms()
        ? '<button class="rpg-add" id="rpg-add">+ Add another room</button>'
        : operator.on ? ""
          : '<div class="rpg-note">Painting <strong>' + (sqRoomCap() + 1) + ' or more rooms</strong>? Projects that size get a free in-person consultation &mdash; <a href="#" id="rpg-3plus">book a walkthrough instead</a>.</div>') +
      /* ceilings-only Painter for a Day banner removed 2026-11-23 (Ryan): ceiling-only rooms are self-quoted */
      '<div class="rpg-room rpg-timing">' + rushBlockHtml() + "</div>" +
      '<div class="rpg-note">Requests outside standard scope (wallpaper removal, heavy repairs) don&rsquo;t change your base price today &mdash; any additional cost is confirmed by Ryan Painting after review and added to the base total.</div>' +
      '<div class="rpg-err" id="rpg-rooms-err"></div>' +
      '<button class="rpg-cta" id="rpg-rooms-go">Continue</button><br><button type="button" class="rpg-back">&larr; back</button>');
    wireRoomPhotos();
    wireRush(renderRooms);
    var ceilOnly = document.getElementById("rpg-ceilings-pfad");
    if (ceilOnly) ceilOnly.onclick = function (ev) {
      ev.preventDefault();
      track("triage_completed", { route: "painter_day", type: state.type, size: "ceilings_only" });
      routeDay(false, renderRooms);
    };
    var threePlus = document.getElementById("rpg-3plus");
    if (threePlus) threePlus.onclick = function (ev) {
      ev.preventDefault();
      track("triage_completed", { route: "walkthrough", type: state.type, size: "3plus_rooms" });
      routeWalkthrough("Great &mdash; let&rsquo;s schedule your project consultation.",
        "Painting " + (sqRoomCap() + 1) + " or more rooms deserves an in-person look &mdash; we&rsquo;ll walk the project with you so your quote is accurate. Pick a time:", renderRooms);
    };


    backHandler = operator.on ? operatorSummary : q2;
    var addRoomBtn = document.getElementById("rpg-add");
    if (addRoomBtn) addRoomBtn.onclick = function () {
      if (state.rooms.length >= maxRooms()) return;
      state.rooms.push(newRoom()); renderRooms();
    };
    root.querySelectorAll("[data-del]").forEach(function (el) {
      el.onclick = function () { state.rooms.splice(+el.getAttribute("data-del"), 1); renderRooms(); };
    });
    root.querySelectorAll(".rpg-sel").forEach(function (el) {
      el.onchange = function () {
        var r = state.rooms[+el.getAttribute("data-i")], f = el.getAttribute("data-f");
        r[f] = el.value;
        if (f === "closet") {
          /* the shelving tick only exists while a closet is selected */
          if (r.closet === "not_included") r.closet_shelves = false;
          renderRooms();
          return;
        }
        if (f !== "type_label") return;
        /* XL (4 levels) only exists for staircases — never leave it on another room type,
           where the engine would fall through to its default sqft. Re-render so the size
           buttons relabel to levels (or back) the moment the type changes. */
        if (r.type_label !== STAIR_TYPE && r.room_size === "XL") r.room_size = "Large";
        /* v3.17 (Ryan 2026-11-23): a stairwell usually has no door or window of its own, so it starts
           at 0 and 0 (only if the client has not changed the 1 door / 2 windows defaults). Switching
           back to another room type restores the defaults if they were zeroed here and left alone. */
        if (r.type_label === STAIR_TYPE && r.doors === 1 && r.windows === 2) { r.doors = 0; r.windows = 0; r.stair_zeroed = true; }
        else if (r.type_label !== STAIR_TYPE && r.stair_zeroed && r.doors === 0 && r.windows === 0) { r.doors = 1; r.windows = 2; r.stair_zeroed = false; }
        renderRooms();
      };
    });
    root.querySelectorAll(".rpg-seg").forEach(function (el) {
      if (!el.getAttribute("data-f")) return;
      el.onclick = function () { state.rooms[+el.getAttribute("data-i")][el.getAttribute("data-f")] = el.getAttribute("data-v"); renderRooms(); };
    });
    root.querySelectorAll('input[type="checkbox"][data-f]').forEach(function (el) {
      el.onchange = function () { state.rooms[+el.getAttribute("data-i")][el.getAttribute("data-f")] = el.checked; };
    });
    root.querySelectorAll(".rpg-num").forEach(function (el) {
      el.onchange = function () {   /* 2026-11-23: keep within the box's own limits (50 doors or -3 used to be priced) */
        var mx = Number(el.getAttribute("max")) || 99;
        var v = Math.min(mx, Math.max(0, Math.round(+el.value || 0)));
        el.value = v;
        state.rooms[+el.getAttribute("data-i")][el.getAttribute("data-f")] = v;
      };
    });
    root.querySelectorAll("textarea[data-f]").forEach(function (el) {
      el.onchange = function () { state.rooms[+el.getAttribute("data-i")].notes = el.value; };
    });
    document.getElementById("rpg-rooms-go").onclick = function () {
      var empty = [];
      state.rooms.forEach(function (r, i) { if (!roomHasScope(r)) empty.push("Room " + (i + 1)); });
      if (empty.length) {
        var emptyEl = document.getElementById("rpg-rooms-err");
        emptyEl.textContent = "Please tick at least one surface for " + empty.join(" and ") + " \u2014 walls, ceiling, trim, doors, windows or a closet.";
        emptyEl.style.display = "block";
        return;
      }
      if (operator.on) return operatorReview();
      var missing = [];
      state.rooms.forEach(function (r, i) { if (!(r.images || []).length) missing.push("Room " + (i + 1)); });
      if (missing.length) {
        var errEl = document.getElementById("rpg-rooms-err");
        errEl.textContent = "Please add at least one photo for " + missing.join(" and ") + " — it's how we keep instant prices accurate.";
        errEl.style.display = "block";
        return;
      }
      contactThenQuote(computeInterior, roomBuilder);
    };
  }

  /* Shrink a picked photo on the device before it is stored: longest side 1600px,
     JPEG 0.75 (about 200-400KB). Full-size phone photos are 2-5MB each and a few of
     them pushed the intake upload past n8n Cloud's ~16MB limit, losing the whole quote.
     If the browser can't decode the image (rare formats), the original is kept. */
  var PHOTO_MAX_PX = 1600, PHOTO_QUALITY = 0.75;
  function readPhoto(f, cb) {
    var rd = new FileReader();
    rd.onerror = function () { cb(null); };
    rd.onload = function () {
      var original = String(rd.result);
      var img = new Image();
      /* 2026-11-23: a file the browser can't open as a picture (a .txt, a broken JPEG) is skipped,
         not counted as a room photo. HEIC is kept as sent: desktop browsers can't open it but it is a real photo. */
      var isHeic = /hei[cf]/i.test(f.type || "") || /\.hei[cf]$/i.test(f.name || "");
      img.onerror = function () { cb(isHeic ? { name: f.name, data: original } : null); };
      img.onload = function () {
        try {
          var w = img.naturalWidth, h = img.naturalHeight;
          var k = Math.min(1, PHOTO_MAX_PX / Math.max(w, h));
          var cv = document.createElement("canvas");
          cv.width = Math.max(1, Math.round(w * k)); cv.height = Math.max(1, Math.round(h * k));
          var g = cv.getContext("2d");
          g.fillStyle = "#fff"; g.fillRect(0, 0, cv.width, cv.height);   // PNG transparency -> white, not black
          g.drawImage(img, 0, 0, cv.width, cv.height);
          var small = cv.toDataURL("image/jpeg", PHOTO_QUALITY);
          if (small.indexOf("data:image/jpeg") !== 0 || small.length >= original.length) cb({ name: f.name, data: original });
          else cb({ name: f.name.replace(/\.[^.]+$/, "") + ".jpg", data: small });
        } catch (e) { cb({ name: f.name, data: original }); }
      };
      img.src = original;
    };
    rd.readAsDataURL(f);
  }

  /* Up to 3 photos per room (Ryan 2026-11-21): with up to 6 rooms that is at most 18
     photos, about 7MB, so the upload never has to drop any at full 1600px quality. */
  var ROOM_PHOTO_MAX = 3;
  function roomPhotoNote(i) {
    var clear = root.querySelector('[data-clearimg="' + i + '"]');
    if (clear) clear.parentNode.insertAdjacentHTML("beforeend",
      " &middot; up to " + ROOM_PHOTO_MAX + " photos per room, so we kept the first " + ROOM_PHOTO_MAX);
  }
  function wireRoomPhotos() {
    root.querySelectorAll(".rpg-room-photos").forEach(function (el) {
      el.onchange = function () {
        var i = +el.getAttribute("data-i");
        var picked = Array.prototype.slice.call(el.files || []);
        var have = (state.rooms[i].images || []).length;
        var files = picked.slice(0, Math.max(0, ROOM_PHOTO_MAX - have));
        var over = picked.length > files.length;
        if (!files.length) { if (over) { renderRooms(); roomPhotoNote(i); } return; }
        var out = [], done = 0;
        files.forEach(function (f) {
          readPhoto(f, function (p) { if (p) out.push(p); if (++done === files.length) finish(); });
        });
        function finish() {
          var r = state.rooms[i];
          r.images = (r.images || []).concat(out).slice(0, ROOM_PHOTO_MAX);
          renderRooms();
          if (over) roomPhotoNote(i);
          var bad = files.length - out.length;
          if (bad > 0) {
            var clr = root.querySelector('[data-clearimg="' + i + '"]'), box = root.querySelectorAll(".rpg-room-photos")[i];
            var msg = '<span class="rpg-err" role="alert" style="display:block">' + bad + (bad === 1 ? " file wasn&rsquo;t" : " files weren&rsquo;t") + ' a photo we could open, so ' + (bad === 1 ? "it was" : "they were") + ' skipped. Please add a JPG or PNG photo of the room.</span>';
            if (clr) clr.parentNode.insertAdjacentHTML("afterend", msg); else if (box) box.insertAdjacentHTML("afterend", msg);
          }
        }
      };
    });
    root.querySelectorAll("[data-clearimg]").forEach(function (el) {
      el.onclick = function (ev) { ev.preventDefault(); state.rooms[+el.getAttribute("data-clearimg")].images = []; renderRooms(); };
    });
  }

  function engineRoomType(label) {
    for (var i = 0; i < ROOM_TYPES.length; i++) if (ROOM_TYPES[i][0] === label) return ROOM_TYPES[i][1];
    return label;
  }

  function computeInterior() {
    var scope = {
      rooms: state.rooms.map(function (r) {
        var items = {};
        if (r.doors > 0) items["Door - Frame Standard"] = r.doors;
        if (r.windows > 0) items["Window - Standard Frame"] = r.windows;
        var bc = (r.baseframes ? 1 : 0) + (r.crown ? 1 : 0) + (r.chairrail ? 1 : 0);
        if (bc > 0) items["Trim - Baseboard/Crown"] = bc;
        if (r.wainscot) items["Trim - Wainscotting"] = 1;
        /* stair trim: steps -> linear feet -> 10ft catalog units, added to whatever
           trim the room already carries so the lines stay consistent with every other room */
        if (r.type_label === STAIR_TYPE && r.steps > 0) {
          STAIR_TRIM.forEach(function (t) {
            if (!r[t[0]]) return;
            var units = Math.round((r.steps * STAIR_FT_PER_STEP[t[2]] / 10) * 100) / 100;
            if (units > 0) items[t[3]] = (items[t[3]] || 0) + units;
          });
        }
        return { room_type: engineRoomType(r.type_label), room_size: r.room_size,
          walls_included: r.walls_included !== false,
          ceiling_included: !!r.ceiling_included, closet: r.closet, prep_level: roomCond(r),
          closet_shelves: !!r.closet_shelves, items: items };
      }),
      project: { surface_grade: "B", prep_level: projectCondition(), color_samples: true, transportation: true }
    };
    return RPPricing.quoteInterior(scope, PRICING_OPTS);
  }

  /* ============ EXTERIOR BUILDERS ============ */
  function extBuilder() {
    if (state.size === "deck") return deckBuilder();
    itemsBuilder();
  }

  function deckBuilder() {
    if (!state.ext || state.ext.kind !== "deck") state.ext = { kind: "deck", dsize: "Medium", rail: true, stain: "solid", prep: "light", notes: "" };
    var e = state.ext;
    function segRow(field, list) {
      return list.map(function (o) {
        return '<button type="button" class="rpg-seg' + (e[field] === o[0] ? " rpg-seg-on" : "") +
          '" data-f="' + field + '" data-v="' + o[0] + '">' + o[1] + "</button>";
      }).join("");
    }
    h('<div class="rpg-q">Tell us about the deck</div>' +
      '<label class="rpg-lbl">Deck size</label><div class="rpg-segrow">' +
      segRow("dsize", [["Small", "Small<br><small>up to ~150 sqft</small>"], ["Medium", "Medium<br><small>~150&ndash;300 sqft</small>"], ["Large", "Large<br><small>300+ sqft</small>"]]) + "</div>" +
      '<label class="rpg-lbl">Current finish</label><div class="rpg-segrow">' +
      segRow("stain", [["solid", "Solid stain<br><small>can&rsquo;t see wood grain</small>"], ["transparent", "Transparent stain<br><small>can see the wood grain</small>"]]) + "</div>" +
      '<label class="rpg-lbl">Condition &amp; prep needed <span style="font-weight:400">(pressure washing is always included)</span></label><div class="rpg-segrow">' +
      segRow("prep", [["light", "Light<br><small>good condition</small>"], ["moderate", "Moderate<br><small>some peeling</small>"], ["excessive", "Excessive<br><small>heavy peeling / boards need replacing</small>"]]) + "</div>" +
      '<label class="rpg-chk" style="margin-top:14px;display:flex"><input type="checkbox" id="rpg-drail"' + (e.rail ? " checked" : "") + "> Railings &amp; spindles too</label>" +
      '<div class="rpg-room">' +
      rushBlockHtml() +
      '<label class="rpg-lbl">Anything else about the deck?</label>' +
      '<textarea class="rpg-field" rows="2" id="rpg-dnotes" placeholder="Optional notes">' + esc(e.notes) + "</textarea>" +
      photoBlockHtml() +
      "</div>" +
      '<button class="rpg-cta" id="rpg-ext-go">Continue</button><br><button class="rpg-back">&larr; back</button>');
    wirePhotos();
    wireRush(function () { e.notes = document.getElementById("rpg-dnotes").value; deckBuilder(); });
    root.querySelectorAll(".rpg-seg").forEach(function (el) {
      if (el.id === "rpg-rush-no" || el.id === "rpg-rush-yes") return;
      el.onclick = function () { e[el.getAttribute("data-f")] = el.getAttribute("data-v"); e.notes = document.getElementById("rpg-dnotes").value; deckBuilder(); };
    });
    document.getElementById("rpg-drail").onchange = function () { e.rail = this.checked; };
    document.getElementById("rpg-dnotes").onchange = function () { e.notes = this.value; };
    backHandler = q2;
    document.getElementById("rpg-ext-go").onclick = function () { e.notes = document.getElementById("rpg-dnotes").value; contactThenQuote(computeDeck, deckBuilder); };
  }

  var STORY_LABELS = { 1: "1st story", 2: "2nd story", 3: "3rd story +" };

  function newLevel(story) {
    var lvl = { story: story || 1, qty: {} };
    EXT_ITEMS.forEach(function (it) { lvl.qty[it[1] + "|" + it[0]] = 0; });
    return lvl;
  }

  function itemsBuilder() {
    if (!state.ext || state.ext.kind !== "items") {
      state.ext = { kind: "items", levels: [newLevel(1)], notes: "" };
      state.ext.levels[0].qty["Standard Frame|doors"] = 1;
    }
    var e = state.ext;
    var cards = e.levels.map(function (lvl, li) {
      var storySeg = [1, 2, 3].map(function (sNum) {
        return '<button type="button" class="rpg-seg' + (lvl.story === sNum ? " rpg-seg-on" : "") +
          '" data-li="' + li + '" data-story="' + sNum + '">' + STORY_LABELS[sNum] + "</button>";
      }).join("");
      var items = EXT_ITEMS.map(function (it) {
        var key = it[1] + "|" + it[0];
        var qv = lvl.qty[key] || 0;
        return '<div class="rpg-item' + (qv > 0 ? " rpg-item-on" : "") + '"><span>' + it[2] + "</span>" +
          '<span class="rpg-step">' +
          '<button type="button" data-li="' + li + '" data-k="' + key + '" data-d="-1">&minus;</button>' +
          "<b>" + qv + "</b>" +
          '<button type="button" data-li="' + li + '" data-k="' + key + '" data-d="1">+</button>' +
          "</span></div>";
      }).join("");
      return '<div class="rpg-room">' +
        '<div class="rpg-room-head"><strong>Level ' + (li + 1) + "</strong>" +
        (e.levels.length > 1 ? '<button type="button" class="rpg-x" data-dellvl="' + li + '">remove</button>' : "") + "</div>" +
        '<label class="rpg-lbl">Which story?</label><div class="rpg-segrow">' + storySeg + "</div>" +
        '<label class="rpg-lbl">Items on this level</label>' +
        '<div class="rpg-items">' + items + "</div>" +
        "</div>";
    }).join("");

    h('<div class="rpg-q">What needs painting, level by level?</div>' + cards +
      (e.levels.length < 3 ? '<button class="rpg-add" id="rpg-addlvl">+ Add another level</button>' : "") +
      '<div class="rpg-room">' +
      rushBlockHtml() +
      '<div class="rpg-note">Painting <strong>siding</strong>? That&rsquo;s a bigger job than this list &mdash; <a href="#" id="rpg-siding-walk">book an in-person consultation instead</a>.</div>' +
      '<label class="rpg-lbl">Anything else?</label>' +
      '<textarea class="rpg-field" rows="2" id="rpg-enotes" placeholder="Optional notes">' + esc(e.notes) + "</textarea>" +
      photoBlockHtml() +
      "</div>" +
      '<button class="rpg-cta" id="rpg-ext-go">Continue</button><br><button class="rpg-back">&larr; back</button>');
    wirePhotos();
    wireRush(function () { keepNotes(); itemsBuilder(); });

    function keepNotes() { e.notes = document.getElementById("rpg-enotes").value; }
    root.querySelectorAll(".rpg-step button").forEach(function (el) {
      el.onclick = function () {
        keepNotes();
        var lvl = e.levels[+el.getAttribute("data-li")], key = el.getAttribute("data-k");
        lvl.qty[key] = Math.max(0, Math.min(20, (lvl.qty[key] || 0) + (+el.getAttribute("data-d"))));
        itemsBuilder();
      };
    });
    root.querySelectorAll("[data-story]").forEach(function (el) {
      el.onclick = function () { keepNotes(); e.levels[+el.getAttribute("data-li")].story = +el.getAttribute("data-story"); itemsBuilder(); };
    });
    root.querySelectorAll("[data-dellvl]").forEach(function (el) {
      el.onclick = function () { keepNotes(); e.levels.splice(+el.getAttribute("data-dellvl"), 1); itemsBuilder(); };
    });
    var addBtn = document.getElementById("rpg-addlvl");
    if (addBtn) addBtn.onclick = function () {
      keepNotes();
      var next = Math.min(3, (e.levels[e.levels.length - 1].story || 1) + 1);
      e.levels.push(newLevel(next)); itemsBuilder();
    };
    document.getElementById("rpg-siding-walk").onclick = function (ev) {
      ev.preventDefault();
      track("triage_completed", { route: "walkthrough", type: "exterior", size: "siding" });
      routeWalkthrough("Siding deserves an in-person consultation.",
        "Full siding work is priced from an on-site look &mdash; we&rsquo;ll walk the property with you so the quote is accurate. Pick a time:", itemsBuilder);
    };
    backHandler = q2;
    document.getElementById("rpg-ext-go").onclick = function () {
      keepNotes();
      var any = e.levels.some(function (lvl) { return Object.keys(lvl.qty).some(function (k) { return lvl.qty[k] > 0; }); });
      if (!any) return;
      contactThenQuote(computeExtItems, itemsBuilder);
    };
  }

  function computeDeck() {
    var e = state.ext;
    var squares = { Small: 0.5, Medium: 1, Large: 1.5 }[e.dsize] || 1;
    var surface = { name: "Deck", siding: { "Decking": squares } };
    if (e.rail) surface.trim = { "Handrail": 1, "Spindles (10ft)": Math.max(1, Math.round(squares * 3)) };
    var prepMap = { light: "Standard", moderate: "Superior", excessive: "Restoration" };
    var q = RPPricing.quoteExterior({
      surfaces: [surface],
      project: { surface_grade: "B", prep_level: prepMap[e.prep] || "Standard", color_scheme: "1-2 Colors", staging: false, color_samples: false }
    }, PRICING_OPTS);
    var mult = (e.stain === "transparent") ? (C.TRANSPARENT_DECK_MULTIPLIER || 2) : (C.DECK_SOLID_MULTIPLIER || 1.3);
    q.grand_total = q.grand_total * mult;
    q.production.duration_days = q.production.duration_days * mult;
    return q;
  }

  function computeExtItems() {
    /* Per-story pricing: item quantities are scaled by the story multiplier before
       hitting the engine ("effective quantities"), so upper-floor items cost more
       while fixed fees (trash, transport, CC) are applied only once. */
    var e = state.ext;
    var sm = C.EXT_STORY_MULTIPLIERS || { 1: 1.0, 2: 1.25, 3: 1.5 };
    var s = { name: "Exterior Items", doors: {}, windows: {}, trim: {} };
    e.levels.forEach(function (lvl) {
      var mult = sm[lvl.story] || 1.0;
      Object.keys(lvl.qty).forEach(function (k) {
        var n = lvl.qty[k]; if (!n) return;
        var parts = k.split("|");
        s[parts[1]][parts[0]] = (s[parts[1]][parts[0]] || 0) + n * mult;
      });
    });
    return RPPricing.quoteExterior({
      surfaces: [s],
      project: { surface_grade: "B", prep_level: "Standard", color_scheme: "1-2 Colors", staging: false, color_samples: false }
    }, PRICING_OPTS);
  }

  /* ============ PHOTOS (lives on the builder screens) ============ */
  function photoBlockHtml() {
    return '<label class="rpg-lbl">Photos <span style="font-weight:400">(optional but helpful &mdash; especially for wallpaper, repairs, or special requests)</span></label>' +
      '<input class="rpg-field" id="rpg-photos" type="file" accept="image/*" multiple>' +
      '<div class="rpg-note" id="rpg-photo-count">' + (state.images.length ? state.images.length + " photo(s) attached &middot; <a href='#' id='rpg-photo-clear'>clear</a>" : "") + "</div>";
  }
  function wirePhotos() {
    var inp = document.getElementById("rpg-photos");
    if (!inp) return;
    inp.onchange = function () {
      var files = Array.prototype.slice.call(inp.files || []).slice(0, 6);
      if (!files.length) return;
      var out = [], done = 0;
      files.forEach(function (f) {
        readPhoto(f, function (p) { if (p) out.push(p); if (++done === files.length) finish(); });
      });
      function finish() {
        state.images = state.images.concat(out).slice(0, 6);
        document.getElementById("rpg-photo-count").innerHTML = state.images.length + " photo(s) attached &middot; <a href='#' id='rpg-photo-clear'>clear</a>";
        wireClear();
      }
    };
    wireClear();
    function wireClear() {
      var cl = document.getElementById("rpg-photo-clear");
      if (cl) cl.onclick = function (ev) { ev.preventDefault(); state.images = []; document.getElementById("rpg-photo-count").innerHTML = ""; };
    }
  }

  /* ============ ADDRESS AUTOCOMPLETE + SERVICE AREA ============ */
  /* Service area = Boston + metro (eastern MA). ZIP prefixes cover: MetroWest 017,
     northern suburbs 018, North Shore 019, south suburbs 020, Boston/Cambridge 021-022,
     South Shore 023, Newton/Waltham belt 024. */
  function inServiceArea(zip, stateCode) {
    if (stateCode && stateCode !== "MA") return false;
    var prefixes = C.SERVICE_ZIP_PREFIXES || ["017", "020", "021", "022", "024"];
    return prefixes.some(function (p) { return String(zip).indexOf(p) === 0; });
  }

  /* a11y: read a hand-typed address. Accepts "number street[, unit], city[,] [MA] ZIP".
     Returns { street, city, zip } or null. The caller applies the service-area check. */
  function parseTypedAddress(v) {
    var parts = String(v || "").split(",").map(function (x) { return x.replace(/\s+/g, " ").trim(); }).filter(Boolean);
    if (parts.length < 2) return null;
    var last = parts[parts.length - 1];
    if (/^(usa|us|united states)$/i.test(last)) { parts.pop(); last = parts[parts.length - 1]; }
    if (parts.length < 2) return null;
    var mz = last.match(/^(.*?)\s*(\d{5})(?:-\d{4})?$/);
    if (!mz) return null;
    var zip = mz[2];
    var rest = mz[1].replace(/\b(MA|Mass\.?|Massachusetts)\b\.?$/i, "").trim();
    var cityIdx = parts.length - 1, city = rest;
    if (!city) { cityIdx = parts.length - 2; city = parts[cityIdx]; }
    if (cityIdx < 1) return null;
    city = city.replace(/\b(MA|Mass\.?|Massachusetts)\b\.?$/i, "").trim();
    /* "..., Boston, MA, 02130": the part before the ZIP was only the state, so the city is one further back */
    if (!city && cityIdx > 1) { cityIdx -= 1; city = parts[cityIdx]; }
    var street = parts.slice(0, cityIdx).join(", ");
    if (!city || /\d/.test(city) || !/^\d[\w-]*\s+\S/.test(street)) return null;
    return { street: street, city: city, zip: zip };
  }

  function setupAddress() {
    var inp = document.getElementById("rpg-addr");
    var sugg = document.getElementById("rpg-sugg");
    var picked = document.getElementById("rpg-addr-picked");
    function setAddress(street, city, zip, stateCode, label) {
      state.addrTyped = null; /* a11y: a picked suggestion replaces any hand-typed address */
      inp.value = label || (street + ", " + city + ", MA " + zip);
      sugg.innerHTML = ""; sugg.style.display = "none";
      if (!zip) {
        /* Google sometimes returns just a street or a town. That is an incomplete address, not one outside the service area. */
        if (state.lastTypedAddr && /\d/.test(state.lastTypedAddr)) inp.value = state.lastTypedAddr;   /* give back what they typed, so adding the ZIP is enough */
        state.address = {};
        track("address_incomplete", {});
        picked.innerHTML = '<span style="display:block;background:#fff;color:#b3261e;border:1.5px solid #b3261e;border-radius:8px;padding:8px 10px;font-weight:600">That address looks incomplete. Please pick a suggestion that includes the house number, or type the full address with the ZIP code.</span>';
        return;
      }
      if (!inServiceArea(zip, stateCode)) {
        state.address = {};
        track("address_out_of_area", { zip: zip });
        picked.innerHTML = '<span style="display:block;background:#fff;color:#b3261e;border:1.5px solid #b3261e;border-radius:8px;padding:8px 10px;font-weight:600">It looks like this address is outside our service area &mdash; we serve Boston and its metro area. If you think that&rsquo;s not right, call us at ' + C.PHONE_DISPLAY + ".</span>";
        return;
      }
      state.address = { street: street, city: city, zip: zip };
      picked.innerHTML = "&#10003; " + esc(street + ", " + city + " " + zip);
    }
    var key = C.GOOGLE_MAPS_API_KEY || "";
    if (!C.TEST_MODE && key && key.indexOf("REPLACE") !== 0) {
      var s = document.createElement("script");
      s.src = "https://maps.googleapis.com/maps/api/js?key=" + key + "&libraries=places&v=weekly";
      s.onload = function () {
        var ac = new google.maps.places.Autocomplete(inp, {
          types: ["address"], componentRestrictions: { country: "us" }, fields: ["address_components", "formatted_address"]
        });
        inp.addEventListener("input", function () { state.lastTypedAddr = inp.value; });
        ac.addListener("place_changed", function () {
          var pl = ac.getPlace(); if (!pl || !pl.address_components) return;
          var get = function (t, short) {
            var c = pl.address_components.find(function (x) { return x.types.indexOf(t) > -1; });
            return c ? (short ? c.short_name : c.long_name) : "";
          };
          var num = get("street_number"), route = get("route");
          /* Places sometimes omits street_number: recover it from the formatted
             address or from what the user typed */
          if (!num) { var mA = String(pl.formatted_address || "").match(/^\s*(\d[\w-]*)[ ,]/); if (mA) num = mA[1]; }
          if (!num) { var mT = String(inp.value || "").match(/^\s*(\d[\w-]*)\s/); if (mT) num = mT[1]; }
          setAddress((num + " " + route).trim(),
            get("locality") || get("sublocality") || get("neighborhood"),
            get("postal_code"), get("administrative_area_level_1", true), pl.formatted_address);
        });
      };
      document.head.appendChild(s);
      return;
    }
    /* Preview-only mock (live page uses Google Places covering all real addresses).
       Includes one out-of-area entry so the service-area message is testable. */
    inp.addEventListener("input", function () {
      state.address = {}; picked.innerHTML = "";
      var v = inp.value.trim();
      if (v.length < 4) { sugg.style.display = "none"; sugg.innerHTML = ""; return; }
      var base = v.replace(/,.*$/, "");
      var mocks = [
        [base, "Jamaica Plain", "02130", "MA"],
        [base, "Cambridge", "02139", "MA"],
        [base, "Quincy", "02169", "MA"],
        [base, "Worcester", "01609", "MA"]
      ];
      sugg.innerHTML = mocks.map(function (mSug, i) {
        return '<button type="button" class="rpg-sugg-item" data-i="' + i + '">' + esc(mSug[0] + ", " + mSug[1] + ", " + mSug[3] + " " + mSug[2]) + "</button>";
      }).join("") + '<div style="padding:6px 14px;font-size:.72rem;color:#666;background:#fafafa">Sample suggestions &mdash; the live page searches every real address via Google</div>';
      sugg.style.display = "block";
      Array.prototype.forEach.call(sugg.querySelectorAll(".rpg-sugg-item"), function (el) {
        el.onclick = function () {
          var mSug = mocks[+el.getAttribute("data-i")];
          if (window.rpConsole) window.rpConsole("MOCK", "Address pick: " + mSug.join(", "));
          setAddress(mSug[0], mSug[1], mSug[2], mSug[3]);
        };
      });
    });
  }

  /* ============ CONTACT + ADDRESS → QUOTE ============ */
  function contactThenQuote(computeFn, backFn) {
    h('<div class="rpg-q">Almost there &mdash; where is the project, and where should we send your quote?</div>' +
      '<input class="rpg-field" id="rpg-name"  placeholder="Full name" aria-label="Full name" autocomplete="name">' +
      '<input class="rpg-field" id="rpg-email" type="email" placeholder="Email" aria-label="Email" autocomplete="email">' +
      '<input class="rpg-field" id="rpg-phone" type="tel" placeholder="Phone" aria-label="Phone" autocomplete="tel">' +
      '<div style="position:relative">' +
      '<input class="rpg-field" id="rpg-addr" placeholder="Project address" aria-label="Project address" aria-describedby="rpg-addr-help" autocomplete="off">' +
      '<div id="rpg-sugg" class="rpg-sugg" style="display:none"></div>' +
      "</div>" +
      '<div class="rpg-note" id="rpg-addr-help">Pick your address from the suggestions, or type it in full with the ZIP code (for example 12 Main St, Boston, MA 02130).</div>' +
      '<div class="rpg-note" id="rpg-addr-picked"></div>' +
      '<input class="rpg-field" id="rpg-promo" placeholder="Promo code (optional)" aria-label="Promo code (optional)" autocomplete="off" autocapitalize="characters">' +
      '<div class="rpg-err" id="rpg-c-err"></div>' +
      '<button class="rpg-cta" id="rpg-c-go">See my quote</button><br><button type="button" class="rpg-back">&larr; back</button>');
    backHandler = backFn;
    setupAddress();
    /* editing an existing quote: keep what they already told us */
    if (state.contact) {
      document.getElementById("rpg-name").value = state.contact.name || "";
      document.getElementById("rpg-email").value = state.contact.email || "";
      document.getElementById("rpg-phone").value = state.contact.phone || "";
    }
    document.getElementById("rpg-promo").value = state.promoInput || "";
    if (state.address && state.address.street && state.address.zip) {
      document.getElementById("rpg-addr").value = state.address.street + (state.address.city ? ", " + state.address.city : "");
      var pkEl = document.getElementById("rpg-addr-picked");
      if (pkEl) pkEl.innerHTML = "&#10003; " + esc(state.address.street + ", " + state.address.city + " " + (state.address.zip || ""));
      /* a11y: a hand-typed address comes back exactly as it was typed */
      if (state.addrTyped != null) document.getElementById("rpg-addr").value = state.addrTyped;
    }
    document.getElementById("rpg-c-go").onclick = function () {
      var n = document.getElementById("rpg-name").value.trim(),
          em = document.getElementById("rpg-email").value.trim(),
          p = document.getElementById("rpg-phone").value.trim();
      /* a11y: a visitor who cannot use the suggestion list can type the full address.
         Accepted only as "number street, city, [MA] ZIP"; the same service-area check applies. */
      var addrEl = document.getElementById("rpg-addr");
      /* a typed address is only good for the exact text it was read from: if the visitor
         has edited the box since, forget it and read the box again. An address picked from
         the suggestion list clears state.addrTyped, so picked addresses behave as before. */
      if (state.addrTyped != null && addrEl.value !== state.addrTyped) { state.address = {}; state.addrTyped = null; }
      if (!state.address.street || !state.address.zip) {
        var mTyped = parseTypedAddress(addrEl.value);
        if (mTyped) {
          if (inServiceArea(mTyped.zip, "MA")) {
            state.address = mTyped;
            state.addrTyped = addrEl.value;
            track("address_typed_fallback", { zip: mTyped.zip });
          } else if (document.getElementById("rpg-addr-picked").textContent.indexOf("outside our service area") === -1) {
            /* (skipped when the suggestion list already showed this message and logged the event) */
            track("address_out_of_area", { zip: mTyped.zip });
            document.getElementById("rpg-addr-picked").innerHTML = '<span style="display:block;background:#fff;color:#b3261e;border:1.5px solid #b3261e;border-radius:8px;padding:8px 10px;font-weight:600">It looks like this address is outside our service area &mdash; we serve Boston and its metro area. If you think that&rsquo;s not right, call us at ' + C.PHONE_DISPLAY + ".</span>";
          }
        }
      }
      /* a11y: say exactly which fields need attention, mark them, and move focus to the first */
      var bad = [];
      if (!n) bad.push(["rpg-name", "your full name"]);
      if (!/.+@.+\..+/.test(em)) bad.push(["rpg-email", "a valid email"]);
      if (p.length < 7) bad.push(["rpg-phone", "a phone number"]);
      if (!state.address.street || !state.address.zip) bad.push(["rpg-addr", "the project address (pick it from the suggestions, or type it in full with the ZIP code)"]);
      ["rpg-name", "rpg-email", "rpg-phone", "rpg-addr"].forEach(function (id) { document.getElementById(id).removeAttribute("aria-invalid"); });
      if (bad.length) {
        bad.forEach(function (b) { document.getElementById(b[0]).setAttribute("aria-invalid", "true"); });
        var errEl = document.getElementById("rpg-c-err");
        errEl.textContent = "Please add " + bad.map(function (b) { return b[1]; }).join("; ") + ".";
        errEl.style.display = "block";
        document.getElementById(bad[0][0]).focus();
        return;
      }
      document.getElementById("rpg-c-err").style.display = "none";
      state.contact = { name: n, email: em, phone: p };
      /* promo code: optional, validated (case-insensitively) against the doGet-loaded
         registry. An invalid or unknown code is dropped silently — never a blocker. */
      state.promoInput = document.getElementById("rpg-promo").value.trim();
      state.promo = promoLookup(state.promoInput);
      if (state.promoInput && !state.promo) track("promo_code_invalid", { project_id: state.projectId });
      var btn = this; btn.disabled = true; btn.textContent = "Calculating…";
      var quote;
      try { quote = computeFn(); } catch (err) {
        track("quote_engine_error", { message: String(err && err.message || err) });
        return routeWalkthrough("Let&rsquo;s take a proper look at this one.", "Pick a time for a consultation:", backFn);
      }
      state.quote = quote;
      /* walkthrough cap is checked on the BASE price — a rush premium shouldn't
         push a quotable project into the walkthrough lane (rush needs speed).
         Interior quotes skip it since v3.6 (Ryan 2026-11-21: the room cap is the limit). */
      if (computeFn !== computeInterior && quote.grand_total >= WALKTHROUGH_CAP) {
        submitProject("WALKTHROUGH (computed " + money(quote.grand_total) + " — above instant cap)");
        return routeWalkthrough("This one deserves an in-person consultation.",
          "Based on your scope this is a substantial project &mdash; we&rsquo;ll walk it with you so the quote is exact. Pick a time:", backFn);
      }
      if (state.rush) {
        quote.rush_premium = Math.round(quote.grand_total * ((C.RUSH_MULTIPLIER || 1.3) - 1));
        quote.grand_total += quote.rush_premium;
      }
      if (quote.grand_total < MIN_PROJECT) {
        submitProject("PAINTER-DAY ROUTED (computed " + money(quote.grand_total) + " — below minimum)");
        return routeDay(true, backFn);
      }
      /* the promo discount applies LAST: routing (walkthrough cap, project minimum)
         is decided on the undiscounted price, so a code can only lower the number
         shown — it can never bounce a quotable job into another lane */
      if (state.promo) {
        quote.promo_code = state.promo.code;
        quote.promo_pct = state.promo.pct;
        quote.promo_discount = Math.round(quote.grand_total * state.promo.pct / 100);
        quote.grand_total -= quote.promo_discount;
        track("promo_code_applied", { code: state.promo.code, project_id: state.projectId });
      }
      submitProject("INSTANT QUOTE " + money(quote.grand_total));
      showQuote(quote, backFn);
    };
  }

  /* ============ SCOPE RECAP (no dollars, no sqft) ============ */
  function roomRecapLine(r) {
    var wallsOn = r.walls_included !== false;
    var parts = wallsOn ? ["walls"] : [];
    if (r.ceiling_included) parts.push("ceiling");
    TRIM_OPTS.forEach(function (t) { if (r[t[0]]) parts.push(t[1].toLowerCase()); });
    if (r.doors > 0) parts.push(r.doors + " door" + (r.doors > 1 ? "s" : ""));
    if (r.windows > 0) parts.push(r.windows + " window" + (r.windows > 1 ? "s" : ""));
    if (r.closet !== "not_included") parts.push(r.closet + " closet" + (r.closet_shelves ? " with shelving" : ""));
    if (r.type_label === STAIR_TYPE && r.steps > 0) {
      var stairBits = STAIR_TRIM.filter(function (t) { return r[t[0]]; })
        .map(function (t) { return t[1].toLowerCase(); });
      if (stairBits.length) parts.push(stairBits.join(" and ") + " over " + r.steps + " steps");
    }
    if (!wallsOn) parts.push("walls not included");
    if (roomCond(r) === "Superior") parts.push("some repairs needed (included)");
    var dim = dimsFor(r.type_label, r.room_size);
    return "<strong>" + esc(roomTitle(r)) + (dim ? " (" + dim + " ft)" : "") + "</strong> &mdash; " + parts.join(", ") +
      (r.notes ? '<br><em style="color:#666">Your note: ' + esc(r.notes) + " (reviewed by Ryan Painting; any additional cost confirmed before work)</em>" : "");
  }

  /* ============ ESTIMATE DATA FOR THE GENERATOR-STYLE PDF (v3.16, Ryan 2026-11-23) ============
     Sent with the quote so IQ1 can lay the estimate out like a Generator estimate: one block
     per room with its price, item lines and quantities, the Generator's recap labels, the
     Catalog item names (IQ1 reads their wording live from the Generator Catalog), and the
     totals. Set-up, color samples and the card fee are spread across the room prices in
     proportion, as the Generator does; materials stay separate; rush and promo are their own
     lines. Room prices are scaled so everything adds up to the price the client saw. */
  function estimateData() {
    var q = state.quote; if (!q || !q.sections || state.size !== "rooms") return null;
    var r2 = function (x) { return Math.round(x * 100) / 100; };
    var S = q.sections.reduce(function (a, s) { return a + s.sales_price; }, 0) || 1;
    var materials = r2(q.materials_total || 0), rush = r2(q.rush_premium || 0), promo = r2(q.promo_discount || 0);
    var total = r2(q.grand_total);
    var k = (total - materials - rush + promo) / S;   /* spreads surcharges (and any owner price) over the rooms */
    var seen = {};
    var rooms = state.rooms.map(function (r, i) {
      var sec = q.sections[i] || { items: [], sales_price: 0 };
      var lines = [], bcUnits = [];
      var isStair = r.type_label === STAIR_TYPE;
      if (r.baseframes) bcUnits.push(["base", 1]);
      if (r.crown) bcUnits.push(["crown", 1]);
      if (r.chairrail) bcUnits.push(["chair", 1]);
      if (isStair && r.stair_risers && r.steps > 0) bcUnits.push(["risers", Math.round(r.steps * STAIR_FT_PER_STEP.risers / 10 * 100) / 100]);
      var bcTot = bcUnits.reduce(function (a, u) { return a + u[1]; }, 0) || 1;
      (sec.items || []).forEach(function (it) {
        var price = it.sales_price * k, L = it.label, n = Number(it.quantity) || 1;
        if (/^Walls/.test(L)) lines.push({ cat: "Walls", label: "Walls: preparation and two finish coats", price: price });
        else if (/^Ceiling/.test(L)) lines.push({ cat: "Ceiling", label: "Ceiling: two finish coats", price: price });
        else if (/^Closet shelving/.test(L)) lines.push({ cat: "Closet Shelving", label: "Closet shelving", price: price });
        else if (/^Closet/.test(L)) lines.push({ cat: "Closets", label: "Closet interior", price: price });
        else if (/^Primer/.test(L)) lines.push({ cat: "Primer", label: "Full prime, all surfaces", price: price });
        else if (L === "Door - Frame Standard") lines.push({ cat: "Door - Frame (Standard)", label: n === 1 ? "Door frame" : "Door frames", price: price });
        else if (L === "Window - Standard Frame") lines.push({ cat: "Window - Standard Frame", label: n === 1 ? "Window frame, standard" : "Window frames, standard", price: price });
        else if (L === "Trim - Wainscotting") lines.push({ cat: "Trim - Wainscotting (10ft)", label: "Wainscoting", price: price });
        else if (L === "Trim - Handrail") lines.push({ cat: "Trim - Handrail (10ft)", label: "Handrail", price: price });
        else if (L === "Trim - Spindles/Balusters") lines.push({ cat: "Trim - Spindles / Balusters (10ft)", label: "Spindles and balusters", price: price });
        else if (L === "Trim - Baseboard/Crown") bcUnits.forEach(function (u) {
          var part = price * u[1] / bcTot;
          if (u[0] === "base") lines.push({ cat: "Trim - Baseboards (10ft)", label: "Baseboards", price: part });
          if (u[0] === "crown") lines.push({ cat: "Crown Molding", label: "Crown molding", price: part });
          if (u[0] === "chair") lines.push({ cat: "Chair Rail", label: "Chair rail", price: part });
          if (u[0] === "risers") lines.push({ cat: "Stair Risers", label: "Stair risers (" + r.steps + " stairs)", price: part });
        });
        else lines.push({ cat: L, label: L, price: price });
      });
      lines.forEach(function (l) { l.price = r2(l.price); });
      var name = r.type_label;
      seen[name] = (seen[name] || 0) + 1;
      if (seen[name] > 1 || state.rooms.filter(function (x) { return x.type_label === r.type_label; }).length > 1) name = r.type_label + " " + seen[name];
      var dim = dimsFor(r.type_label, r.room_size);
      return {
        name: name, size: isStair ? sizeLabel(r) : r.room_size + (dim ? " (" + dim + " ft)" : ""),
        repairs: roomCond(r) === "Superior", walls: r.walls_included !== false, ceiling: !!r.ceiling_included,
        closet: r.closet !== "not_included", doors: Number(r.doors) || 0, windows: Number(r.windows) || 0,
        trim: !!(r.baseframes || r.crown || r.chairrail || r.wainscot || (isStair && (r.stair_risers || r.stair_handrail || r.stair_spindles))),
        stairs: isStair ? (Number(r.steps) || 0) : 0, notes: r.notes || "",
        lines: lines, total: r2(lines.reduce(function (a, l) { return a + l.price; }, 0))
      };
    });
    /* cent rounding: the last cent goes on the biggest line so the sum is exact */
    var sumRooms = rooms.reduce(function (a, r) { return a + r.total; }, 0);
    var diff = r2(total - materials - rush + promo - sumRooms);
    if (diff && rooms.length) {
      var big = rooms.reduce(function (a, r) { return r.total > a.total ? r : a; }, rooms[0]);
      if (big.lines.length) { big.lines[0].price = r2(big.lines[0].price + diff); big.total = r2(big.total + diff); }
    }
    var repairsRooms = rooms.filter(function (r) { return r.repairs; }).length;
    return {
      v: 1, grade: repairsRooms > 2 ? "C" : "B", prep: "Standard",
      rooms: rooms, rooms_total: r2(rooms.reduce(function (a, r) { return a + r.total; }, 0)),
      materials: materials, rush: rush, promo: promo, promo_code: q.promo_code || "", promo_pct: q.promo_pct || 0,
      total: total,
      /* Generator: Rental Ready = 7.5% less labor, Restoration Grade = 55% more labor (Catalog AK16 / AK18) */
      rental_ready: r2(S * 0.075), restoration: r2(S * 0.55)
    };
  }

  function scopeRecapHtml() {
    var lines = [];
    if (state.size === "rooms") {
      lines = state.rooms.map(roomRecapLine);
    } else if (state.ext && state.ext.kind === "deck") {
      var e = state.ext;
      lines.push("<strong>" + e.dsize + " deck</strong> &mdash; " + (e.stain === "transparent" ? "transparent stain finish" : "solid stain finish") +
        ", " + e.prep + " prep, pressure washing included" + (e.rail ? ", railings &amp; spindles" : ""));
      if (e.notes) lines.push('<em style="color:#666">Your note: ' + esc(e.notes) + "</em>");
    } else if (state.ext) {
      state.ext.levels.forEach(function (lvl) {
        var items = [];
        EXT_ITEMS.forEach(function (it) {
          var nQty = lvl.qty[it[1] + "|" + it[0]];
          if (nQty > 0) items.push(nQty + " &times; " + it[2].toLowerCase());
        });
        if (items.length) lines.push("<strong>" + STORY_LABELS[lvl.story] + "</strong> &mdash; " + items.join(", "));
      });
      if (state.ext.notes) lines.push('<em style="color:#666">Your note: ' + esc(state.ext.notes) + "</em>");
    }
    if (state.rush) lines.push('<span style="color:#b3261e;font-weight:600">Rush &mdash; needed within a week (priority scheduling)</span>');
    if (state.promo) lines.push('<span style="color:#1d5f2f;font-weight:600">Promo code ' + esc(state.promo.code) + ' &mdash; ' + state.promo.pct + '% discount applied</span>');
    var work = '<p style="font-size:.88rem;color:#555;margin-top:10px">Includes: protection of your floors, furnishings and surroundings; standard surface preparation; premium paints (two coats); and full cleanup. ' +
      (state.type === "exterior" ? "Exterior work is weather-dependent &mdash; weather rescheduling is free. " : "") +
      "Anything outside standard scope (wallpaper removal, heavy repairs, special coatings) is reviewed by Ryan Painting and any additional cost is confirmed with you before work begins.</p>";
    return '<div style="font-size:.9rem;line-height:1.6">' + lines.map(function (l) { return "<div style='margin-top:6px'>" + l + "</div>"; }).join("") + "</div>" + work;
  }

  /* ============ QUOTE SCREEN ============ */
  /* The lead sees the price, opens the written estimate (PDF) the moment it's ready,
     and ACCEPTS the proposal — no payment here. Acceptance goes to Ryan Painting for
     review; the contract + deposit invoice follow by email via the client portal. */
  var pdfUrl = null, portalUrl = null, pdfTimer = null, pdfGaveUp = false;
  /* An unaccepted SIBLING estimate for the same client (Interior/Exterior, Option A/B),
     reported by the quote-info endpoint. Rendered on the resume-accept screen and the
     post-accept confirmation so saying yes to both never means hunting through emails. */
  var siblingPid = "", siblingLabel = "";
  function siblingOfferHtml(lead) {
    if (!siblingPid) return "";
    return '<div class="rpg-note" style="text-align:center;border:1px solid #cfe3d4;border-radius:8px;padding:10px 12px;margin-top:10px">' +
      lead + ' the <strong>' + esc(siblingLabel || 'other') + '</strong> estimate? ' +
      '<a href="/proposal?accept=' + encodeURIComponent(siblingPid) + '">Review it here</a>.</div>';
  }

  function docLink(href, label) {
    if (href === "MOCK") return '<button type="button" class="rpg-cta" style="background:#fff;color:#1d5f2f;border:2px solid #24a149;margin:4px 6px" data-mockdoc="' + label + '">' + label + "</button>";
    return '<a class="rpg-cta" style="display:inline-block;text-decoration:none;padding:12px 22px;background:#fff;color:#1d5f2f;border:2px solid #24a149;margin:4px 6px" href="' + href + '" target="_blank" rel="noopener">' + label + "</a>";
  }
  function pdfButtonHtml() {
    var parts = [];
    if (pdfUrl) parts.push(docLink(pdfUrl, "View my estimate (PDF)"));
    if (portalUrl) parts.push(docLink(portalUrl, "Open my client portal"));
    if (parts.length) return parts.join("") +
      (portalUrl ? '<div class="rpg-note">Your estimate is saved in your client portal &mdash; set a password once and everything about your project lives there.</div>' : "");
    if (pdfGaveUp) return '<span class="rpg-note" style="display:inline-block">Your written estimate is being prepared &mdash; it&rsquo;ll be in your client portal and email shortly.</span>';
    return '<div class="rpg-prep" role="status"><b><span class="rpg-spin" aria-hidden="true"></span>Step 1: we&rsquo;re preparing your written estimate</b>' +
      'It lists everything included in your price. It takes about a minute and opens right here; we&rsquo;re also emailing you a copy.' +
      '<div class="rpg-bar" aria-hidden="true"><i id="rpg-prep-bar"></i></div></div>';
  }
  var pdfStartedAt = 0;
  function refreshPdfSlots() {
    var slots = root.querySelectorAll(".rpg-pdf-slot");
    Array.prototype.forEach.call(slots, function (s) { s.innerHTML = pdfButtonHtml(); });
    approveState();
  }
  /* v3.15 (Ryan 2026-11-23): the approve step waits for the written estimate, so the client
     reads it first. It unlocks when the PDF is ready, or after the poll gives up. */
  function approveState() {
    var w = document.getElementById("rpg-approve-wrap"), b = document.getElementById("rpg-accept");
    if (!w || !b) return;
    var ready = !!(pdfUrl || pdfGaveUp);
    w.classList.toggle("rpg-approve-wait", !ready);
    b.disabled = !ready;
    var t = document.getElementById("rpg-approve-lead");
    if (t) t.innerHTML = ready
      ? "Step 2: happy with your estimate? Approve it below &mdash; that&rsquo;s the one step that gets you on our schedule."
      : "Step 2: once your written estimate is ready, read it through, then approve it here.";
  }
  (function tickPrepBar() {
    setInterval(function () {
      var bar = document.getElementById("rpg-prep-bar");
      if (!bar || !pdfStartedAt) return;
      var pct = Math.min(95, 5 + (Date.now() - pdfStartedAt) / 600);   /* about 90% at 50 seconds */
      bar.style.width = pct + "%";
    }, 1000);
  })();
  function startPdfPoll() {
    if (!pdfStartedAt) pdfStartedAt = Date.now();
    if (pdfUrl || pdfGaveUp) { refreshPdfSlots(); return; }
    if (pdfTimer) return;
    if (C.TEST_MODE || !C.PDF_STATUS_WEBHOOK_URL || (C.PDF_STATUS_WEBHOOK_URL || "").indexOf("REPLACE") === 0) {
      pdfTimer = setTimeout(function () {
        pdfTimer = null; pdfUrl = "MOCK"; portalUrl = "MOCK";
        if (window.rpConsole) window.rpConsole("MOCK", "Estimate PDF + client portal ready (simulated after 3s)");
        refreshPdfSlots();
      }, 3000);
      return;
    }
    var tries = 0;
    (function poll() {
      if (tries++ >= 30) { pdfGaveUp = true; pdfTimer = null; refreshPdfSlots(); return; }
      fetch(C.PDF_STATUS_WEBHOOK_URL + "?project_id=" + encodeURIComponent(state.projectId))
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (d && d.pdf_url) {
            pdfUrl = d.pdf_url; portalUrl = d.portal_url || null; pdfTimer = null;
            track("estimate_pdf_ready", { project_id: state.projectId });
            refreshPdfSlots();
          } else { pdfTimer = setTimeout(poll, 5000); }
        })
        .catch(function () { pdfTimer = setTimeout(poll, 5000); });
    })();
  }

  function showQuote(quote, backFn) {
    var total = Math.round(quote.grand_total);
    var deposit = Math.round(total * DEPOSIT_PCT);
    var prod = quote.production || {};
    var days = prod.duration_days || 0;
    var dLo = Math.max(1, Math.floor(days * 0.6));
    var dHi = Math.max(dLo + 1, Math.ceil(days * 1.6));
    var prodLine = days > 0 ? "Estimated " + dLo + "&ndash;" + dHi + " days on site" : "";
    track("instant_quote_shown", { total: total, project_id: state.projectId });
    state.quoteShown = true; clearDraft();
    h('<div class="rpg-panel">' +
      '<div class="rpg-check">&#10003;</div>' +
      '<div class="rpg-q" style="margin-top:0;text-align:center">Your price</div>' +
      '<div class="rpg-price" style="text-align:center">' + money(total) + "</div>" +
      (quote.promo_discount ? '<p style="text-align:center;color:#1d5f2f;font-size:.92rem;font-weight:600">Promo code ' + esc(quote.promo_code) + ' applied &mdash; ' + quote.promo_pct + '% off (&minus;' + money(quote.promo_discount) + ')</p>' : "") +
      (prodLine ? '<p style="text-align:center;color:#555;font-size:.92rem">' + prodLine + "</p>" : "") +
      (state.rush ? '<p style="text-align:center;color:#b3261e;font-size:.9rem;font-weight:600">Rush project &mdash; priority scheduling included; we aim to complete within the week (subject to confirmation).</p>' : "") +
      '<p style="text-align:center;color:#666;font-size:.8rem">Quote ' + state.projectId + " &middot; " + esc(state.address.street + ", " + state.address.city) + "</p>" +
      '<p style="text-align:center;color:#666;font-size:.78rem">Fully insured &middot; MA HIC Reg. #211554 &middot; 4.8&#9733; on Google (50+ reviews)</p>' +
      
      '<div class="rpg-pdf-slot" style="text-align:center;margin:12px 0">' + pdfButtonHtml() + "</div>" +
      '<details class="rpg-bd"><summary>What&rsquo;s included</summary>' + scopeRecapHtml() + "</details>" +
      '<div id="rpg-approve-wrap" class="rpg-approve-wait">' +
      '<p id="rpg-approve-lead" style="text-align:center;font-weight:600;margin:14px 0 4px">Step 2: once your written estimate is ready, read it through, then approve it here.</p>' +
      '<div style="text-align:center"><button class="rpg-cta" id="rpg-accept" disabled>Approve My Estimate</button></div>' +
      '</div>' +
      '<div class="rpg-note" style="text-align:center">Approving doesn&rsquo;t charge you anything. Our team gives your scope a quick review (typically within a few business hours), then your contract and ' + Math.round(DEPOSIT_PCT * 100) + '% deposit invoice (' + money(deposit) + ') arrive by email through our secure client portal &mdash; sign and pay there to lock your price and reserve your dates. Full terms: <a href="' + (C.TERMS_URL || "/terms") + '" target="_blank" rel="noopener">ryanpaintingco.com' + (C.TERMS_URL || "/terms") + '</a>. Questions? Call ' + C.PHONE_DISPLAY + ".</div>" +
      '<div style="text-align:center"><button type="button" class="rpg-back">&larr; edit my project</button></div>' +
      "</div><div id='rpg-terms'></div>");
    backHandler = backFn;
    startPdfPoll();
    approveState();
    document.getElementById("rpg-accept").onclick = function () {
      if (!(pdfUrl || pdfGaveUp)) return;
      track("instant_quote_accept_clicked", { total: total, project_id: state.projectId });
      termsModal(total, deposit);
    };
  }

  /* ============ TERMS → ACCEPTANCE ============ */
  function termsModal(total, deposit) {
    /* PRJ- estimates were prepared by Ryan from a walkthrough, not self-quoted, so the
       terms must not talk about "the scope you entered" or a pending scope review */
    var isWQ = /^PRJ-/.test(String(state.projectId || ""));
    var wrap = document.getElementById("rpg-terms");
    wrap.innerHTML = '<div class="rpg-panel" id="rpg-terms-panel">' +
      '<div class="rpg-q" style="margin-top:0">Before you approve &mdash; the short version of our terms</div>' +
      '<div tabindex="0" role="region" aria-label="Summary of terms" style="max-height:260px;overflow-y:auto;font-size:.88rem;color:#444;border:1px solid #eee;border-radius:8px;padding:12px 14px">' +
      '<ul style="margin:0;padding-left:18px">' +
      '<li>Your price is held for 30 days; it locks in fully when your deposit is paid.</li>' +
      (isWQ
        ? '<li>Your price is based on the scope we reviewed at your walkthrough. If the project changes (sizes, surfaces, repairs), we&rsquo;ll confirm any changes with you before extra work or charges.</li>' +
          '<li>Your contract and a ' + Math.round(DEPOSIT_PCT * 100) + '% deposit invoice (' + money(deposit) + ') arrive by email shortly after you approve; paying the deposit reserves your project, and any remaining balance follows the payment schedule in your contract.</li>'
        : '<li>Your price is based on the scope you entered. If conditions on-site are materially different (sizes, surfaces, repairs), we&rsquo;ll confirm any changes with you before extra work or charges.</li>' +
          '<li>After our team reviews your scope, your contract and a ' + Math.round(DEPOSIT_PCT * 100) + '% deposit invoice (' + money(deposit) + ') arrive by email; paying the deposit reserves your project and the final payment is due when the work is complete. Once your deposit is paid and your Color &amp; Access Form is in, we email you a proposed start date to confirm.</li>') +
      '<li>Standard prep is included. Not included unless listed: heavy wall repairs, wallpaper removal, extra coats or colors beyond ' + (isWQ ? 'the agreed scope' : 'your selections') + ', specialty priming over dark/oil-based surfaces.</li>' +
      '<li>Pre-1978 homes: we follow EPA lead-safe practices; this can require a scope confirmation before work begins.</li>' +
      '<li>Exterior work is weather-dependent; we reschedule weather delays at no cost.</li>' +
      '<li>Cancel within 5 business days of booking for a full deposit refund.</li>' +
      '<li>Massachusetts law governs. Full terms: <a href="' + (C.TERMS_URL || "/terms") + '" target="_blank" rel="noopener">ryanpaintingco.com terms</a>.</li>' +
      "</ul></div>" +
      '<label class="rpg-chk" style="margin-top:12px"><input type="checkbox" id="rpg-agree"> I agree to these terms</label>' +
      '<div class="rpg-err" id="rpg-agree-err">Please tick the box to continue.</div>' +
      '<button class="rpg-cta" id="rpg-accept-final">Approve My Estimate</button>' +
      "</div>";
    wrap.scrollIntoView(scrollOpts());
    a11y();
    try { var termsHd = wrap.querySelector(".rpg-q"); if (termsHd) termsHd.focus({ preventScroll: true }); } catch (e) {}
    document.getElementById("rpg-accept-final").onclick = function () {
      if (!document.getElementById("rpg-agree").checked) {
        document.getElementById("rpg-agree-err").style.display = "block";
        document.getElementById("rpg-agree").focus(); return;
      }
      track("proposal_accepted", { total: total, deposit: deposit, project_id: state.projectId });
      sendAcceptance(total, deposit);
    };
  }

  function sendAcceptance(total, deposit) {
    var panel = document.getElementById("rpg-terms-panel");
    /* lock the quote screen above: no edits, no double-accepts */
    backHandler = null;
    var topBtn = document.getElementById("rpg-accept");
    if (topBtn) { topBtn.disabled = true; topBtn.textContent = "Estimate approved"; topBtn.style.opacity = "0.6"; }
    var backBtns = root.querySelectorAll(".rpg-back");
    Array.prototype.forEach.call(backBtns, function (b) { b.style.display = "none"; });
    /* a11y: the approve button is now disabled, so focus would be lost; move it to the result heading */
    function doneFocus() { try { a11y(); var dh = panel.querySelector(".rpg-q"); if (dh) dh.focus({ preventScroll: true }); } catch (e) {} }
    function doneHtml(extraNote) {
      /* a PRJ- estimate was already reviewed and priced by Ryan at the walkthrough —
         there is no scope-review step; the contract dispatches automatically on accept */
      var isWQ = /^PRJ-/.test(String(state.projectId || ""));
      return '<div class="rpg-check">&#10003;</div>' +
        '<div class="rpg-q" style="margin-top:0;text-align:center">Estimate approved &mdash; you&rsquo;re almost booked</div>' +
        '<ol style="font-size:.95rem;line-height:1.7">' +
        (isWQ
          ? '<li>Your <strong>contract</strong> and <strong>' + money(deposit) + ' deposit invoice</strong> are on their way &mdash; they arrive by email through our secure client portal, usually within the hour. Your estimate will be waiting in there too.</li>'
          : '<li>Our team double-checks your scope and photos <strong>(typically within a few business hours, always within 1 business day)</strong>.</li>' +
            '<li>Your <strong>contract</strong> and <strong>' + money(deposit) + ' deposit invoice</strong> arrive by email through our secure client portal &mdash; your estimate will be waiting in there too.</li>') +
        '<li>Sign and pay the deposit in the portal &mdash; that locks your ' + money(total) + ' price for 30 days and reserves your start window.</li>' +
        '<li><strong>Start thinking colors.</strong> Your start date is confirmed once your color selections are submitted &mdash; you&rsquo;ll find a <strong>Color Selection</strong> page in your client portal, already set up for the surfaces in your quote, and you can start any time. We&rsquo;re happy to help you choose.</li>' +
        "</ol>" +
        '<div class="rpg-pdf-slot" style="text-align:center;margin:12px 0">' + pdfButtonHtml() + "</div>" +
        '<div class="rpg-note" style="text-align:center">Nothing has been charged.' + (extraNote || "") + " Questions in the meantime? Call " + C.PHONE_DISPLAY + ".</div>" +
        siblingOfferHtml("Want to go ahead with");
    }
    if (C.TEST_MODE || !C.ACCEPT_WEBHOOK_URL || (C.ACCEPT_WEBHOOK_URL || "").indexOf("REPLACE") === 0) {
      if (window.rpConsole) window.rpConsole("MOCK", "Would POST acceptance to accept webhook: total " + money(total) + ", deposit " + money(deposit));
      panel.innerHTML = doneHtml(); doneFocus(); startPdfPoll(); return;
    }
    panel.innerHTML = '<p style="text-align:center;color:#555">Recording your acceptance&hellip;</p>';
    fetch(C.ACCEPT_WEBHOOK_URL, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project_id: state.projectId, amount_total: total, amount_deposit: deposit,
        name: state.contact.name, email: state.contact.email, phone: state.contact.phone,
        address: state.address, type: state.type, scope: scopeSummary(),
        rush: !!state.rush,
        promo_code: state.promo ? state.promo.code : "",
        materials_total: state.quote ? Math.round(state.quote.materials_total || 0) : 0,
        duration_days: state.quote && state.quote.production ? state.quote.production.duration_days || 0 : 0
      })
    }).then(function (r) { return r.json(); }).then(function () {
      panel.innerHTML = doneHtml(); doneFocus(); startPdfPoll();
    }).catch(function () {
      panel.innerHTML = doneHtml(" If you don&rsquo;t hear from us within 1 business day, call us &mdash; we may not have received your acceptance.");
      doneFocus(); startPdfPoll();
    });
  }

  /* ============ WALKTHROUGH + DAY ============ */
  function routeWalkthrough(title, sub, backFn) {
    h('<div class="rpg-q">' + title + "</div><p>" + sub + "</p><div id='rpg-meet'></div>" +
      (backFn ? '<button type="button" class="rpg-back">&larr; back</button>' : ""));
    backHandler = backFn || null;
    mountMeetings(C.WALKTHROUGH_MEETING_URL, "rpg-meet", "Walkthrough scheduler");
  }

  function routeDay(fromQuote, backFn) {
    track("painter_day_viewed", { from_quote: !!fromQuote });
    var intro = fromQuote
      ? '<p>Good news &mdash; a project your size fits our <strong>Painter for a Day</strong> service perfectly: a professional Ryan Painting painter, for a full day, at your place. No estimate needed.</p>'
      : '<p>For touch-ups, small repairs, ceilings-only refreshes, and short lists of items (a door, some shutters, a stretch of trim), skip the estimate entirely: a professional Ryan Painting painter, for a full day, at your place.</p>';
    h('<div class="rpg-panel">' +
      '<div class="rpg-q" style="margin-top:0">Hire a Painter for a Day</div>' +
      intro +
      '<div class="rpg-price">$' + (C.PAINTER_DAY_PRICE || 850).toLocaleString() + ' <span style="font-size:1rem;font-weight:400">flat</span></div>' +
      '<ul style="text-align:left">' +
      '<li>One professional painter, one full working day</li>' +
      '<li>Perfect for touch-ups, small repairs, doors &amp; trim</li>' +
      '<li>Materials not included &mdash; we&rsquo;ll confirm what&rsquo;s needed before your day</li>' +
      '<li>30% deposit secures your date; balance after the work</li>' +
      "</ul>" +
      '<button class="rpg-cta" id="rpg-day-book">Pick my date</button>' +
      '<div class="rpg-note">Larger project after all? Call us at ' + C.PHONE_DISPLAY + ' or <a href="#" id="rpg-day-switch">answer a few questions instead</a>.</div>' +
      '<button type="button" class="rpg-back">&larr; back</button>' +
      "</div><div id='rpg-meet'></div>");
    backHandler = backFn || q1;
    document.getElementById("rpg-day-switch").onclick = function (ev) { ev.preventDefault(); state.type = null; q1(); };
    document.getElementById("rpg-day-book").onclick = function () {
      track("painter_day_booking_started", {});
      this.style.display = "none";
      mountMeetings(C.PAINTER_DAY_MEETING_URL, "rpg-meet", "Painter-for-a-Day scheduler");
    };
  }

  /* ============ IO ============ */
  function mountMeetings(url, containerId, label) {
    var cEl = document.getElementById(containerId);
    if (C.TEST_MODE || !url || url.indexOf("REPLACE") === 0) {
      if (window.rpConsole) window.rpConsole("MOCK", "Would mount HubSpot scheduler: " + (label || url));
      cEl.innerHTML = '<div class="mock-embed">&#128197; ' + esc(label || "Scheduler") + " loads here on the live page<br><small>(embeds are simulated in this preview)</small></div>";
      return;
    }
    cEl.innerHTML = '<div class="meetings-iframe-container" data-src="' + url + (url.indexOf("?") > -1 ? "&" : "?") + 'embed=true"></div>';
    var s = document.createElement("script");
    s.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    cEl.appendChild(s);
  }

  function scopeSummary() {
    var s;
    if (state.size === "rooms") {
      s = state.rooms.map(function (r) {
        var t = TRIM_OPTS.filter(function (o) { return r[o[0]]; }).map(function (o) { return o[1]; }).join("+");
        var st = (r.type_label === STAIR_TYPE && r.steps > 0)
          ? " [" + r.steps + " steps: " + (STAIR_TRIM.filter(function (t) { return r[t[0]]; })
              .map(function (t) { return t[2]; }).join("+") || "walls only") + "]" : "";
        return roomTitle(r) + st + (r.walls_included === false ? " NO WALLS" : "") + (r.ceiling_included ? "+ceiling" : "") + " (" + r.doors + "d/" + r.windows + "w" +
          (t ? "/" + t : "") + (r.closet !== "not_included" ? "/" + r.closet + " closet" + (r.closet_shelves ? "+shelves" : "") : "") + ")" +
          (roomCond(r) === "Superior" ? " REPAIRS" : "") + (r.notes ? " NOTES: " + r.notes : "");
      }).join("; ") + "; condition: " + projectCondition();
    } else {
      s = JSON.stringify(state.ext);
    }
    return s + (state.rush ? "; RUSH — needed within a week (+30% premium applied)" : "") +
      (state.promo ? "; PROMO " + state.promo.code + " (" + state.promo.pct + "% off applied)" : "");
  }

  /* One submission: HubSpot form (contact/lead) + project webhook (Drive folder + images) */
  function submitProject(tag) {
    var lead = {
      firstname: state.contact.name.split(" ")[0],
      lastname: state.contact.name.split(" ").slice(1).join(" "),
      email: state.contact.email, phone: state.contact.phone,
      message: tag + " — " + state.projectId + " — " + state.address.street + ", " + state.address.city + " " + state.address.zip +
               " — type: " + state.type + "; scope: " + scopeSummary()
    };
    /* an operator edit is not a new lead — never re-submit the HubSpot form for one */
    if (operator.on) {
      if (window.rpConsole) window.rpConsole("OPERATOR", "Skipped HubSpot lead form submit");
    } else if (C.TEST_MODE || !C.HUBSPOT_PORTAL_ID || C.HUBSPOT_PORTAL_ID.indexOf("REPLACE") === 0) {
      if (window.rpConsole) window.rpConsole("MOCK", "HubSpot form submit: " + JSON.stringify(lead));
    } else {
      try {
        fetch("https://api.hsforms.com/submissions/v3/integration/submit/" + C.HUBSPOT_PORTAL_ID + "/" + C.HUBSPOT_QUOTE_FORM_GUID, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: Object.keys(lead).map(function (k) { return { name: k, value: lead[k] }; }),
            context: { pageUri: location.href, pageName: document.title }
          })
        });
      } catch (e) {}
    }
    var imgs = state.images;
    if (state.size === "rooms") {
      imgs = [];
      state.rooms.forEach(function (r, i) {
        (r.images || []).forEach(function (im) { imgs.push({ name: "room" + (i + 1) + "-" + im.name, data: im.data }); });
      });
    }
    var proj = {
      project_id: state.projectId, tag: tag, rush: !!state.rush,
      contact: state.contact, address: state.address, type: state.type, size: state.size,
      scope: scopeSummary(),
      quote_total: state.quote ? Math.round(state.quote.grand_total) : null,
      /* agent attribution: IQ1 looks the code up in the registry and stamps
         referring_agent + source "Agent Referral" on the HubSpot deal */
      promo_code: state.promo ? state.promo.code : "",
      promo_pct: state.promo ? state.promo.pct : 0,
      promo_discount: (state.quote && state.quote.promo_discount) || 0,
      materials_total: state.quote ? Math.round(state.quote.materials_total || 0) : 0,
      duration_days: state.quote && state.quote.production ? state.quote.production.duration_days || 0 : 0,
      recap_html: state.quote ? scopeRecapHtml() : "",
      condition: state.size === "rooms" ? projectCondition() : state.condition,
      rooms_detail: state.size === "rooms" ? state.rooms.map(function (r) {
        return { type: r.type_label, size: r.room_size, dims: dimsFor(r.type_label, r.room_size),
          walls: r.walls_included !== false, ceiling: !!r.ceiling_included, closet: r.closet, closet_shelves: !!r.closet_shelves, condition: roomCond(r),
          doors: r.doors, windows: r.windows, baseframes: !!r.baseframes, crown: !!r.crown,
          wainscot: !!r.wainscot, chairrail: !!r.chairrail, notes: r.notes || "",
          steps: r.steps || 0, stair_risers: !!r.stair_risers,
          stair_handrail: !!r.stair_handrail, stair_spindles: !!r.stair_spindles };
      }) : [],
      images: imgs,
      estimate: estimateData(),
      /* operator edits: the key is checked server-side, and notify_client:false lets Ryan
         correct the record (estimate PDF, scope brief, deal amount) without emailing */
      operator_key: operator.on ? operator.key : "",
      notify_client: operator.on ? !!operator.notify : true
    };
    if (C.TEST_MODE || !C.SUBMISSION_WEBHOOK_URL || (C.SUBMISSION_WEBHOOK_URL || "").indexOf("REPLACE") === 0) {
      if (window.rpConsole) window.rpConsole("MOCK", "Drive webhook: folder '" + state.address.street + " — " + state.projectId + "', " + state.images.length + " image(s)");
      return;
    }
    sendIntake(proj);
  }

  /* Checked intake upload. n8n answers 200 the moment it receives the quote; anything
     else (an oversize body is refused with a 500, or the network drops) used to lose
     the quote silently while the client still saw their price. Now: keep the photos
     under a safe total, retry once without photos, and email both owners either way. */
  var INTAKE_SAFE_CHARS = 12 * 1024 * 1024;   // n8n Cloud refuses bodies over ~16MB
  /* Re-shrink stored photos (2026-11-23): 18 photos at 1600px can pass the budget, so
     before any photo is dropped they are re-encoded smaller (1280px, then 1024px). */
  function recompressPhotos(list, px, q, done) {
    var out = [], i = 0;
    (function next() {
      if (i >= list.length) return done(out);
      var it = list[i++];
      if (!it || !it.data || String(it.data).indexOf("data:image") !== 0) { out.push(it); return next(); }
      var img = new Image();
      img.onerror = function () { out.push(it); next(); };
      img.onload = function () {
        try {
          var k = Math.min(1, px / Math.max(img.naturalWidth, img.naturalHeight));
          var cv = document.createElement("canvas");
          cv.width = Math.max(1, Math.round(img.naturalWidth * k)); cv.height = Math.max(1, Math.round(img.naturalHeight * k));
          var g = cv.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, cv.width, cv.height);
          g.drawImage(img, 0, 0, cv.width, cv.height);
          var small = cv.toDataURL("image/jpeg", q);
          out.push(small.indexOf("data:image/jpeg") === 0 && small.length < it.data.length ? { name: it.name, data: small } : it);
        } catch (e) { out.push(it); }
        next();
      };
      img.src = it.data;
    })();
  }
  function sendIntake(proj) {
    var steps = [[1280, 0.7], [1024, 0.62]];
    (function fit() {
      if (JSON.stringify(proj).length <= INTAKE_SAFE_CHARS || !(proj.images || []).length || !steps.length) return sendIntakeNow(proj);
      var st = steps.shift();
      recompressPhotos(proj.images, st[0], st[1], function (imgs) { proj.images = imgs; fit(); });
    })();
  }
  function sendIntakeNow(proj) {
    var photoCount = (proj.images || []).length;
    var body = JSON.stringify(proj);
    while (body.length > INTAKE_SAFE_CHARS && proj.images.length) {   // last resort: drop photos from the end until it fits
      proj.images = proj.images.slice(0, -1);
      body = JSON.stringify(proj);
    }
    var trimmed = proj.images.length < photoCount;
    function post(b) {
      return fetch(C.SUBMISSION_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: b })
        .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); });
    }
    function alertOwners(stage, err) {
      if (!C.INTAKE_ALERT_URL) return;
      try {
        fetch(C.INTAKE_ALERT_URL, { method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
          body: JSON.stringify({ stage: stage, project_id: proj.project_id, contact: proj.contact, address: proj.address,
            quote_total: proj.quote_total, scope: proj.scope, photo_count: photoCount, error: String(err || "") }) });
      } catch (e) {}
    }
    post(body).then(function () {
      if (trimmed) alertOwners("photos_dropped", "photos too large; " + proj.images.length + " of " + photoCount + " sent");
    }).catch(function (err1) {
      if (!photoCount) {   // nothing to drop: one plain retry
        return post(body).catch(function (err2) { alertOwners("intake_failed", err2 && err2.message); });
      }
      proj.images = [];
      return post(JSON.stringify(proj)).then(function () {
        alertOwners("photos_dropped", "upload with photos failed (" + (err1 && err1.message) + ")");
      }).catch(function (err2) { alertOwners("intake_failed", err2 && err2.message); });
    });
  }

  /* ============ OPERATOR EDIT (?edit=RPQ-XXXXXX-XXXX&k=KEY) ============
     Ryan's route for fixing a quote after the fact: pull the stored scope back into the
     room builder, correct it, and push it through the ordinary revision chain. */
  function operatorFetch(pid, key, ok, fail) {
    if (C.TEST_MODE || !C.PDF_STATUS_WEBHOOK_URL || (C.PDF_STATUS_WEBHOOK_URL || "").indexOf("REPLACE") === 0) {
      setTimeout(function () {
        ok({ total: 2960, status: "INSTANT QUOTE $2,960", revision: 1, street: "12 Sample St", city: "Boston", zip: "02130",
          name: "Sample Client", email: "sample@example.com", phone: "6175551234", type: "interior", size: "rooms",
          scope: "Medium Bedroom+ceiling (1d/2w)", scope_json: JSON.stringify({ condition: "Standard", rush: false, rooms: [
            { type: "Bedroom", size: "Medium", ceiling: true, closet: "not_included", doors: 1, windows: 2,
              baseframes: true, crown: false, wainscot: false, chairrail: false, notes: "" }] }) });
      }, 500);
      return;
    }
    fetch(C.PDF_STATUS_WEBHOOK_URL + "?project_id=" + encodeURIComponent(pid) + "&k=" + encodeURIComponent(key))
      .then(function (r) { return r.json(); })
      .then(function (d) { if (d && d.scope_json !== undefined) ok(d); else fail(d && d.total ? "key" : "notfound"); })
      .catch(function () { fail("network"); });
  }

  /* rebuild the room-builder state from what the log stored for this quote */
  function hydrateRooms(scopeJson) {
    var parsed;
    try { parsed = typeof scopeJson === "string" ? JSON.parse(scopeJson) : scopeJson; } catch (e) { parsed = null; }
    if (!parsed) return false;
    state.condition = parsed.condition || "Standard";
    state.rush = !!parsed.rush;
    state.rooms = (parsed.rooms || []).map(function (r) {
      return { type_label: r.type || "Room", room_size: r.size || "Medium", walls_included: r.walls !== false, ceiling_included: !!r.ceiling,
        doors: Number(r.doors) || 0, windows: Number(r.windows) || 0, closet: r.closet || "not_included",
        closet_shelves: !!r.closet_shelves, condition: r.condition || parsed.condition || "Standard",
        notes: r.notes || "", images: [], photos_on_file: true,
        baseframes: !!r.baseframes, crown: !!r.crown, wainscot: !!r.wainscot, chairrail: !!r.chairrail,
        steps: Number(r.steps) || 0, stair_risers: !!r.stair_risers,
        stair_handrail: !!r.stair_handrail, stair_spindles: !!r.stair_spindles };
    });
    return state.rooms.length > 0;
  }

  /* ?edit=1&k=KEY — one bookmarkable URL, type the quote id when you get there */
  function operatorPrompt(key) {
    backHandler = null;
    h('<div class="rpg-panel">' +
      '<div class="rpg-q" style="margin-top:0">Open a quote to edit</div>' +
      '<input class="rpg-field" id="rpg-op-pid" placeholder="RPQ-260805-A1B2" autocapitalize="characters" autocomplete="off">' +
      '<div class="rpg-err" id="rpg-op-pid-err">That doesn&rsquo;t look like a quote ID.</div>' +
      '<button class="rpg-cta" id="rpg-op-open">Open</button></div>');
    document.getElementById("rpg-op-open").onclick = function () {
      var v = document.getElementById("rpg-op-pid").value.trim().toUpperCase();
      if (!/^RPQ-[0-9]{6}-[A-Z0-9]{4}$/.test(v)) { document.getElementById("rpg-op-pid-err").style.display = "block"; return; }
      operatorEdit(v, key);
    };
  }

  function operatorEdit(pid, key) {
    operator.on = true; operator.key = key;
    state.projectId = pid; state.type = "interior"; state.size = "rooms";
    backHandler = null;
    h('<div class="rpg-q">Opening ' + esc(pid) + "&hellip;</div>");
    operatorFetch(pid, key, function (d) {
      operator.status = String(d.status || "");
      operator.priorTotal = Math.round(Number(d.total) || 0);
      operator.revision = Number(d.revision) || 1;
      operator.priorScope = String(d.scope || "");
      state.contact = { name: d.name || "", email: d.email || "", phone: d.phone || "" };
      state.address = { street: d.street || "", city: d.city || "", zip: String(d.zip || "") };
      if (d.type) state.type = d.type;
      if (d.size) state.size = d.size;
      /* the editor is the interior room builder — a deck or exterior-item quote would be
         re-priced by the wrong half of the engine, so refuse it rather than guess */
      if (state.size !== "rooms" || state.type !== "interior") {
        operator.on = false;
        h('<div class="rpg-panel"><div class="rpg-q" style="margin-top:0">Not editable here</div>' +
          "<p>" + esc(state.projectId) + " is a " + esc(state.type || "non-interior") + " quote (" + esc(state.size || "unknown") +
          "), and this editor only rebuilds interior room scopes. Adjust it on the deal, or re-quote it in the Generator.</p>" +
          '<p style="font-size:.85rem;color:#666">' + esc(operator.priorScope || "") + "</p></div>");
        return;
      }
      operator.hydrated = hydrateRooms(d.scope_json);
      /* keep the client's promo code on a revision (2026-11-23: revisions used to drop it silently) */
      operator.promoCode = String(d.promo_code || "").trim().toUpperCase();
      state.promo = operator.promoCode ? promoLookup(operator.promoCode) : null;
      operatorSummary();
    }, function (why) {
      h('<div class="rpg-panel"><div class="rpg-q" style="margin-top:0">Can&rsquo;t open that quote</div>' +
        "<p>" + (why === "key" ? "The operator key was rejected." : why === "notfound" ? "No quote found with that ID." : "The lookup failed &mdash; check the connection and try again.") + "</p>" +
        '<p style="font-size:.85rem;color:#666">' + esc(pid) + "</p></div>");
    });
  }

  function operatorSummary() {
    operator.override = null;
    backHandler = null;
    var locked = /INVOICED|BOOKED|CONTRACT|DEPOSIT PAID/i.test(operator.status);
    var accepted = /ACCEPTED/i.test(operator.status);
    h('<div class="rpg-panel">' +
      '<div class="rpg-q" style="margin-top:0">Edit quote ' + esc(state.projectId) + "</div>" +
      '<p style="font-size:.92rem;line-height:1.7">' +
      "<strong>" + esc(state.contact.name || "(no name on file)") + "</strong><br>" +
      esc(state.address.street + (state.address.city ? ", " + state.address.city : "")) + "<br>" +
      "Current price: <strong>" + money(operator.priorTotal) + "</strong><br>" +
      "Status: " + esc(operator.status || "unknown") + " &middot; revision " + operator.revision + "</p>" +
      (locked
        ? '<div class="rpg-err" style="display:block">The contract or deposit invoice has already gone out on this one. Editing here regenerates the estimate and the deal amount, but it does <strong>not</strong> touch the contract or invoice in Assembly &mdash; fix those there too.</div>'
        : accepted
          ? '<div class="rpg-note">This quote has been accepted but nothing binding has been sent yet. A revision replaces the estimate and updates the deal amount.</div>'
          : "") +
      (operator.hydrated
        ? '<div class="rpg-note">Scope loaded from the original submission &mdash; ' + state.rooms.length + " room" + (state.rooms.length > 1 ? "s" : "") + ".</div>"
        : '<div class="rpg-err" style="display:block">No structured scope was stored for this quote (it predates scope capture). Rebuild it from what the client sent:<br><span style="color:#444">' + esc(operator.priorScope || "nothing on file") + "</span></div>") +
      '<button class="rpg-cta" id="rpg-op-rooms">Edit the rooms</button>' +
      "</div>");
    document.getElementById("rpg-op-rooms").onclick = function () {
      if (!state.rooms.length) state.rooms = [newRoom()];
      renderRooms();
    };
  }

  function operatorReview() {
    var quote;
    try { quote = computeInterior(); } catch (err) {
      h('<div class="rpg-panel"><div class="rpg-q" style="margin-top:0">Pricing failed</div><p>' + esc(String(err && err.message || err)) + "</p></div>");
      return;
    }
    if (state.rush) quote.grand_total += Math.round(quote.grand_total * ((C.RUSH_MULTIPLIER || 1.3) - 1));
    if (state.promo) {                       /* same order as the client path: promo last */
      quote.promo_code = state.promo.code;
      quote.promo_pct = state.promo.pct;
      quote.promo_discount = Math.round(quote.grand_total * state.promo.pct / 100);
      quote.grand_total -= quote.promo_discount;
    }
    state.quote = quote;
    var engineTotal = Math.round(quote.grand_total);
    var delta = engineTotal - operator.priorTotal;
    backHandler = renderRooms;
    h('<div class="rpg-panel">' +
      '<div class="rpg-q" style="margin-top:0">Review the revision</div>' +
      '<p style="font-size:1rem">Was <s>' + money(operator.priorTotal) + "</s> &nbsp;&rarr;&nbsp; <strong>" + money(engineTotal) + "</strong>" +
      '<span style="color:' + (delta >= 0 ? "#1d5f2f" : "#b3261e") + '"> (' + (delta >= 0 ? "+" : "-") + money(Math.abs(delta)) + ")</span></p>" +
      (state.promo ? '<div class="rpg-note">Promo code ' + esc(state.promo.code) + ' (' + state.promo.pct + '% off) is applied, as on the original quote.</div>'
        : operator.promoCode ? '<div class="rpg-err" style="display:block">The original quote used promo code ' + esc(operator.promoCode) + ', which is no longer in the price sheet, so no discount is applied. Type a price below if you want to honor it.</div>' : '') +
      '<details class="rpg-bd" open><summary>New scope</summary>' + scopeRecapHtml() + "</details>" +
      '<label class="rpg-lbl" style="margin-top:12px">Send a different price instead <span style="font-weight:400">(optional &mdash; leave blank to send ' + money(engineTotal) + ")</span></label>" +
      '<input class="rpg-field rpg-num" id="rpg-op-price" type="number" min="0" step="1" placeholder="' + engineTotal + '">' +
      '<label class="rpg-chk" style="margin-top:10px"><input type="checkbox" id="rpg-op-notify" checked> Email the client their revised estimate</label>' +
      '<div class="rpg-note">Untick the box above to correct the record quietly: the estimate PDF, scope brief, portal copy and deal amount all still update, but no email goes to the client.</div>' +
      '<div class="rpg-err" id="rpg-op-err"></div>' +
      '<button class="rpg-cta" id="rpg-op-send">Send the revision</button><br>' +
      '<button type="button" class="rpg-back">&larr; back to the rooms</button>' +
      "</div>");
    document.getElementById("rpg-op-send").onclick = function () {
      var raw = document.getElementById("rpg-op-price").value.trim();
      if (raw) {
        var v = Math.round(Number(raw));
        if (!isFinite(v) || v <= 0) {
          var e = document.getElementById("rpg-op-err");
          e.textContent = "That price isn't a number."; e.style.display = "block"; return;
        }
        operator.override = v;
        state.quote.grand_total = v;
      }
      operator.notify = document.getElementById("rpg-op-notify").checked;
      operatorSend();
    };
  }

  function operatorSend() {
    var total = Math.round(state.quote.grand_total);
    backHandler = null;
    h('<div class="rpg-panel"><p style="text-align:center;color:#555">Sending the revision&hellip;</p></div>');
    submitProject("INSTANT QUOTE " + money(total));
    setTimeout(function () {
      h('<div class="rpg-panel"><div class="rpg-check">&#10003;</div>' +
        '<div class="rpg-q" style="margin-top:0;text-align:center">Revision sent</div>' +
        '<p style="text-align:center">' + esc(state.projectId) + " is now " + money(total) +
        (operator.override ? " (your price, not the engine's)" : "") + ".</p>" +
        '<ul style="font-size:.92rem;line-height:1.7">' +
        "<li>A new estimate PDF is generated and the previous one moves to Archived Documents in the portal.</li>" +
        "<li>The HubSpot deal amount and the quotes log row are updated.</li>" +
        "<li>" + (operator.notify ? "The client is emailed the revised estimate with the old price struck through." : "<strong>No email was sent to the client.</strong>") + "</li>" +
        "</ul>" +
        '<div style="text-align:center"><button class="rpg-cta" id="rpg-op-again">Back to the quote</button></div></div>');
      document.getElementById("rpg-op-again").onclick = function () { operatorEdit(state.projectId, operator.key); };
    }, 1200);
  }

  /* ============ RESUME ACCEPT (?accept=RPQ-XXXXXX-XXXX in quote emails) ============ */
  function resumeAccept(pid) {
    state.projectId = pid;
    backHandler = null;
    h('<div class="rpg-q">Welcome back</div><p>Looking up your quote&hellip;</p>');
    function fail() {
      h('<div class="rpg-q">Welcome back</div>' +
        '<p>We couldn&rsquo;t find that quote &mdash; it may have expired (quotes are valid for 30 days). It only takes a minute to price it again, or call us at ' + C.PHONE_DISPLAY + ".</p>" +
        '<div style="text-align:center"><button class="rpg-cta" id="rpg-requote">Get a fresh quote</button></div>');
      backHandler = null;
      document.getElementById("rpg-requote").onclick = function () { state.projectId = newProjectId(); q1(); };
    }
    function show(d) {
      var total = Math.round(Number(d.total) || 0);
      if (!total) return fail();
      var deposit = Math.round(Number(d.deposit) || total * DEPOSIT_PCT);
      pdfUrl = d.pdf_url || null; portalUrl = d.portal_url || null; pdfGaveUp = !pdfUrl;
      siblingPid = String(d.sibling_pid || ""); siblingLabel = String(d.sibling_label || "");
      if (d.status && /SUPERSEDED/i.test(String(d.status))) {
        h('<div class="rpg-panel">' +
          '<div class="rpg-q" style="margin-top:0;text-align:center">This estimate was superseded</div>' +
          '<p style="text-align:center">You went ahead with a different estimate for this project &mdash; ' +
          'your approved documents are in your client portal.</p>' +
          '<div class="rpg-pdf-slot" style="text-align:center;margin:12px 0">' + pdfButtonHtml() + "</div>" +
          '<div class="rpg-note" style="text-align:center">Questions? Call ' + C.PHONE_DISPLAY + ".</div></div>");
        return;
      }
      if (d.status && /ACCEPTED|INVOICED|CONTRACT|DEPOSIT PAID|BOOKED/i.test(String(d.status))) {
        h('<div class="rpg-panel"><div class="rpg-check">&#10003;</div>' +
          '<div class="rpg-q" style="margin-top:0;text-align:center">This estimate is already approved</div>' +
          '<p style="text-align:center">Check your email for your contract and deposit invoice &mdash; or find everything in your client portal.</p>' +
          '<div class="rpg-pdf-slot" style="text-align:center;margin:12px 0">' + pdfButtonHtml() + "</div>" +
          siblingOfferHtml("Also considering") +
          '<div class="rpg-note" style="text-align:center">Questions? Call ' + C.PHONE_DISPLAY + ".</div></div>");
        return;
      }
      track("quote_resumed", { project_id: pid });
      h('<div class="rpg-panel">' +
        '<div class="rpg-q" style="margin-top:0;text-align:center">Your estimate for ' + esc(d.street || "your project") + (d.label ? " &mdash; " + esc(d.label) : "") + "</div>" +
        '<div class="rpg-price" style="text-align:center">' + money(total) + "</div>" +
        '<p style="text-align:center;color:#666;font-size:.8rem">Estimate ' + pid + " &middot; this price is held for 30 days from your original visit</p>" +
        '<p style="text-align:center;color:#666;font-size:.78rem">Fully insured &middot; MA HIC Reg. #211554 &middot; 4.8&#9733; on Google (50+ reviews)</p>' +
        
        '<div class="rpg-pdf-slot" style="text-align:center;margin:12px 0">' + pdfButtonHtml() + "</div>" +
        '<div style="text-align:center"><button class="rpg-cta" id="rpg-accept">Approve My Estimate</button></div>' +
        '<div class="rpg-note" style="text-align:center">Approving doesn&rsquo;t charge you anything. ' + (/^PRJ-/.test(pid)
          ? 'Your contract and ' + Math.round(DEPOSIT_PCT * 100) + '% deposit invoice (' + money(deposit) + ') arrive by email through your client portal shortly after you approve &mdash; sign and pay there to lock your price and reserve your dates.'
          : 'Our team reviews your scope (typically within a few business hours), then your contract and ' + Math.round(DEPOSIT_PCT * 100) + '% deposit invoice (' + money(deposit) + ') arrive by email through your client portal.') + ' Full terms: <a href="' + (C.TERMS_URL || "/terms") + '" target="_blank" rel="noopener">ryanpaintingco.com' + (C.TERMS_URL || "/terms") + '</a>. Questions? Call ' + C.PHONE_DISPLAY + ".</div>" +
        siblingOfferHtml("Also considering") +
        "</div><div id='rpg-terms'></div>");
      document.getElementById("rpg-accept").onclick = function () {
        track("instant_quote_accept_clicked", { total: total, project_id: pid, resumed: true });
        termsModal(total, deposit);
      };
    }
    if (C.TEST_MODE || !C.PDF_STATUS_WEBHOOK_URL || (C.PDF_STATUS_WEBHOOK_URL || "").indexOf("REPLACE") === 0) {
      setTimeout(function () { show({ total: 2960, deposit: 888, street: "12 Sample St", pdf_url: "MOCK", portal_url: "MOCK", status: "INSTANT QUOTE $2,960" }); }, 800);
      return;
    }
    fetch(C.PDF_STATUS_WEBHOOK_URL + "?project_id=" + encodeURIComponent(pid) + "&view=1") /* view=1: IQ-pdf counts this open on the HubSpot deal (estimate_views) */
      .then(function (r) { return r.json(); })
      .then(show)
      .catch(fail);
  }

  /* ============ INIT (optionally pull live pricing overrides first) ============ */
  (function init() {
    var started = false;
    var resume = (location.search || "").match(/[?&]accept=(RPQ-[0-9]{6}-[A-Za-z0-9]{4}|PRJ-[0-9]{6}-[0-9]{6})/);
    /* operator edit is instant-quote only: PRJ- (walkthrough) estimates come from the
       Generator, not this engine, so they must never be re-priced here */
    var edit = (location.search || "").match(/[?&]edit=(RPQ-[0-9]{6}-[A-Za-z0-9]{4}|1)(?:&|$)/i);
    var opKey = ((location.search || "").match(/[?&]k=([A-Za-z0-9_-]{8,})/) || [])[1] || "";
    var proposalPage = String(location.pathname || '').toLowerCase().indexOf('proposal') !== -1;
    function start() {
      if (started) return; started = true;
      if (edit && opKey) {
        var target = edit[1].toUpperCase();
        if (target === "1") operatorPrompt(opKey); else operatorEdit(target, opKey);
        return;
      }
      if (resume) { resumeAccept(resume[1].toUpperCase()); return; }
      if (proposalPage) {
        backHandler = null;
        h('<div class="rpg-panel" style="text-align:center">' +
          '<div class="rpg-q" style="margin-top:0">Looking for your proposal?</div>' +
          '<p>This page opens your personal proposal &mdash; use the <strong>Review and accept</strong> button in your estimate email.</p>' +
          '<p>Can&rsquo;t find the email? Call us at ' + C.PHONE_DISPLAY + ' and we&rsquo;ll sort it out.</p>' +
          '<a class="rpg-cta" style="display:inline-block;text-decoration:none" href="/getquote">Price a new project</a>' +
          '</div>');
        return;
      }
      var draft = readDraft();
      if (draft) { offerDraft(draft, q1); return; }
      q1();
    }
    var u = C.PRICING_CONFIG_URL || "";
    if (u.indexOf("http") === 0) {
      setTimeout(start, 2000); /* never hold the tool hostage to the config fetch */
      fetch(u).then(function (r) { return r.json(); }).then(function (j) {
        try {
          if (j && j.gate) {
            var g = j.gate;
            if (+g.MIN_PROJECT > 0) { C.MIN_PROJECT = +g.MIN_PROJECT; MIN_PROJECT = +g.MIN_PROJECT; }
            /* sanity ranges (2026-11-23): a typo in the sheet (30 for 30%) must not reach a client */
            if (+g.DEPOSIT_PERCENT > 0 && +g.DEPOSIT_PERCENT < 1) { C.DEPOSIT_PERCENT = +g.DEPOSIT_PERCENT; DEPOSIT_PCT = +g.DEPOSIT_PERCENT; }
            if (+g.RUSH_MULTIPLIER >= 1 && +g.RUSH_MULTIPLIER <= 3) C.RUSH_MULTIPLIER = +g.RUSH_MULTIPLIER;
            if (+g.PAINTER_DAY_PRICE > 0) C.PAINTER_DAY_PRICE = +g.PAINTER_DAY_PRICE;
            if (+g.TRANSPARENT_DECK_MULTIPLIER > 0) C.TRANSPARENT_DECK_MULTIPLIER = +g.TRANSPARENT_DECK_MULTIPLIER;
            if (+g.DECK_SOLID_MULTIPLIER > 0) C.DECK_SOLID_MULTIPLIER = +g.DECK_SOLID_MULTIPLIER;
            if (+g.requires_walkthrough_min > 0) WALKTHROUGH_CAP = +g.requires_walkthrough_min;
            if (+g.MAX_SQ_ROOMS >= 1) C.MAX_SQ_ROOMS = Math.round(+g.MAX_SQ_ROOMS); /* seasonal room cap — flip in the sheet, no re-paste */
            if (+g.mobilization_hours > 0) PRICING_OPTS.mobilization_hours = +g.mobilization_hours;
            if (+g.crew_wage > 0) PRICING_OPTS.crew_wage = +g.crew_wage;
            if (+g.gross_margin > 0 && +g.gross_margin < 1) PRICING_OPTS.gross_margin = +g.gross_margin;
          }
          /* promo registry: keys normalised to uppercase so entry is case-insensitive */
          if (j && j.promo_codes) {
            PROMO_CODES = {};
            Object.keys(j.promo_codes).forEach(function (pk) {
              PROMO_CODES[String(pk).trim().toUpperCase()] = j.promo_codes[pk];
            });
          }
          if (RPPricing.applyOverrides) RPPricing.applyOverrides(j);
        } catch (e) {}
        start();
      }).catch(start);
    } else start();
  })();
})();

