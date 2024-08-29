import { crateGalleryCardTemplate } from './js/render-functions.js';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { getPhotos } from './js/pixabay-api.js';

const searchFormEl = document.querySelector('.form');
const serachedInput = document.querySelector('.form input');
const galleryListEl = document.querySelector('.gallery-list');
const mainLoader = document.querySelector('.main-load-wrapper .loader');
const loadMoreBtn = document.querySelector('.loadMoreBtn');
const loadMoreWrapperLoader = document.querySelector(
  '.load-more-wrapper .loader'
);

let currentPage = 1;
let searchedValue = '';

const createSimpleLightBox = () => {
  return new SimpleLightbox('.image-container a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.8,
  });
};

const lightBox = createSimpleLightBox();

const renderPhotos = async event => {
  event.preventDefault();
  currentPage = 1;

  galleryListEl.innerHTML = '';
  searchedValue = searchFormEl.elements.user_query.value.trim();

  try {
    mainLoader.classList.remove('visually-hidden');
    const response = await getPhotos(searchedValue, currentPage);
    searchFormEl.reset();
    mainLoader.classList.add('visually-hidden');
    let responseDataArray = response.data.hits;
    if (searchedValue === '') {
      iziToast.error({
        title: 'Error',
        message: 'Please fill input field',
        position: 'topRight',
      });
      return;
    }
    if (responseDataArray.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry,there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      loadMoreBtn.classList.add('visually-hidden');
      galleryListEl.innerHTML = '';
      searchFormEl.reset();
      return;
    }

    const galleryCardTemplate = responseDataArray
      .map(image => crateGalleryCardTemplate(image))
      .join('');
    galleryListEl.insertAdjacentHTML('afterbegin', galleryCardTemplate);

    lightBox.refresh();
    loadMoreBtn.classList.remove('visually-hidden');
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Please check your internet connection and try again!',
      position: 'topRight',
    });
    serachedInput.textContent = '';
    mainLoader.classList.add('visually-hidden');
  }
};

const onLoadMoreBtn = async () => {
  currentPage++;
  console.log(currentPage);

  try {
    loadMoreBtn.classList.add('visually-hidden');
    loadMoreWrapperLoader.classList.remove('visually-hidden');
    const response = await getPhotos(searchedValue, currentPage);

    loadMoreBtn.classList.remove('visually-hidden');
    loadMoreWrapperLoader.classList.add('visually-hidden');
    let responseHitsArray = response.data.hits;
    let responseTotalHits = response.data.totalHits;
    const loadedImagesCount = currentPage * 15;

    if (loadedImagesCount >= responseTotalHits) {
      iziToast.info({
        title: 'info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      loadMoreWrapperLoader.classList.add('visually-hidden');
      loadMoreBtn.classList.add('visually-hidden');
    }
    loadMoreWrapperLoader.classList.add('visually-hidden');
    const galleryCardTemplate = responseHitsArray
      .map(image => crateGalleryCardTemplate(image))
      .join('');
    galleryListEl.insertAdjacentHTML('beforeend', galleryCardTemplate);
    makeScroll();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Please check your internet connection and try again!',
      position: 'topRight',
    });
    searchFormEl.elements.user_query.value = '';
    loadMoreWrapperLoader.classList.add('visually-hidden');
    loadMoreBtn.classList.remove('visually-hidden');
  }
};

function makeScroll() {
  const firstImageElement = document.querySelector('.gallery-list li');
  let boundingRect = firstImageElement.getBoundingClientRect();
  window.scrollBy({
    top: boundingRect.top * boundingRect.y,
    behavior: 'smooth',
  });
}

searchFormEl.addEventListener('submit', renderPhotos);

loadMoreBtn.addEventListener('click', onLoadMoreBtn);
