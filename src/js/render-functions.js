import { fetchPhotos } from './pixabay-api.js';

const searchFormEl = document.querySelector('.form');
const galleryListEl = document.querySelector('.gallery-list');

const crateGalleyCardTemplate = imgInfo => {
  return `<li class = "gallery-card">
        <img class ="gallery-image" src="${imgInfo.webformatURL}" alt ="${imgInfo.tags}"
    </li>
    `;
};

const onSearchFormSubmit = event => {
  const searchedValue = searchFormEl.elements.user_query.value;
  fetchPhotos(searchedValue)
    .then(data => {
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
