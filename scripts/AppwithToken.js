const githubUsername = "Bora-Dag";
const container = document.getElementById("repo-container");

async function fetchRepoDetails(repo) {
  try {
    const languagesRes = await fetch(repo.languages_url);
    const languagesData = await languagesRes.json();
    const languages = Object.keys(languagesData);

    const commitsURL = repo.commits_url.replace("{/sha}", "") + "?per_page=100";
    const commitsRes = await fetch(commitsURL);
    const commitsData = await commitsRes.json();
    const commitCount = Array.isArray(commitsData) ? commitsData.length : 0;

    return { languages, commitCount };
  } catch (error) {
    console.error("Error occurred (language/commit data):", error);
    return { languages: ["Unknown"], commitCount: 0 };
  }
}

function getLanguageColor(lang) {
  const colorMap = {
    JavaScript: "#f1e05a",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    TypeScript: "#2b7489",
    Vue: "#41b883",
    Java: "#b07219",
    C: "#555555",
    Cpp: "#f34b7d",
    Shell: "#89e051",
    Unknown: "#888888"
  };
  return colorMap[lang] || "#888888";
}

async function loadRepos() {
  try {
    const res = await fetch("/github-proxy/github");
    // const res = await fetch(`https://api.github.com/users/${githubUsername}/repos`); // Simpler version (rate-limited) - used in app.js

    const repos = await res.json();
    const latestRepos = repos.slice(0, 10);

    latestRepos.forEach(async (repo) => {
      const { name, description, html_url, stargazers_count, forks_count } = repo;
      const { languages, commitCount } = await fetchRepoDetails(repo);
      const mainLanguage = languages[0] || "Unknown";
      const languageColor = getLanguageColor(mainLanguage);
      const livePreview = livePreviewLinks[name];

      const card = document.createElement("div");
      card.className = "bg-[#161b22] p-4 rounded-lg shadow hover:scale-[1.02] transition-transform";

      const githubLink = `
        <a href="${html_url}" target="_blank" class="text-blue-400 text-sm hover:underline">
          View on GitHub
        </a>`;

      const liveLink = livePreview
        ? `<a href="${livePreview}" target="_blank" class="text-green-400 text-sm hover:underline ml-4">
             Live Preview
           </a>`
        : "";

      card.innerHTML = `
        <h3 class="text-lg font-semibold mb-2">${name}</h3>
        <p class="text-sm text-gray-400 mb-4">${description || "No description"}</p>

        <div class="flex flex-wrap gap-3 text-sm text-gray-400 mb-4">
          <span class="flex items-center gap-1">⭐ ${stargazers_count}</span>
          <span class="flex items-center gap-1">🍴 ${forks_count}</span>
          <span class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full" style="background-color: ${languageColor}"></span>
            ${mainLanguage}
          </span>
          <span class="flex items-center gap-1">🔁 ${commitCount} commits</span>
        </div>

        <div class="flex gap-4">
          ${githubLink}
          ${liveLink}
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to fetch repo data from GitHub:", error);
  }
}

loadRepos();
