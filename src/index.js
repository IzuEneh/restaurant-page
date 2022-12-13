import initHeader from "./init";
import "./style.css";
import createHomePage from "./pages/home";
import createMenuPage from "./pages/menu";
import createContactPage from "./pages/contact";

const body = document.querySelector("body");
body.classList.add("body");

const content = document.querySelector("#content");
content.classList.add("content");

const { header, tabs } = initHeader();

const [homeTab, menuTab, contactTab] = tabs;
let selected = homeTab;
selected.classList.add("selected");

let currentScreen = createHomePage();

homeTab.addEventListener("click", (e) => {
	const nextScreen = createHomePage();
	setScreen(nextScreen);
	setSelectedTab(e.target);
});

menuTab.addEventListener("click", (e) => {
	const nextScreen = createMenuPage();
	setScreen(nextScreen);
	setSelectedTab(e.target);
});

contactTab.addEventListener("click", (e) => {
	const nextScreen = createContactPage();
	setScreen(nextScreen);
	setSelectedTab(e.target);
});

function setSelectedTab(element) {
	selected.classList.remove("selected");
	element.classList.add("selected");
	selected = element;
}

function setScreen(nextScreen) {
	content.removeChild(currentScreen);
	content.appendChild(nextScreen);
	currentScreen = nextScreen;
}

content.appendChild(header);
content.appendChild(currentScreen);
