# Outdoor Bills — Website

A full multi-page website for Outdoor Bills, built for GitHub Pages.

## Pages Included

| File | Page |
|------|------|
| `index.html` | Homepage |
| `shop.html` | Shop / Products |
| `about.html` | About / Bill's Story |
| `youtube.html` | YouTube Channel |
| `sandlot.html` | Sandlot Revival |
| `contact.html` | Contact + FAQ + Map |
| `style.css` | Shared styles |
| `main.js` | Shared JavaScript |

## Deploy to GitHub Pages (5 minutes)

1. Go to **github.com** and create a new repository named `outdoor-bills`
2. Click **Add file → Upload files**
3. Drag ALL files from this folder into the upload window
4. Click **Commit changes**
5. Go to **Settings → Pages**
6. Under Source: select **Deploy from a branch → main → / (root)**
7. Click **Save**
8. Your site is live at: `https://YOUR-USERNAME.github.io/outdoor-bills/`

## Adding Your Photos

Every section has a placeholder that says "Add Photo Here" or "Upload Photo".

### To replace a placeholder with your own photo:
1. Upload your photo to the repository (same folder as the HTML files)
2. Find the placeholder in the HTML — it will look like this:
```html
<div class="gallery-ph g1">...</div>
```
3. Replace it with:
```html
<img src="your-photo-name.jpg" style="width:100%;height:100%;object-fit:cover;"/>
```

### Hero backgrounds
Find `.hero-scene` or `.about-hero` in the `<style>` block and add your image:
```css
.hero-scene {
  background-image: url('your-hero-photo.jpg'), linear-gradient(...);
  background-size: cover;
  background-position: center;
}
```

## Linking to Your Shopify Store

Find all instances of `href="shop.html"` on product buttons and replace with your Shopify URL:
```
https://your-store.myshopify.com/collections/all
```

## Color Palette

| Color | Hex | Used For |
|-------|-----|----------|
| River | `#3B5C72` | Steel blue, key accents |
| Moss | `#4A6741` | Forest green, Sandlot bg |
| Khaki | `#C4AA7A` | Warm sand, italic highlights |
| Earth | `#1A1209` | Deep dark backgrounds |
| Sienna | `#B5622A` | OB orange, buttons, CTAs |
| Cream | `#F0EBE0` | Light page backgrounds |

## Fonts (Google Fonts, free)
- **Bebas Neue** — all major headlines
- **Playfair Display** — italic accent text
- **Libre Baskerville** — body copy
- **DM Sans** — UI, labels, nav
