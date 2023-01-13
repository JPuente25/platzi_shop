import axios from "axios";

const API_KEY = "1af41b623e681d424fd48b25d8b33e10";

const fetchApi = axios.create({
   baseURL: "https://api.themoviedb.org/3",
   params: {
      api_key: API_KEY,
      language: 'en',
   },
});

export { fetchApi };
