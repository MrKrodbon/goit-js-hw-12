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
  event.preventDefault();
  galleryListEl.innerHTML = '';
  const searchedValue = searchFormEl.elements.user_query.value;

  if (searchedValue === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please fill input field',
      position: 'topRight',
    });
    return;
  } else {
    // galleryListEl.insertAdjacentHTML(
    //   'afterbegin',
    //   `<div class="loader"></div>`
    // );
    let divLoader = document.querySelector('.loader');
    divLoader.classList.remove('visually-hidden');
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
          divLoader.classList.add('visually-hidden');
          return;
        }
        divLoader.classList.add('visually-hidden');
        const galleyCardTemplate = data.hits
          .map(image => crateGalleyCardTemplate(image))
          .join('');
        galleryListEl.insertAdjacentHTML('afterbegin', galleyCardTemplate);
        searchFormEl.elements.user_query.value = '';

        lightBox.refresh();
      })
      .catch(() => {
        iziToast.error({
          title: 'Error',
          message: 'Please check your internet connection and try again!',
          position: 'topRight',
        });
        divLoader.classList.add('visually-hidden');
      });
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
