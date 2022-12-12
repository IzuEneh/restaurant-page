import "./style.css";

export default function initHeader() {
	const content = document.querySelector("#content");
	content.classList.add("content");

	const header = document.createElement("div");
	header.classList.add("header");

	const headerTitle = document.createElement("h1");
	headerTitle.textContent = "Utchey's Pizza";
	headerTitle.classList.add("title");

	const navButtons = document.createElement("div");
	navButtons.classList.add("navButtons");

	const homeTab = document.createElement("span");
	homeTab.textContent = "Home";
	homeTab.addEventListener("click", () => console.log("home clicked"));
	homeTab.classList.add("tab-button");

	const menuTab = document.createElement("span");
	menuTab.textContent = "Menu";
	menuTab.addEventListener("click", () => console.log("menu clicked"));
	menuTab.classList.add("tab-button");

	const contactTab = document.createElement("span");
	contactTab.textContent = "Contact";
	contactTab.addEventListener("click", () => console.log("contact clicked"));
	contactTab.classList.add("tab-button");

	const tabs = [homeTab, menuTab, contactTab];
	tabs.forEach((tab) => {
		const wrapper = document.createElement("div");
		wrapper.classList.add("tab-wrapper");
		wrapper.appendChild(tab);
		navButtons.appendChild(wrapper);
	});

	header.appendChild(headerTitle);
	header.appendChild(navButtons);

	content.appendChild(header);
}
