const contentContainer = document.querySelector("#content-container");
const cartCounterLabel = document.querySelector("#cart-counter");

let cartCounter = 0;
let cartPrice = 0;

const incrementCounter = (label, cn) => {
  const counter = cn + 1;

  label.innerHTML = `${counter}`;

  if (counter === 1) cartCounterLabel.style.display = "block";

  return counter;
};

const disableControls = (t, fn) => {
  t.disabled = true;
  contentContainer.removeEventListener("click", fn);
};
const enableControls = (t, fn) => {
  t.disabled = false;
  contentContainer.addEventListener("click", fn);
};

const btnClickHandler = (e) => {
  const target = e.target;
  const interval = 2000;
  let restoreHTML = null;

  if (typeof target !== "object") return;

  if (target && target.classList.contains("item-actions__cart")) {
    cartCounter = incrementCounter(cartCounterLabel, cartCounter);

    disableControls(target, btnClickHandler);
    restoreHTML = target.innerHTML;
    target.innerHTML = "у кошику";

    setTimeout(() => {
      enableControls(target, btnClickHandler);
      target.innerHTML = restoreHTML;
    }, interval);
  }
};

contentContainer.addEventListener("click", btnClickHandler);
