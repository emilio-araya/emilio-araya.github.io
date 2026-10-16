// Theme toggle: explicit choice is stored; otherwise the OS preference applies.
const root = document.documentElement;
const mq = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = () => root.dataset.theme || (mq.matches ? "dark" : "light");

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

// "Download PDF" uses the browser print dialog with the print stylesheet.
document.getElementById("print").addEventListener("click", () => window.print());
