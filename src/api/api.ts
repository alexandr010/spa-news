import { stringify } from 'querystring';

const API_URL = 'https://newsapi.org/v2/';

const defaultParams = {
  apiKey: '6ed55a307d1c432a9edf8bd24ffa51f7',
  country: 'us',
};

export const getNews = async (q?: string) => {
  const params = {
    ...defaultParams,
    ...(q && {
      q,
    }),
  };
  const res = await fetch(`${API_URL}top-headlines?${stringify(params)}`);

  return res.json();
};

export const getByTitle = async (title: string) => {
  const params = {
    ...defaultParams,
    q: title,
  };

  const res = await fetch(`${API_URL}top-headlines?${stringify(params)}`);

  return res.json().then(response => response.articles[0]);
};
