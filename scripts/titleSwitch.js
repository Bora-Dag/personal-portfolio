const originalTitle = document.title;

const funMessages = [
  `console.log("Where'd you go? 😢")`,
  "returnToPortfolio();",
  "Missing semicolon somewhere? ; )",
  "You left a div open! 😱",
  "404: Developer not focused",
  "⌛ waiting..."
];

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    const randomIndex = Math.floor(Math.random() * funMessages.length);
    document.title = funMessages[randomIndex];
  } else {
    document.title = originalTitle;
  }
});

