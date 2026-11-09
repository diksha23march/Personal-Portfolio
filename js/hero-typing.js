/* Hero stack.ts typing animation */

(() => {
    const target = document.getElementById("stackTypingCode");
    if (!target) return;

    const lines = [
        "const stack = [",
        '  "React",',
        '  "Node.js",',
        '  "Python",',
        '  "PostgreSQL"',
        "];",
        "",
        'const passion = "building',
        '  things that matter";'
    ];

    const code = lines.join("\n");
    const radar = document.querySelector(".hero-radar-card");
    let index = 0;

    const moveRadarWithTyping = () => {
        if (!radar) return;

        radar.classList.remove("is-typing");
        void radar.offsetWidth;
        radar.classList.add("is-typing");
    };

    const typeCode = () => {
        target.textContent = code.slice(0, index);
        moveRadarWithTyping();

        if (index < code.length) {
            index++;
            window.setTimeout(typeCode, index < 18 ? 42 : 28);
        } else {
            window.setTimeout(() => {
                index = 0;
                target.textContent = "";
                typeCode();
            }, 3200);
        }
    };

    typeCode();
})();