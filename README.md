# Alexander Krett

A static personal portfolio inspired by the warm paper palette, Chewy headings,
monospaced labels, yellow accents, and outlined panels of the Jev Decision Index.

## Local preview

Run `python3 -m http.server 8000` from this directory and open
http://localhost:8000. No build step or package installation is needed.

## Edit content

- `index.html`: biography, work cards, experience, and links.
- `style.css`: design tokens, layout, and mobile styles.
- `script.js`: accessible project filtering.
- `assets/alexander-krett-resume.pdf`: downloadable resume. This is the original
  supplied PDF, including its contact information.

The page uses Google Fonts with system fallbacks. All content remains available
without JavaScript; project filters require JavaScript.

## GitHub Pages

The origin is `alexander-krett/alexander-krett.github.io`. In that repository's
Settings → Pages, choose **GitHub Actions** as the build and deployment source.
Push to `main`, or run **Deploy static content to Pages** manually from Actions.
The workflow stages only website files and deploys them to Pages.

The expected address is https://alexander-krett.github.io/. Repository settings
and a successful deployment must be confirmed before treating that address as live.

## Design credit

Visual inspiration: https://huggingface.co/spaces/akrett/jev-decision-index.
No Hugging Face mascot artwork or benchmark data is included.
