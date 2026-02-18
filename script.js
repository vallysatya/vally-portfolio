document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  const themeToggle = document.getElementById("theme-toggle");
  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  const storedTheme = window.localStorage.getItem("portfolio-theme");
  if (storedTheme === "light" || (!storedTheme && prefersLight)) {
    document.body.classList.add("light");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const isLight = document.body.classList.contains("light");
      window.localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
      );
    });
  }

});

