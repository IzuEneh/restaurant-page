import "../styles/menu.css";
import "../style.css";
import bbq from "../assets/pizzas/bbq-chicken.jpg";
import deluxe from "../assets/pizzas/deluxe.jpg";
import egg from "../assets/pizzas/egg-pizza.jpg";
import feta from "../assets/pizzas/feta.jpg";

export default function createMenuPage() {
	const container = document.createElement("div");
	container.classList.add("menu-container");
	container.classList.add("transparent-bg");

	const chicken = createMenuItem(
		bbq,
		"BBQ Chicken",
		"BBQ chicken, mozzarella, chedder cheese, bbq sauce"
	);
	container.appendChild(chicken);

	const deluxePizza = createMenuItem(
		deluxe,
		"Deluxe",
		"Tomato Sauce, Mozzarella, Green Peppers, Onions, Tomatoes"
	);
	container.appendChild(deluxePizza);

	const eggPizza = createMenuItem(
		egg,
		"Breakfast Pizza",
		"Tomato Sauce, Mozzarella, Fried egg, Bacon, Sausage"
	);
	container.appendChild(eggPizza);

	const CheesePizza = createMenuItem(
		feta,
		"Cheese Pizza",
		"Tomato Sauce, Mozzarella, Basil, Feta Cheese"
	);
	container.appendChild(CheesePizza);
	return container;
}

function createMenuItem(picture, title, description) {
	const item = document.createElement("div");
	item.classList.add("menu-item");

	const iPic = document.createElement("img");
	iPic.src = picture;
	iPic.classList.add("menu-image");

	const iTitle = document.createElement("p");
	iTitle.textContent = title;
	iTitle.classList.add("menu-title");

	const iDesc = document.createElement("p");
	iDesc.textContent = description;
	iDesc.classList.add("desc");

	item.appendChild(iPic);
	item.appendChild(iTitle);
	item.appendChild(iDesc);
	return item;
}
