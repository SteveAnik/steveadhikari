# Steve A. Adhikari — Portfolio

A static, responsive portfolio site built with HTML, CSS, and JavaScript.

**Live site:** [steveadhikari.com](https://steveadhikari.com) (Cloudflare Pages project `steveadhikari`)

## Project structure

| Path | Description |
|------|-------------|
| `index.html` | Home page |
| `about.html` | About page |
| `photo.html` | Photography gallery |
| `projects.html` | Project cards |
| `css/` | Styles (`style.css` is the live stylesheet) |
| `js/` | Scripts (carousel, contact form, matrix background, etc.) |
| `images/` | Site images and assets |
| `resume/` | Resume PDF linked from the home page |

## Local development

```bash
# Serve locally (Python)
python3 -m http.server 8000
# Open http://127.0.0.1:8000
```

## Deployment (Cloudflare Pages)

Production deploys run automatically when you push to `main`.

1. Connect this repo in [Cloudflare Pages](https://dash.cloudflare.com/) as project **`steveadhikari`**
2. **Production branch:** `main`
3. **Build command:** none — the repo root is served as-is
4. **Custom domain:** `steveadhikari.com`

GitHub status checks report deploy results.

## License

Personal portfolio — all rights reserved.
