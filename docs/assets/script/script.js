// JavaScript Document
console.log("hi");

// HAMBURGER MENU

// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector("header > button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.addEventListener("click", openMenu);

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
    // zoek de nav op
    var deNav = document.querySelector("nav");
    // voeg class toe aan nav
    deNav.classList.add("toonMenu");
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}

/**********************************/
/* bonus: menu sluiten met escape */
/**********************************/
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
    if (event.key == "Escape") {
        var deNav = document.querySelector("nav");
        deNav.classList.remove("toonMenu");
    }
}

// WEB API
const boredapi = "https://www.boredapi.com/api/activity";
function getActivity() {
    fetch(boredapi)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("random").innerText = data.activity;
        })
        .catch((error) => {
            console.error("Unfortunately, this generator is not working now.", error);
        });
}

const titleCard = document.querySelector(".title");
const skillGithubUrl = "https://raw.githubusercontent.com/Sensinki/web-app-from-scratch-2324/main/docs/assets/script/skills.json";
async function skillsApi() {
    try {
        const reactie = await fetch(skillGithubUrl);
        const data = await reactie.json();
        titleCard.textContent = data["html"].title;
        const avatarImgs = document.querySelectorAll(".avatarIcon");
        console.log(data);
        avatarImgs.forEach((img) => {
            img.src = data["html"].image;
            img.alt = "avatar";
        });
        console.log(data);
    } catch (error) {
        console.error("Er is een fout opgetreden bij het ophalen en verwerken van de JSON:", error);
    }
}

skillsApi();
