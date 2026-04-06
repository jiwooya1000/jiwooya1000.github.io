(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");

  if (!toggle) {
    return;
  }

  const label = toggle.querySelector(".theme-toggle-text");

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    toggle.setAttribute("aria-pressed", String(theme === "dark"));

    if (label) {
      label.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    }
  };

  const initialTheme = root.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(initialTheme);

  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);

    try {
      localStorage.setItem("theme", nextTheme);
    } catch (error) {}
  });
})();
