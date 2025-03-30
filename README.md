# Personal Portfolio

A minimal, responsive portfolio website built using vanilla JavaScript, HTML, CSS, and Tailwind. It automatically fetches GitHub repositories and displays them with useful data such as language, star count, fork count, and commit history. The site also includes visual and interactive enhancements like particle effects and an animated neko (cat).

🔗 **Live site:** [https://boradag.com](https://boradag.com)

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Tailwind CSS (via CDN)
- JavaScript (ES6+)
- GitHub REST API

---

## 📁 Project Sections
The website is divided into multiple key sections that are both functional and informative:

- **Hero Section**: Includes your name, a profile image, a short introduction, and contact information.
- **Education**: Lists your academic journey with institution names, programs, and years attended.
- **Skills**: Highlights technologies you're familiar with, displayed as icons in a responsive grid.
- **Projects (Repositories)**: Automatically populated cards from your GitHub profile showing project details.
- **Visual & Interactive Features**: Includes animated particles and an interactive pixel cat that responds to cursor movement.

---

## 📦 GitHub Repository Fetching

This project dynamically fetches your public repositories from GitHub and creates project cards for each one.

Each card includes:

- Repository name and description
- Star count ⭐
- Fork count 🍴
- Language color badge 🎨
- Commit count 🔁
- GitHub link and (optionally) a Live Preview button

### How It Works

Inside `scripts/app.js`, the following request is sent:

```js
fetch(`https://api.github.com/users/YourUsername/repos`)
```

This fetches all public repositories belonging to the given GitHub username (set at the top of the file). Only the first 10 repositories are shown (you can adjust this).

For each repository, it sends two additional requests:

- One to get the languages used
- One to fetch the last 100 commits (to count them)

Cards are generated with DOM methods and appended to a `#repo-container` element in the HTML.

---

## 🔐 Optional: Token-Based GitHub Fetching

GitHub's public API is rate-limited. If you exceed the limit, data won't load correctly.

To solve this, a second file `scripts/AppwithToken.js` is included. It uses a proxy server that injects your personal GitHub token, providing higher request limits.

To use it:

1. Set up a backend proxy that adds your GitHub token in the `Authorization` header.
2. Replace `scripts/app.js` with `AppwithToken.js` by renaming it.
3. That’s it — now your fetches are authenticated and more reliable.

Example fetch:

```js
fetch("/github-proxy/github")
```

This assumes your server is routing requests securely.

---

## 🔗 Live Preview Links

Each repository card can optionally show a "Live Preview" button that links to a deployed version of that project.

This is handled manually in `scripts/livePreviews.js` like this:

```js
const livePreviewLinks = {
  "todo-app": "https://preview.boradag.com/todo-app",
  // "calculator": "https://boradag.com/calculator" // Example
};
```

- The key must exactly match the GitHub repo name.
- The value is the URL where the project is live.
- If a match is found, the "Live Preview" link is added to the card.

This lets you direct users to Vercel, Netlify, or custom domain versions of your apps.

---

## 🎇 Particle Background Animation

Particles float slowly in the background for a smooth visual touch.

- File: `scripts/particles.js`
- Automatically resizes to fill the viewport
- Adjusts particle count for mobile (better performance)

Each particle is drawn on a canvas and moves vertically with slight opacity. This creates a gentle falling effect.

### 🔁 Interaction with the Cat

If the neko (cat) is active, the particles detect its position and gently move away from it, giving the illusion of space around the cat.
This adds a subtle layer of interactivity and realism.

---

## 🐱 Animated Neko (Oneko)

Oneko is a pixel-art style cat that follows your mouse.

- File: `scripts/oneko.js`
- Source: [oneko.js by adryd325](https://github.com/adryd325/oneko.js)

It tracks your cursor and walks in that direction. It also sleeps when idle, scratches walls near screen edges, and interacts with the background particles.

The animation frames are built-in and run purely on the front-end — no libraries required.

---

## 📂 Project Structure

```
📦 my-portfolio
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📂 scripts
 ┃ ┣ 📜 animations.js
 ┃ ┣ 📜 app.js
 ┃ ┣ 📜 AppwithToken.js
 ┃ ┣ 📜 backToTop.js
 ┃ ┣ 📜 livePreviews.js
 ┃ ┣ 📜 navbar.js
 ┃ ┣ 📜 oneko.js
 ┃ ┣ 📜 particles.js
 ┃ ┗ 📜 titleSwitch.js
 ┣ 📂 favicon
 ┗ 📂 images
```

---

## ⚙️ How to Use

1. Clone this repository.
2. Open `index.html` in your browser, or serve it using a static web server.
3. Customize sections in HTML and JS files (bio, skills, education).
4. To fetch GitHub data:
   - For basic use, keep `app.js`.
   - For authenticated use, rename `AppwithToken.js` to `app.js`.
5. To link live projects, edit `livePreviews.js`.

---

## 🖥️ Setup & Run

This project is entirely front-end based, meaning you don't need Node.js, npm, or any bundlers to get started.

### Option 1: Open Locally

1. Download or clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   ```
2. Navigate to the project folder:
   ```bash
   cd my-portfolio
   ```
3. Open the `index.html` file in your preferred browser (you can double-click it).

### Option 2: Run with Live Server

If you prefer a local dev server with live reload:

1. Install the Live Server extension (e.g., in VS Code).
2. Right-click `index.html` and choose **"Open with Live Server"**.

This provides a better development experience.

### Notes:
- Tailwind CSS is included via CDN in the `<head>` of `index.html`.
- All scripts are vanilla JavaScript and located in the `scripts/` directory.
- No compilation or bundling needed — just open and go.

If you plan to use the GitHub Token method, make sure your proxy backend adds:

```
Authorization: token YOUR_GITHUB_TOKEN
```

---

## 🤝 Contributing

Contributions are welcome! Follow these steps to get involved:

1. **Fork** the repository to your own GitHub account.
2. **Clone** the forked project to your local machine.
3. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and test them locally.
5. **Commit** your changes with a clear message:
   ```bash
   git commit -m "Add a new feature"
   ```
6. **Push** to your forked repository:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request** against the `main` branch of the original repo.

Please ensure your code follows existing conventions and is well-documented. Feel free to open an issue for discussion before starting major changes.

Let's make it better together!

---

## 🖼️ Screenshots


![Portfolio Screenshot](https://github.com/Bora-Dag/personal-portfolio/blob/main/screenshots/1.png?raw=true)

---

## 📧 Contact

If you have any questions, feel free to reach out:

- GitHub: [@Bora-Dag](https://github.com/Bora-Dag)
- Website: [https://boradag.com](https://boradag.com)
- Email: [info@boradag.com](mailto:info@boradag.com)
---
⭐ If you found this project useful, consider giving it a star on GitHub!
