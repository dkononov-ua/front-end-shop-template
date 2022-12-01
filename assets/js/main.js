const contentContainer = document.querySelector("#content-container");
const cartCounterLabel = document.querySelector("#cart-counter");

let cartCounter = 0;
let cartPrice = 0;

const btnClickHandler = (e) => {
  const target = e.target;

  if (typeof target !== "object") return;

  if (target && target.classList.contains("item-actions__cart")) {
    cartCounter++;
    console.log(cartCounter);

    cartCounterLabel.innerHTML = cartCounter;

    if (cartCounter === 1) {
      cartCounterLabel.style.display = "block";
    }
  }
};

contentContainer.addEventListener("click", btnClickHandler);
