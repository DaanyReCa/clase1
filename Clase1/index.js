const fetchApi = require("./utils/api");

fetchApi("https://rickandmortyapi.com/api/character")
  .then((data) => {
    console.clear();
    for (let index = 0; index < data.results.length; index++) {
      let { id, name, status, species } = data.results[index];
      console.log(id, name, status, species);
    }
  })
  .catch((err) => console.log(err));
