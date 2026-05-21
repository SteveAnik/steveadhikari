# Steve A. Adhikari — Portfolio

A static, responsive portfolio site built with HTML, CSS, and JavaScript.

**Live site:** [steveadhikari.pages.dev](https://steveadhikari.pages.dev) (Cloudflare Pages)

## Project structure

| Path | Description |
|------|-------------|
| `index.html` | Home page |
| `about.html` | About page |
| `photo.html` | Photography gallery |
| `projects.html` | Project cards |
| `css/` | Styles (`style.scss` source, `style.css` compiled) |
| `js/` | Scripts (carousel, contact form, matrix background, etc.) |
| `images/` | Site images and assets |
| `wrangler.jsonc` | Cloudflare Workers static deploy config (optional) |
| `package.json` | Build script that copies static files into `dist/` |

## Local development

```bash
# Serve locally (Python)
python3 -m http.server 8000
# Open http://127.0.0.1:8000
```

Or build the `dist/` folder (used by Cloudflare Workers deploy):

```bash
npm run build
```

## Deployment (Cloudflare Pages)

Production deploys run automatically when you push to `main`.

1. Connect this repo in [Cloudflare Pages](https://dash.cloudflare.com/) as project **`steveadhikari`**
2. **Production branch:** `main`
3. **Build command:** leave empty, or `npm run build` with **Build output directory** `/` (or `dist` if using the npm build)
4. Custom domain (optional): add `steveadhikari.com` in Pages → Custom domains

GitHub status checks report deploy results for connected Cloudflare projects.

## Optional: Cloudflare Workers

`wrangler.jsonc` configures a Workers static asset deploy (`npm run build` → `dist/`). This is separate from the primary Pages project; only needed if you use the **website** Workers service.

## License

Personal portfolio — all rights reserved.
