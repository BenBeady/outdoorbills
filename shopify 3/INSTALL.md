# Outdoor Bills — Shopify Files v3
# Matches the HTML preview EXACTLY

## FILES
assets/ob-theme.css  |  assets/ob-theme.js
sections/ob-floating-header.liquid
sections/ob-hero.liquid
sections/ob-featured-split.liquid
sections/ob-best-sellers.liquid
sections/ob-about-strip.liquid
sections/ob-social-grid.liquid
sections/ob-youtube-banner.liquid
sections/ob-newsletter.liquid
sections/ob-floating-footer.liquid

---
## INSTALL STEPS

### 1. Backup
Themes → Actions → Duplicate

### 2. Upload Assets
Edit Code → assets → Add new asset → upload ob-theme.css then ob-theme.js

### 3. Link in theme.liquid
Above </head>:
  {{ 'ob-theme.css' | asset_url | stylesheet_tag }}
Above </body>:
  <script src="{{ 'ob-theme.js' | asset_url }}" defer></script>

### 4. Upload all 9 section .liquid files
Edit Code → sections → Add new section → name it (e.g. ob-hero) → paste contents → Save

### 5. Add floating header + footer to EVERY page
In layout/theme.liquid:
  Right after <body>:    {% section 'ob-floating-header' %}
  Right before </body>:  {% section 'ob-floating-footer' %}

To hide your original header/footer, add to ob-theme.css:
  #shopify-section-header { display: none; }
  #shopify-section-footer { display: none; }
(adjust selector to match your theme if needed)

### 6. Build homepage
Themes → Customize → Home page → Add section, add in order:
  OB Hero → OB Featured Split → OB Best Sellers → OB About Strip
  → OB Social Grid → OB YouTube / Video → OB Newsletter

### 7. Add your video
Shopify Admin → Content → Files → Upload your .mp4
Copy the URL → paste into "Video File URL" in OB YouTube section settings

---
## COLORS (edit in ob-theme.css :root)
--ob-river: #3B5C72   steel blue headings
--ob-moss: #4A6741    green newsletter bg
--ob-khaki: #C4AA7A   tan accents
--ob-sienna: #B5622A  orange buttons/logo
--ob-cream: #F0EBE0   page background
--ob-earth: #2A1F14   dark footer
