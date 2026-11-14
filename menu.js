const menuButton = document.querySelector(".menu-toggle");
const header = document.querySelector(".site-header");
const menuPanel = document.getElementById("mobile-header-panel");

if (menuButton && header && menuPanel) {

    const mobileScreen = window.matchMedia("(max-width: 54rem)");

    const backgroundElements = document.querySelectorAll(
        ".site-brand, .skip-link, main, footer"
    );

    function setMenuOpen(isOpen) {
        const open = isOpen && mobileScreen.matches;

        header.dataset.menuOpen = String(open);

        menuButton.setAttribute(
            "aria-expanded",
            String(open)
        );

        menuButton.setAttribute(
            "aria-label",
            open ? "Close menu" : "Open menu"
        );

        document.body.classList.toggle("menu-open", open);

        backgroundElements.forEach((element) => {
            element.inert = open;
        });
    }

    // Initial state
    setMenuOpen(false);

    // Toggle the overlay
    menuButton.addEventListener("click", () => {
        const isOpen = header.dataset.menuOpen === "true";

        setMenuOpen(!isOpen);

        if (!isOpen) {
            menuPanel.querySelector("a")?.focus();
        }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (event) => {
        if (header.dataset.menuOpen !== "true") return;

        if (event.key === "Escape") {
            setMenuOpen(false);
            menuButton.focus();
            return;
        }

    });

    // Close when a navigation link is selected
    menuPanel.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            setMenuOpen(false);
        });
    });

    // Close when the empty overlay background is clicked
    menuPanel.addEventListener("click", (event) => {
        if (event.target === menuPanel) {
            setMenuOpen(false);
            menuButton.focus();
        }
    });

    // Reset when viewport changes
    mobileScreen.addEventListener("change", () => {
        const wasOpen = header.dataset.menuOpen === "true";

        setMenuOpen(false);

        if (!mobileScreen.matches && wasOpen) {
            menuPanel.querySelector("a")?.focus();
        }
    });


// Close the dropdown when clicking outside the header
document.addEventListener("pointerdown", (event) => {
    const isOpen = header.dataset.menuOpen === "true";

    if (isOpen && !header.contains(event.target)) {
        setMenuOpen(false);
    }
});

// Close when keyboard focus leaves the header
header.addEventListener("focusout", (event) => {
    const isOpen = header.dataset.menuOpen === "true";

    if (isOpen && !header.contains(event.relatedTarget)) {
        setMenuOpen(false);
    }
});


    document.documentElement.classList.add("menu-ready");
}
