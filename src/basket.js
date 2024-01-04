import { createMarcup } from "./helpers/cards";
import { common } from "./helpers/common";
import { btn } from "./helpers/scroll";
import { findProduct } from "./helpers/findProduct";
import { createModal } from "./helpers/createModal";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
console.log(btn)


                                                               
const arrBasket = JSON.parse(localStorage.getItem(common.basketItems)) ?? [];

const basketList = document.querySelector('.js-basket');
createMarcup(basketList, arrBasket);
//console.log(basketList)

basketList.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault()
    
    if (e.target.classList.contains('js-information')) {
        const currentProduct = findProduct(e.target);
        //console.log(currentProduct)
        createModal(currentProduct)
    }
    else if (e.target.classList.contains('js-delete')) {
        const currentProduct = findProduct(e.target);
        console.log(currentProduct)

        const currentProductIndex = arrBasket.findIndex(({ id }) => id === currentProduct.id);

    if (currentProductIndex !== -1) {
    arrBasket.splice(currentProductIndex, 1);
        createMarcup(basketList, arrBasket);
        
    localStorage.setItem(common.basketItems, JSON.stringify(arrBasket));
 
    Notify.success('The product has been removed from basket');
    console.log(arrBasket);
        };
    };
};

