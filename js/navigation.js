document.addEventListener("DOMContentLoaded", () => {

    /* ==================================================
       NAVIGATION ELEMENTS
    ================================================== */

    const navWrapper = document.querySelector(".nav-wrapper");
    const navToggle = document.querySelector("#nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");


    /* ==================================================
       SAFETY CHECK
    ================================================== */

    if (!navWrapper || !navToggle || !navMenu) {
        console.error("Navigation elements not found.");
        return;
    }


    /* ==================================================
       CHECK DEVICE SIZE
    ================================================== */

    function isMobile() {
        return window.innerWidth <= 768;
    }


    /* ==================================================
       OPEN NAVIGATION
    ================================================== */

    function openNavigation() {

        navWrapper.classList.remove("collapsed");
        navWrapper.classList.add("expanded");

        navMenu.setAttribute("aria-hidden", "false");
        navToggle.setAttribute("aria-expanded", "true");

        document.body.classList.add("nav-open");
    }


    /* ==================================================
       CLOSE NAVIGATION
    ================================================== */

    function closeNavigation() {

        navWrapper.classList.remove("expanded");
        navWrapper.classList.add("collapsed");

        navMenu.setAttribute("aria-hidden", "true");
        navToggle.setAttribute("aria-expanded", "false");

        document.body.classList.remove("nav-open");
    }


    /* ==================================================
       TOGGLE NAVIGATION
    ================================================== */

    navToggle.addEventListener("click", (event) => {

        event.stopPropagation();

        if (navWrapper.classList.contains("expanded")) {

            closeNavigation();

        } else {

            openNavigation();

        }

    });


    /* ==================================================
       NAVIGATION LINKS
    ================================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (isMobile()) {
                closeNavigation();
            }

        });

    });


    /* ==================================================
       CLOSE OUTSIDE NAVIGATION (MOBILE ONLY)
    ================================================== */

    document.addEventListener("click", (event) => {

        if (!isMobile()) {
            return;
        }

        if (
            navWrapper.classList.contains("expanded") &&
            !navWrapper.contains(event.target)
        ) {

            closeNavigation();

        }

    });


    /* ==================================================
       ESCAPE KEY
    ================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeNavigation();
        }

    });


    /* ==================================================
       ACTIVE NAVIGATION LINK (SCROLL OBSERVER)
    ================================================== */

    const sections = document.querySelectorAll("section[id]");


    if (sections.length > 0) {

        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -60% 0px",
            threshold: 0
        };


        const sectionObserver =
            new IntersectionObserver((entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const currentSection =
                        entry.target.getAttribute("id");


                    navLinks.forEach((link) => {

                        const linkTarget =
                            link.getAttribute("href");


                        link.classList.remove("active");


                        if (
                            linkTarget ===
                            `#${currentSection}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                });

            }, observerOptions);


        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

    }


    /* ==================================================
       HANDLE WINDOW RESIZE
    ================================================== */

    window.addEventListener("resize", () => {

        if (!isMobile()) {

            openNavigation();

        }

    });


    /* ==================================================
       INITIAL NAVIGATION STATE
    ================================================== */

    if (isMobile()) {

        closeNavigation();

    } else {

        openNavigation();

    }


    console.log("Navigation initialized successfully.");



    /* ==================================================
       STACK / TOOLS TAB SWITCHER
    ================================================== */
const skillTabBtns = document.querySelectorAll(".skills-tab-btn");
const stackPanels = document.querySelectorAll(".stack-panel");

if (skillTabBtns.length > 0 && stackPanels.length > 0) {

    function switchStackPanel(targetTab) {

        // Update active tab button
        skillTabBtns.forEach((btn) => {
            btn.classList.toggle(
                "active",
                btn.getAttribute("data-tab") === targetTab
            );
        });

        // Update active card
        stackPanels.forEach((panel) => {
            const isActive = panel.id === `panel-${targetTab}`;

            panel.classList.toggle("active", isActive);
            panel.setAttribute("aria-hidden", isActive ? "false" : "true");
        });
    }

    skillTabBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const targetTab = btn.getAttribute("data-tab");

            if (targetTab) {
                switchStackPanel(targetTab);
            }
        });
    });

    // Set initial state according to the active button
    const initialActiveTab =
        document.querySelector(".skills-tab-btn.active");

    if (initialActiveTab) {
        switchStackPanel(
            initialActiveTab.getAttribute("data-tab")
        );
    } else {
        switchStackPanel("skills");
    }
}

});