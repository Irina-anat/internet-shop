import { createMarcup } from "./helpers/cards";
import { common } from "./helpers/common";
import { btn } from "./helpers/scroll";
import { findProduct } from "./helpers/findProduct";
import { createModal } from "./helpers/createModal";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
console.log(btn)
                                                               //null undefined
const arrFavorite = JSON.parse(localStorage.getItem(common.favoriteItems)) ?? [];

const list = document.querySelector('.js-list');
createMarcup(list, arrFavorite)


list.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault()
    
    if (e.target.classList.contains('js-information')) {
        const currentProduct = findProduct(e.target);
        createModal(currentProduct)
    }
    else if (e.target.classList.contains('js-delete')) {
        const currentProduct = findProduct(e.target);
        console.log(currentProduct)

        const currentProductIndex = arrFavorite.findIndex(({ id }) => id === currentProduct.id);

    if (currentProductIndex !== -1) {
    arrFavorite.splice(currentProductIndex, 1);
        createMarcup(list, arrFavorite);
        
    localStorage.setItem(common.favoriteItems, JSON.stringify(arrFavorite));
 
    Notify.success('The product has been removed from favorites');
    console.log(arrFavorite);
        };
    };
};


























/*const addButton = document.querySelector('.js-favorite');
addButton.style.display = 'none'
console.dir(addButton)
addButton.textContent = 'Remove';*/
