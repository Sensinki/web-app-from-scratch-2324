// JavaScript Document
console.log("hi");

// HAMBURGER MENU
// Resource: https://codepen.io/shooft/pen/MWZYoqa */
// open the menu
var openButton = document.querySelector("header > button");
openButton.addEventListener("click", openMenu);

function openMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.add("showMenu");
}

// close the menu
var closeButton = document.querySelector("nav button");
closeButton.addEventListener("click", closeMenu);

function closeMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("showMenu");
}

// close the menu with "esc"
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
    if (event.key == "Escape") {
        var deNav = document.querySelector("nav");
        deNav.classList.remove("showMenu");
    }
}

// WEB API
// got help from chatGPT in particular parts
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
// got help from chatGPT in particular parts
async function skillsApi() {
    const skillGithubUrl = "https://raw.githubusercontent.com/Sensinki/web-app-from-scratch-2324/main/docs/assets/script/skills.json";

    try {
        const response = await fetch(skillGithubUrl);
        const data = await response.json();
        const skillsList = document.querySelector(".skills");

        // Loop through each skill in the JSON data
        Object.keys(data).forEach((skillKey) => {
            const skill = data[skillKey];

            const listItem = document.createElement("li");
            const img = document.createElement("img");
            img.classList.add("avatarIcon");
            img.src = skill.image;
            img.alt = skill.title;

            const titleParagraph = document.createElement("p");
            titleParagraph.classList.add("title");
            titleParagraph.textContent = skill.title;

            listItem.appendChild(img);
            listItem.appendChild(titleParagraph);

            skillsList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching or processing JSON:", error);
    }
}

skillsApi();
