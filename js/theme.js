const themeToggle = document.getElementById("theme-toggle");

const body = document.body;

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="dark"){

    body.classList.add("dark-mode");

    updateThemeIcon();

}

themeToggle.addEventListener("click",()=>{

    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

    updateThemeIcon();

});

function updateThemeIcon(){

    const icon=document.getElementById("theme-icon");

    if(document.body.classList.contains("dark-mode")){

        icon.innerHTML=`
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.2" y1="4.2" x2="5.6" y2="5.6"></line>
        <line x1="18.4" y1="18.4" x2="19.8" y2="19.8"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.2" y1="19.8" x2="5.6" y2="18.4"></line>
        <line x1="18.4" y1="5.6" x2="19.8" y2="4.2"></line>
        `;

    }else{

        icon.innerHTML=`
        <path d="M21 12.79A9 9 0 1111.21 3
        7 7 0 0021 12.79z"/>
        `;

    }

}