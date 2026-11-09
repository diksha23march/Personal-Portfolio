/* Skills / Tools card switcher */

window.switchStackTab = function (tab) {
    const skillsPanel = document.getElementById("panel-skills");
    const toolsPanel = document.getElementById("panel-tools");
    const skillsButton = document.getElementById("btn-skills");
    const toolsButton = document.getElementById("btn-tools");

    if (!skillsPanel || !toolsPanel || !skillsButton || !toolsButton) return;

    const showSkills = tab === "skills";

    skillsPanel.classList.toggle("active", showSkills);
    toolsPanel.classList.toggle("active", !showSkills);

    skillsButton.classList.toggle("active", showSkills);
    toolsButton.classList.toggle("active", !showSkills);

    skillsButton.setAttribute("aria-pressed", String(showSkills));
    toolsButton.setAttribute("aria-pressed", String(!showSkills));
};

switchStackTab("skills");