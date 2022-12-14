import "../styles/home.css";
import "../style.css";
import Chef from "../assets/chef.jpg";

export default function createHomePage() {
	const container = document.createElement("div");
	container.classList.add("home-container");
	container.classList.add("transparent-bg");

	const img = document.createElement("img");
	img.src = Chef;
	img.classList.add("image");
	container.appendChild(img);

	const sideText = document.createElement("div");
	sideText.classList.add("side-text");

	const storyText = document.createElement("p");
	storyText.textContent = `The best pizza in town! You will never forget the memorable experience youve had here.
		It is truly amazign pizza cheffed up by our head chef romero. Its his picture there on the 
		right.
		`;

	const orderText = document.createElement("p");
	orderText.textContent = "Order online or visit us!";

	sideText.appendChild(storyText);
	sideText.appendChild(orderText);
	container.appendChild(sideText);

	return container;
}
