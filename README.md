# hardymusic.co.uk

Personal site for astrophysics and music. Plain HTML/CSS/JS with no build step: everything in `site/` is published as-is to the `gh-pages` branch by `.github/workflows/deploy.yml` on every push to `main`.

```
site/
  index.html        the whole site (single page)
  404.html
  css/style.css
  js/main.js        nav state, mobile menu, gallery lightbox
  img/              web-sized photos (EXIF stripped)
  placeholder.pdf   CV, linked from the nav and contact section
```

Preview locally by opening `site/index.html` in a browser.

## Branches

- `main`: the live site
- `maintenance`: the "Under Maintenance" holding page
- `old-site`: the previous Jekyll (al-folio) site
