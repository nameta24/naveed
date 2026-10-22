# Naveed Hussain — Personal Research Website

A responsive, static website built from the supplied research portfolio and CV.

## Contents
- `index.html` — complete single-page website
- `styles.css` — responsive design system and layout
- `script.js` — mobile navigation, project video modal and subtle reveal effects
- `assets/` — genuine images extracted from the supplied `Research_Portfolio_Naveed.pdf`

## Run locally
No build step or package installation is required.

### Option 1: open directly
Open `index.html` in a modern browser. Some browser security settings may limit features when opened as a local file, so a local server is recommended.

### Option 2: run a local server
From this folder, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy
This is a static site and can be deployed to GitHub Pages, Netlify, Vercel (static deployment), Cloudflare Pages or any standard web host. Upload the contents of this folder, keeping the `assets` directory alongside `index.html`.

## Media
The website uses project image assets extracted from the supplied research portfolio. The hero uses `assets/my_pic.jpg` for the portrait; place your photo at that exact path. The site includes a prospective research-directions section for PhD applications, clearly distinguished from completed projects. The Digital Human for Teaching feature links to the user-provided YouTube video https://youtu.be/Jh-LEACsQvk. Other demo links are taken from the supplied portfolio. YouTube and Google Drive videos are loaded only when the visitor opens the video modal.

## Before public launch
- Review all project descriptions for exact technical and factual wording.
- Confirm that the listed certifications and all claims are accurate and that you want them published.
- Confirm that the supplied demo links are public and playable.
- Add a verified downloadable CV file if desired.
- Confirm whether you want the GitHub link to point to this specific repository or to a broader profile.

The private home address and phone number from the pasted CV have intentionally not been published.
