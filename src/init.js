import "./style.css";

const tabTitles = ["Home", "Menu", "Contact"];

function initTabs() {
	return tabTitles.map((title) => {
		const tab = document.createElement("div");
		tab.classList.add("tab-wrapper");
		tab.textContent = title;
		return tab;
	});
}

export default function initHeader() {
	const header = document.createElement("div");
	header.classList.add("header");
	header.classList.add("transparent-bg");

	const headerTitle = document.createElement("div");
	headerTitle.textContent = "Utchey's Pizza";
	headerTitle.classList.add("title");

	const navButtons = document.createElement("div");
	navButtons.classList.add("navButtons");

	const tabs = initTabs();
	tabs.forEach((tab) => {
		navButtons.appendChild(tab);
	});

	header.appendChild(headerTitle);
	header.appendChild(navButtons);

	return { header, tabs };
}
