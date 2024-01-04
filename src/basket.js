import { createMarcup } from "./helpers/cards";
import { common } from "./helpers/common";
import { findProduct } from "./helpers/findProduct";
import { createModal } from "./helpers/createModal";
                                                               
const arrBasket = JSON.parse(localStorage.getItem(common.basketItems)) ?? [];

const basketList = document.querySelector('.js-basket');
createMarcup(basketList, arrBasket);
console.log(basketList)


basketList.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault()
    
    if (e.target.classList.contains('js-information')) {
        const currentProduct = findProduct(e.target);
        //console.log(currentProduct)
        createModal(currentProduct)
    } else if (e.target.classList.contains('js-basketBtn')) {
        const currentProduct = findProduct(e.target);
        //console.log(currentProduct)
        const inBasket = arrBasket.some(({ id }) => id === currentProduct.id);
        if (inBasket) {
            return;
        }
        arrBasket.push(currentProduct);
        console.log(arrBasket)       
        localStorage.setItem(common.basketItems, JSON.stringify(arrBasket))
    }
};

