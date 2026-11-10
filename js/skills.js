function switchStackTab(tab) {
    const skillsPanel = document.getElementById("panel-skills");
    const toolsPanel = document.getElementById("panel-tools");

    const skillsButton = document.getElementById("btn-skills");
    const toolsButton = document.getElementById("btn-tools");

    if (!skillsPanel || !toolsPanel || !skillsButton || !toolsButton) {
        return;
    }

    // Only allow Skills or Tools
    const showSkills = tab !== "tools";

    // Show the selected panel
    skillsPanel.classList.toggle("active", showSkills);
    toolsPanel.classList.toggle("active", !showSkills);

    // Update selected button
    skillsButton.classList.toggle("active", showSkills);
    toolsButton.classList.toggle("active", !showSkills);

    // Accessibility
    skillsButton.setAttribute("aria-pressed", showSkills);
    toolsButton.setAttribute("aria-pressed", !showSkills);
}

// Make function accessible to inline HTML onclick
window.switchStackTab = switchStackTab;

// Always initialize Skills as the default panel
document.addEventListener("DOMContentLoaded", function () {
    switchStackTab("skills");
});
