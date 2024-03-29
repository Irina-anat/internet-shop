import { instruments } from './instruments';
import { createMarcup } from './helpers/cards';
import { createModal } from './helpers/createModal';
import { findProduct } from './helpers/findProduct';
import { common } from './helpers/common';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { btn } from './helpers/scroll';
import { advertising } from './helpers/advertising';
import '../src/style.css';
import '../node_modules/animate.css/animate.min.css';
import '../node_modules/notiflix/dist/notiflix-3.2.7.min.css';
console.log(btn)


const box = document.querySelector('.js-box');
const titleTimer = document.querySelector('.js-timer');

let counter = 11;

advertising(box, titleTimer, counter);


const arrFavorite = JSON.parse(localStorage.getItem(common.favoriteItems)) || [];

const arrBasket = JSON.parse(localStorage.getItem(common.basketItems)) || [];
//console.log(arrBasket)

const container = document.querySelector('.js-container');

createMarcup(container, instruments)

container.addEventListener('click', onClick)


function onClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('js-information')) {
    const currentProduct = findProduct(e.target);
    createModal(currentProduct);
  } else if (e.target.classList.contains('js-favorite')) {
    const currentProduct = findProduct(e.target);
    const inFavorite = arrFavorite.some(({ id }) => id === currentProduct.id);
    if (inFavorite) {
      Notify.failure('The product is already in the favorites');
      return;
    }
    arrFavorite.push(currentProduct);
    Notify.success('The product has been added to favorites');
    console.log(arrFavorite);
    localStorage.setItem(common.favoriteItems, JSON.stringify(arrFavorite));
  }
    else if (e.target.classList.contains('js-basketBtn')) {
    const currentProduct = findProduct(e.target);
    const inBasket = arrBasket.some(({ id }) => id === currentProduct.id);
    if (inBasket) {
      Notify.failure('The product has already been added to the cart');
      return;
    }
    arrBasket.push(currentProduct);
    Notify.success('The product has been successfully added to the cart');
    console.log(arrBasket);
    localStorage.setItem(common.basketItems, JSON.stringify(arrBasket));
  };
};


