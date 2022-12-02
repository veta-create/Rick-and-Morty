import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export const charactersAPI = {
  getCharacters(currentPage = 1) {
    return instance.get(`character/?page=${currentPage}`);
  },
  getCharactersByFilter(
    currentPage = 1,
    status = null,
    gender = null,
    name = null
  ) {
    let currentInstance = `character/?page=${currentPage}`;
    if (status !== "all") {
      currentInstance += `&status=${status}`;
      console.log(currentInstance);
    }

    if (gender !== "all") {
      currentInstance += `&gender=${gender}`;
    }

    if (name !== null) {
      currentInstance += `&name=${name}`;
    }
    return instance.get(currentInstance);
  },
};
