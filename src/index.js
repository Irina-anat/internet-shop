import { instruments } from './instruments';
import { createMarcup } from './helpers/cards';
import { createModal } from './helpers/createModal';
import { findProduct } from './helpers/findProduct';
import { common } from './helpers/common';


const arrFavorite = JSON.parse(localStorage.getItem(common.favoriteItems)) || [];

const arrChecout = [];

const container = document.querySelector('.js-container');

createMarcup(container, instruments)

container.addEventListener('click', onClick)

function onClick(e) {
    e.preventDefault()
    if (e.target.classList.contains('js-information')) {
        const currentProduct = findProduct(e.target);
        //console.log(currentProduct)
        createModal(currentProduct)
    } else if (e.target.classList.contains('js-favorite')) {
        const currentProduct = findProduct(e.target);
        //console.log(currentProduct)
        const inFavorite = arrFavorite.some(({ id }) => id === currentProduct.id);
        if (inFavorite) {
            return;
        }
        arrFavorite.push(currentProduct);
        console.log(arrFavorite)
        localStorage.setItem(common.favoriteItems, JSON.stringify(arrFavorite))
    }
}


