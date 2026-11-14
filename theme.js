
const themeKey = "nadzmi-theme";
const root = document.documentElement;

// Load the previously selected theme
let savedTheme = null;

try {
    savedTheme = localStorage.getItem(themeKey);
} catch {
    // Use the default theme if storage is unavailable.
}

root.dataset.theme = savedTheme === "light"
    ? "light"
    : "dark";

// Set up the theme button once HTML has loaded
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".theme-toggle");
    const icon = button?.querySelector(".theme-icon");

    if (!button || !icon) return;

    function updateButton() {
        const isDark = root.dataset.theme === "dark";
        const status = button.querySelector(".theme-status");

if (status) {
    status.textContent = isDark
        ? "Dark mode"
        : "Light mode";
}

        const label = isDark
            ? "Switch to light theme"
            : "Switch to dark theme";

        button.setAttribute("aria-label", label);
        button.setAttribute("title", label);

        icon.textContent = isDark ? "☾" : "☀";
    }

    updateButton();

    // Show the toggle after successful setup
    root.classList.add("theme-ready");

    button.addEventListener("click", () => {
        const currentTheme = root.dataset.theme;

        const newTheme = currentTheme === "dark"
            ? "light"
            : "dark";

        root.dataset.theme = newTheme;

        updateButton();

        try {
            localStorage.setItem(themeKey, newTheme);
        } catch {
            // The current page can still switch themes.
        }
    });
});
