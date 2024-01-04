import { createMarcup } from "./helpers/cards";
import { common } from "./helpers/common";
import { findProduct } from "./helpers/findProduct";
import { createModal } from "./helpers/createModal";
import { btn } from "./helpers/scroll";
console.log(btn)
                                                                //null undefined
const arrFavorite = JSON.parse(localStorage.getItem(common.favoriteItems)) ?? [];

 
const list = document.querySelector('.js-list');
createMarcup(list, arrFavorite)

/*const addButton = document.querySelector('.js-favorite');
addButton.style.display = 'none'
console.dir(addButton)
addButton.textContent = 'Remove';*/


list.addEventListener('click', onClick);

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
};





