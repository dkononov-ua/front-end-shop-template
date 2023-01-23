export let basketContainer = null;

let basketBtnContainer;
const headerNavbar = document.querySelector('.page-header__navbar');

const createElement = ({type, attrs, container = null}) => {
  const el = document.createElement(type);

  for (let key in attrs) {
    if (key === 'innerText') el.innerHTML = attrs[key];
    else if (key.indexOf('data') === 0) el.setAttribute(`data-${key.slice(4)}`, attrs[key]);
    else el.setAttribute(key, attrs[key]);
  }

  if (container) container.append(el);

  return el;
};

const createBasketContainer = (c) => {
  basketContainer = createElement({type: 'div',
    attrs: {class: 'well basket__container'},
    container: headerNavbar});
  createElement({type: 'p',
    attrs: {innerText: `There are ${c} items in the cart`},
    container: basketContainer});
};

const createBasketBtn = (count, container) => {
  basketBtnContainer = createElement({type: 'div',
    attrs: {class: 'basket__btn-container',
      id: 'btn-container'},
    container});
  createElement({type: 'button',
    attrs: {class: 'btn btn-primary basket__btn-next',
      id: 'btn-next',
      type: 'button',
      innerText: 'Continue Shopping'},
    container: basketBtnContainer});
  if (count > 0) {
    createElement({type: 'button',
      attrs: {class: 'btn btn-primary basket__btn-clear',
        type: 'button',
        innerText: 'Сlear cart'},
      container: basketBtnContainer});
    createElement({type: 'button',
      attrs: {class: 'btn btn-primary basket__btn-order',
        type: 'submit',
        innerText: 'Order'},
      container: basketBtnContainer});
  }
};

const createBasketList = (container, arr) => {
  let sum = 0;

  arr.forEach((el) => {
    let basketItem = createElement({type: 'div',
      attrs: {
        class: 'basket__item-container',
        datacode: `${el.productCode}`
      },
      container});

    createElement({
      type: 'span',
      attrs: {innerText: `${el.productName}  `},
      container: basketItem
    });
    createElement({
      type: 'span',
      attrs: {
        class: 'basket__item-count',
        innerText: `- ${el.count} pcs.  `
      },
      container: basketItem
    });
    createElement({
      type: 'span',
      attrs: {innerText: `price ${el.price.toFixed(2)}$  `},
      container: basketItem
    });
    createElement({
      type: 'span',
      attrs: {innerText: `sum: ${el.sum.toFixed(2)}$`},
      container: basketItem
    });
    createElement({
      type: 'i',
      attrs: {class: 'fas fa-times basket__item-del'},
      container: basketItem
    });

    sum += el.sum;
  });
  createElement({
    type: 'div',
    attrs: {
      class: 'basket__total',
      innerText: `Total items in the cart for the amount <br> ${sum.toFixed(2)}$`
    },
    container
  });
};

const createStyle = () => {
  createElement({
    type: 'style',
    attrs: {
      innerText: `
      .page-header__navbar {
        position: relative;
      }
      
      .basket__container {
        background-color: rgba(255, 255, 255, 0.8);
        position: absolute;
        padding: 10px;
        bottom: 0;
        right: 100px;
        transform: translateY(100%);
        z-index: 1000;
        border: 1px solid #2d8df3;
        border-radius: 4px;
      }
      .basket__container p {
        text-align: center;
        font-size: 18px;
      }
      .basket__total {
        margin: 10px auto 10px auto;
        text-align: center;
        font-size: 18px;
        color: red;
      }
      .basket__btn-container {
        display: flex;
        gap: 10px;
        justify-content: center;
      }
      .basket__item-container {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        border-bottom: 1px solid lightblue;
      }
      .basket__item-del {
        display: block;
        background-color: #007bff;
        border: 1px solid #041c36;
        padding: 5px 3px 0 3px;
        cursor: pointer;
        font-size: 10px;
        border-radius: 2px;
      }`
    },
    container: document.head
  });
};

export const eraseBasket = () => {
  basketContainer.remove();
  basketContainer = null;
};

export const createBasket = (count, productArr) => {
  createBasketContainer(count);
  if (count > 0) createBasketList(basketContainer, productArr);
  createBasketBtn(count, basketContainer);
  createStyle();
};

