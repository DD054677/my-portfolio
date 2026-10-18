# Theint Nadi Soe — Portfolio

A personal portfolio built with React, Vite, Tailwind CSS, and Lucide icons.

## Run locally

1. Install Node.js (LTS) if it is not already installed.
2. Open this project folder in VS Code.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Check before submitting

- Confirm that the profile photos and project screenshots in `public/` are the intended files.
- Confirm that `public/cv.pdf` is the correct CV.
- Review the education dates, project descriptions, skill levels, statistics, phone number, email address, and social links for accuracy.
- The contact form opens the visitor's email app with a pre-filled message. It does not send email by itself; the visitor must send it from that app.

## Build for deployment

Run `npm run build`. Vite creates the production site in `dist/`.

For Vercel or Netlify, import the project repository and use:
- Build command: `npm run build`
- Output directory: `dist`
