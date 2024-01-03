import { instruments } from "../instruments";

function findProduct(el) {
    const li = el.closest('.js-card');
    //console.log(li)
    const productId = Number(li.dataset.productId);
    //console.log(productId)
    return instruments.find(({ id }) => id === productId);
};

export { findProduct };