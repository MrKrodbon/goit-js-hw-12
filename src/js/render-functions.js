export const crateGalleryCardTemplate = imgInfo => {
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
