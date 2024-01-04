// {
//       id: 2,
//       img: 'https://static.dnipro-m.ua/cache/products/5096/catalog_origin_271077.jpg',
//       name: 'Перфоратор',
//       price: 3948,
//       description:
//         'Перфоратор бочковий Dnipro-M ВН-20 використовується для виконання ',
//     },

// https://via.placeholder.com/300x300

function createMarcup(container, arr) {
  const marcup = arr.map(({ id, img, name }) =>
    `<li data-product-id="${id}" class="js-card card flip">
    <button type="button" class="delete js-delete"></button>
    <img class="front" src="${img}" alt="${name}">
<h2 class="title-name">${name}</h2>
<a href="#" class="js-information information-link">More information</a>
<div class="button-box">
  <button type="button" class="js-favorite btn">Add to favorite</button>
  <button type="button" class="js-basketBtn btn">Add to basket</button>
</div>
</li>`
    ).join('');
    container.innerHTML = marcup;
};

export { createMarcup };