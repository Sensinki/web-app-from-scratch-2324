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

// FETHING DATA FROM GITHUB
// const titleCard = document.querySelector(".title");
// const skillGithubUrl = "https://raw.githubusercontent.com/Sensinki/web-app-from-scratch-2324/main/docs/assets/script/skills.json";
// async function skillsApi() {
//     try {
//         const reactie = await fetch(skillGithubUrl);
//         const data = await reactie.json();
//         titleCard.textContent = data["html"].title;
//         const avatarImgs = document.querySelectorAll(".avatarIcon");
//         console.log(data);
//         avatarImgs.forEach((img) => {
//             img.src = data["html"].image;
//             img.alt = "avatar";
//         });
//         console.log(data);
//     } catch (error) {
//         console.error("JSON is not working", error);
//     }
// }

// skillsApi();

async function skillsApi() {
    const skillGithubUrl = "https://raw.githubusercontent.com/Sensinki/web-app-from-scratch-2324/main/docs/assets/script/skills.json";

    try {
        const response = await fetch(skillGithubUrl);
        const data = await response.json();

        // Select the skills list
        const skillsList = document.querySelector(".skills");

        // Loop through each skill in the JSON data
        Object.keys(data).forEach((skillKey) => {
            const skill = data[skillKey];

            // Create a new list item
            const listItem = document.createElement("li");

            // Create an image element
            const img = document.createElement("img");
            img.classList.add("avatarIcon");
            img.src = skill.image;
            img.alt = skill.title;

            // Create a paragraph element for the skill title
            const titleParagraph = document.createElement("p");
            titleParagraph.classList.add("title");
            titleParagraph.textContent = skill.title;

            // Append the image and title paragraph to the list item
            listItem.appendChild(img);
            listItem.appendChild(titleParagraph);

            // Append the list item to the skills list
            skillsList.appendChild(listItem);
        });

        // Remove the loading message
        const loadingMessage = document.querySelector("#skills p");
        if (loadingMessage) {
            loadingMessage.remove();
        }
    } catch (error) {
        console.error("Error fetching or processing JSON:", error);
    }
}

skillsApi();
