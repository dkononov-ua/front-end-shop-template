
const contentContainer = document.querySelector("#content-container");
const cartCounter = document.querySelector('#cart-counter');

const btnClickHandler = (e) => {
	const target = e.targets;

console.log(target);
};

contentContainer.addEventListener('click', btnClickHandler);