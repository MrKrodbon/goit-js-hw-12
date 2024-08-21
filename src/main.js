import { crateGalleyCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const searchFormEl = document.querySelector('.form');
const galleryListEl = document.querySelector('.gallery-list');
const createSimpleLightBox = () => {
  return new SimpleLightbox('.image-container a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.8,
  });
};
const lightBox = createSimpleLightBox();

const onSearchFormSubmit = event => {
  galleryListEl.innerHTML = '';
  const searchedValue = searchFormEl.elements.user_query.value;

  if (searchedValue === '') {
    event.preventDefault();
    iziToast.error({
      title: 'Error',
      message: 'Please fill input field',
      position: 'topRight',
    });
    return;
  } else {
    galleryListEl.insertAdjacentHTML(
      'afterbegin',
      `<div class="loader"></div>`
    );
    let divLoader = document.querySelector('.loader');
    fetchPhotos(searchedValue)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            title: 'Error',
            message:
              'Sorry,there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
          galleryListEl.innerHTML = '';
          searchFormEl.reset();
          return;
        }
        divLoader.classList.add('visually-hidden');
        const galleyCardTemplate = data.hits
          .map(image => crateGalleyCardTemplate(image))
          .join('');
        galleryListEl.insertAdjacentHTML('afterbegin', galleyCardTemplate);
        lightBox.refresh();
      })
      .catch(error => {
        console.log(error.status);
      });
  }

  event.preventDefault();
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
