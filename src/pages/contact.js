import "../styles/home.css";
import "../style.css";

export default function createContactPage() {
	const container = document.createElement("div");
	container.classList.add("home-container");
	container.classList.add("transparent-bg");
	container.textContent = "Contact page";
	return container;
}
