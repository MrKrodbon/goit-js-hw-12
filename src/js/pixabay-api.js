export const fetchPhotos = searchQuery => {
  const URL = 'https://pixabay.com/api/';
  const USER_KEY = '45503766-d567cf30782da5aa373afc201';

  const urlParams = new URLSearchParams({
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  console.log(urlParams.toString());
  return fetch(`${URL}?key=${USER_KEY}&${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
