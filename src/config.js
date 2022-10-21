export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "4184e5eb217c25917620c65b18c083b7";
const tmdEndpoint = "https://api.themoviedb.org/3/movie";
const tmdEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetail: (movieId) => `${tmdEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieSearch: (query, page) =>
    `${tmdEndpointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
  getMovieMeta: (movieId, type) =>
    `${tmdEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
};
