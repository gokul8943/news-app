import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
console.log('API_KEY:', API_KEY); // 🔍 Check if key is available

const BASE_URL = 'https://newsapi.org/v2';

const handleMissingApiKey = () => {
  if (!API_KEY) {
    console.error('Missing NEXT_PUBLIC_NEWS_API_KEY. Please set it in your .env.local file.');
    return true;
  }
  return false;
};

export const fetchTopHeadlines = async (page = 1) => {
  if (handleMissingApiKey()) return { data: { articles: [] } };
  try {
    return await axios.get(`${BASE_URL}/top-headlines`, {
      params: { country: 'us', apiKey: API_KEY, page },
    });
  } catch (error) {
    console.error('Top headlines error:', error);
    return { data: { articles: [] } };
  }
};

export const fetchByCategory = async (category: string, page = 1) => {
  if (handleMissingApiKey()) return { data: { articles: [] } };
  try {
    return await axios.get(`${BASE_URL}/top-headlines`, {
      params: { category, country: 'us', apiKey: API_KEY, page },
    });
  } catch (error) {
    console.error('Category fetch error:', error);
    return { data: { articles: [] } };
  }
};

export const fetchByQuery = async (query: string, page = 1) => {
  if (handleMissingApiKey()) return { data: { articles: [] } };
  try {
    return await axios.get(`${BASE_URL}/everything`, {
      params: { q: query, apiKey: API_KEY, page },
    });
  } catch (error) {
    console.error('Query fetch error:', error);
    return { data: { articles: [] } };
  }
};


