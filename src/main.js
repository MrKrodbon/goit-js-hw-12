import { crateGalleryCardTemplate } from './js/render-functions.js';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { getPhotos } from './js/pixabay-api.js';

const _searchFormEl = document.querySelector('.form');
const _serachedInput = document.querySelector('.form input');
const _galleryListEl = document.querySelector('.gallery-list');
const _mainLoader = document.querySelector('.main-load-wrapper .loader');
const _loadMoreBtn = document.querySelector('.loadMoreBtn');
const _loadMoreWrapperLoader = document.querySelector(
  '.load-more-wrapper .loader'
);

let _currentPage = 1;
let searchedValue;

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

  _galleryListEl.innerHTML = '';
  searchedValue = _searchFormEl.elements.user_query.value;

  try {
    _mainLoader.classList.remove('visually-hidden');
    const response = await getPhotos(searchedValue, _currentPage);
    _searchFormEl.reset();
    _mainLoader.classList.add('visually-hidden');
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
      _galleryListEl.innerHTML = '';
      _searchFormEl.reset();
      return;
    }

    const galleryCardTemplate = responseDataArray
      .map(image => crateGalleryCardTemplate(image))
      .join('');
    _galleryListEl.insertAdjacentHTML('afterbegin', galleryCardTemplate);

    lightBox.refresh();
    _loadMoreBtn.classList.remove('visually-hidden');
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Please check your internet connection and try again!',
      position: 'topRight',
    });
    _serachedInput.textContent = '';
    _mainLoader.classList.add('visually-hidden');
    _loadMoreBtn.classList.add('visually-hidden');
  }
};

const onLoadMoreBtn = async () => {
  const firstImageElement = document.querySelector('.gallery-list li');
  try {
    _currentPage++;
    _loadMoreBtn.classList.add('visually-hidden');
    _loadMoreWrapperLoader.classList.remove('visually-hidden');
    const response = await getPhotos(searchedValue, _currentPage);

    let responseHitsArray = response.data.hits;
    let responseTotalHits = response.data.totalHits;
    let totalPages = Math.ceil(responseTotalHits / responseHitsArray.length);

    console.log(totalPages);
    console.log(_currentPage);
    if (_currentPage >= totalPages) {
      iziToast.info({
        title: 'info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      _loadMoreWrapperLoader.classList.add('visually-hidden');
      _loadMoreBtn.classList.add('visually-hidden');
      return;
    } else {
      const galleryCardTemplate = responseHitsArray
        .map(image => crateGalleryCardTemplate(image))
        .join('');
      _galleryListEl.insertAdjacentHTML('beforeend', galleryCardTemplate);

      _loadMoreWrapperLoader.classList.add('visually-hidden');
      _loadMoreBtn.classList.remove('visually-hidden');

      let boundingRect = firstImageElement.getBoundingClientRect();
      console.log(boundingRect);
      window.scrollBy({
        top: boundingRect.top * boundingRect.y,
        behavior: 'smooth',
      });
      console.log(boundingRect);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Please check your internet connection and try again!',
      position: 'topRight',
    });
    _searchFormEl.elements.user_query.value = '';
    _loadMoreWrapperLoader.classList.add('visually-hidden');
    _loadMoreBtn.classList.remove('visually-hidden');
  }
};

_searchFormEl.addEventListener('submit', renderPhotos);

_loadMoreBtn.addEventListener('click', onLoadMoreBtn);
