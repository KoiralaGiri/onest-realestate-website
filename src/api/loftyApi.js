// src/api/loftyApi.js
import axios from 'axios';

const loftyApi = axios.create({
  baseURL: 'https://api.lofty.com/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_LOFTY_API_KEY}`
  }
});

export default loftyApi;
