import iziToast from 'izitoast';
import { fetchPhotos } from './pixabay-api.js';

const searchFormEl = document.querySelector('.form');
const galleryListEl = document.querySelector('.gallery-list');

const crateGalleyCardTemplate = imgInfo => {
  return `
    <li class = "gallery-card">
      <div class=image-container>
          <img class ="gallery-image" src="${imgInfo.webformatURL}" alt ="${imgInfo.tags}"/>
            <div class = "gallery-image-info">
              <p class ="gallery-image-popularity">Likes</p>
              <p>Number</p>
               
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-image-popularity">Likes</p>
                 <p>Number</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-image-popularity">Likes</p>
                 <p>Number</p>
            </div>
            <div class = "gallery-image-info">
              <p class ="gallery-image-popularity">Likes</p>
                 <p>Number</p>
            </div>
      </div>
    </li>
    `;
};

const onSearchFormSubmit = event => {
  galleryListEl.innerHTML = '';
  const searchedValue = searchFormEl.elements.user_query.value;
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
      const galleyCardTemplate = data.hits
        .map(image => crateGalleyCardTemplate(image))
        .join('');
      galleryListEl.insertAdjacentHTML('beforeend', galleyCardTemplate);
    })
    .catch(error => {
      console.log(error);
    });
  event.preventDefault();
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
