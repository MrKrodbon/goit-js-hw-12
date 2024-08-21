import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { fetchPhotos } from './pixabay-api.js';

const searchFormEl = document.querySelector('.form');
const galleryListEl = document.querySelector('.gallery-list');
const createLoaderTemplate = () => {
  return `<div class="loader"></div>`;
};

const crateGalleyCardTemplate = imgInfo => {
  return `
    <li class = "gallery-card">
      <div class="image-container">
          <a href="${imgInfo.largeImageURL}" class="original-image-link">
            <img class ="gallery-image" src="${imgInfo.webformatURL}" alt ="${imgInfo.tags}"/>
          </a>
          <div class ="gallery-image-info-container">
            <div class = "gallery-image-info">
                <p class ="gallery-text">Likes</p>
                <p class = "gallery-value">${imgInfo.likes}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Views</p>
              <p class = "gallery-value">${imgInfo.views}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Comments</p>
              <p class = "gallery-value">${imgInfo.comments}</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-text">Downloads</p>
              <p class = "gallery-value">${imgInfo.downloads}</p>
            </div>
          </div>
      </div>
    </li>
    `;
};

const createSimpleLightBox = () => {
  return new SimpleLightbox('.image-container a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.8,
  });
};

const onSearchFormSubmit = event => {
  let loader;
  galleryListEl.innerHTML = '';
  const searchedValue = searchFormEl.elements.user_query.value;
  loader = createLoader();
  galleryListEl.innerHTML = loader;
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
      galleryListEl.insertAdjacentHTML('beforeend', galleyCardTemplate);
      createSimpleLightBox();
    })
    .catch(error => {
      
      console.log(error);
    });
  event.preventDefault();
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
