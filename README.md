# Vishesh Vishwakarma — Resume

A static, single-page HTML/CSS resume.

## Structure

```text
index.html                         # the resume markup
css/                               # compiled, browser-loaded stylesheets
  reset.css
  main.css        (+ .map)         # compiled from scss/main.scss
  media-query.css (+ .map)         # compiled from scss/media-query.scss
scss/                              # SCSS sources
  main.scss
  media-query.scss
vishesh_vishwakarma_resume.pdf     # exported PDF version
```

`index.html` links `css/reset.css`, `css/main.css`, and `css/media-query.css`. The SCSS files are the source of truth for `main.css` and `media-query.css` — edit the SCSS, then recompile.

## View it

It's a plain static page — no build step is required just to view it. Either:

- Open `index.html` directly in a browser, or
- Serve the folder (better for consistent asset paths):

  ```bash
  # Python 3
  python -m http.server 8000

  # or Node
  npx serve .
  ```

  Then open `http://localhost:8000`.

## Edit styles (SCSS → CSS)

Styles live in `scss/`. After changing them, compile to the `css/` files the HTML loads.

Using the Dart Sass CLI (watch the whole folder rather than naming each file):

```bash
# one-off build
sass scss:css

# auto-rebuild while editing
sass --watch scss:css
```

Install Sass if you don't have it:

```bash
npm install -g sass
```

> If you use the VS Code **Live Sass Compiler** extension instead, point its output at the `css/` folder so the existing filenames stay in sync.

## Update the PDF

`vishesh_vishwakarma_resume.pdf` is exported manually: open `index.html` in a browser and **Print → Save as PDF**, then replace the file in the repo root.

## Add a project

Projects live in the `.section.projects` block in `index.html` as `<li>` items. Copy an existing project entry (title `<h4>`, `.desc`, `.tech-stack`, and optional `.labeled-link`) and edit the content.
