import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');
createGallery(galleryItems);

function createGallery(items) {
  const previewGallery = items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img 
                class="gallery__image"
                src="${preview}" 
                alt="${description}" 
            />
        </a>        
        `;
    })
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', previewGallery);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 1,
});
