import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import { onClose } from './close';

function createModal({ description, img, name, price }) {
 
    const instance = basicLightbox.create(
        `<div class="modal"><div class="modal-img">
<img src="${img}" alt="${name}" width="500">
</div>
<h2 class="modal-title">${name}</h2>
<h3 class="modal-price">${price} грн</h3>
<p>${description}</p>
</div>`,
        {
            handler: null,
            onShow(instance) {
                this.handler = onClose.bind(instance);
                document.addEventListener('keydown', this.handler)
             },
            onClose() { 
                document.removeEventListener('keydown', this.handler)
            }, 
        }
    );
instance.show()   
}

export {createModal}




/*<div class="gallery">
    <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
</div>
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});
*/