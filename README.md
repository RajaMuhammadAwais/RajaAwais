# Raja Muhammad Awais Portfolio

This is a React portfolio site for Raja Muhammad Awais, deployable to GitHub Pages using Vite and GitHub Actions.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Update `vite.config.js`:
   - Replace `<REPO_NAME>` with your GitHub repository name.

3. To run locally:
   ```bash
   npm run dev
   ```

4. To deploy manually:
   ```bash
   npm run build
   npm run deploy
   ```

## CI/CD

On every push to `main`, GitHub Actions will build and deploy the site to GitHub Pages.
