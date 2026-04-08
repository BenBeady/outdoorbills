# Outdoor Bills — Website

A full redesign of the Outdoor Bills brand website, built as a static GitHub Pages site.

## Live Site

Once deployed: `https://[your-username].github.io/outdoor-bills/`

## How to Deploy to GitHub Pages

1. Create a new repository on GitHub named `outdoor-bills` (or any name you want)
2. Upload `index.html` to the root of that repository
3. Go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch, **/ (root)** folder
6. Click **Save**
7. Your site will be live at `https://[your-username].github.io/outdoor-bills/` within a minute or two

## Adding Your Photos

The site has placeholder sections for photos. To add your own:

### Hero Background
In `index.html`, find `.hero-bg` and add your image:
```css
.hero-bg {
  background-image: url('your-photo.jpg'), linear-gradient(...);
}
```

### Bill's Bio Photo
Find `.statement-img-frame` and replace the placeholder div with:
```html
<img src="bill-photo.jpg" alt="Bill Leroy" style="width:100%;height:100%;object-fit:cover;"/>
```

### Category Cards
Find `.cat-bg-1`, `.cat-bg-2`, `.cat-bg-3` in the CSS and replace the gradient with:
```css
.cat-bg-1 { background-image: url('hats-photo.jpg'); }
```

### Instagram Grid
Find each `.social-cell-placeholder` div and replace with:
```html
<img src="your-instagram-photo.jpg" style="width:100%;height:100%;object-fit:cover;"/>
```

### Product Feature Photo
Find `.feature-img-inner` and replace the placeholder with your hat photo.

### Sandlot Revival Photo
Find `.sandlot-img-ph` and replace with your Sandlot image.

## Linking to Shopify

To connect the "Shop Now" and product buttons to your Shopify store, find all `href="#shop"` instances and replace with your actual Shopify store URL:
```html
href="https://your-store.myshopify.com/collections/all"
```

## Color Palette

| Variable    | Hex       | Used For                  |
|-------------|-----------|---------------------------|
| `--river`   | `#3B5C72` | Steel blue, headings       |
| `--sky`     | `#7EB8D4` | Sky reflection accent      |
| `--moss`    | `#4A6741` | Treeline green, sections   |
| `--khaki`   | `#C4AA7A` | Sand/hat accent color      |
| `--earth`   | `#1E1610` | Deep shadow, dark bg       |
| `--cream`   | `#F0EBE0` | Natural page background    |
| `--sienna`  | `#B5622A` | OB burnt orange, buttons   |

## Fonts Used (Google Fonts — free)

- **Bebas Neue** — display headlines
- **Playfair Display** — italic accent headlines
- **Libre Baskerville** — body serif text
- **DM Sans** — UI labels, buttons, nav
