import "../styles/contact.css";
import "../style.css";
import loc from "../assets/pellegrino.png";

export default function createContactPage() {
	const container = document.createElement("div");
	container.classList.add("contact-container");
	container.classList.add("transparent-bg");

	const callText = document.createElement("p");
	callText.textContent = "call: 123-345-6789";

	const locationText = document.createElement("p");
	locationText.textContent = "location: 24016 Province of Bergamo, Italy";

	const locationImage = document.createElement("img");
	locationImage.src = loc;
	locationImage.classList.add("location-img");

	container.appendChild(callText);
	container.appendChild(locationText);
	container.appendChild(locationImage);
	return container;
}
