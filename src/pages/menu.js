import "../styles/home.css";
import "../style.css";

export default function createMenuPage() {
	const container = document.createElement("div");
	container.classList.add("home-container");
	container.classList.add("transparent-bg");
	container.textContent = "Menu page";
	return container;
}
