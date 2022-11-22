import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export const charactersAPI = {
  getCharacters(currentPage = 1) {
    return instance.get(`character/?page=${currentPage}`);
  },
};
