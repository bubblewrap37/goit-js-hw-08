// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const markup = galleryItems
  .map(function (item) {
    const img = `<li><a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a></li>
`;
    return img;
  })
  .join('');

const gallery = document.querySelector('ul.gallery');
gallery.innerHTML = markup;

gallery.addEventListener('click', event => {
  event.preventDefault();

  const instance = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
});
