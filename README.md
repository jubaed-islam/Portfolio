# Jubaed Islam — Academic Portfolio

Personal research portfolio of **Jubaed Islam**, Undergraduate Researcher in Urban & Regional Planning at CUET, Bangladesh (GIS · Remote Sensing · Disaster Risk · Urban Resilience).

🔗 **Live:** https://jubaed-islam.github.io/Portfolio/

Static site (HTML + CSS + vanilla JS), no build step, works on GitHub Pages. It includes light and dark mode, a responsive mobile layout, filterable projects and publications, and SEO/Open Graph tags.

## Structure
```
index.html     page layout
style.css      design (colours at the top in :root)
script.js      ALL content — edit the lists at the top
assets/
  profile.jpg  portrait
  cv.pdf       CV
  projects/    (optional) map images for projects
  certificates/(optional) certificate images / PDFs
```

## Updating content (only `script.js`)
| What | List | Notes |
|---|---|---|
| Social links | `links` | Leave `u:""` to hide (e.g. Google Scholar, ResearchGate) |
| Publications | `pubs` | Add `authors`, `doi`. Status: `Published` / `Accepted` / `Under review` |
| Projects | `projects` | Add `img:"assets/projects/x.jpg"` to replace the generated map graphic |
| Skills | `skills` | Grouped cards |
| Education | `education` | |
| Certificates | `certs` | Section appears automatically once the list has an entry |
| Awards | `awards` | Section appears automatically once the list has an entry |

The stats in the hero (outputs, accepted, projects, study areas) are calculated automatically.

## Deploy / update
1. Replace the files in the `Portfolio` repo with these (keep `assets/`).
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `root`.
3. The site redeploys automatically within 1–2 minutes of every commit.

© Jubaed Islam
