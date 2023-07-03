import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 25,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const cachedData = localStorage.getItem(url);

  if (cachedData) {
    return JSON.parse(cachedData);
  } else {
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);

      localStorage.setItem(url, JSON.stringify(data));
      return data;
    } catch (error) {
      console.error('Error fetching data from API', error);
      throw error;
    }
  }
};
