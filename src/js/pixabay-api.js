import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const USER_KEY = '45503766-d567cf30782da5aa373afc201';

export const getPhotos = (searchQuery, currentPage) => {
  const axiosOptions = {
    params: {
      key: USER_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: currentPage,
    },
  };
  return axios.get(`/`, axiosOptions);
};
