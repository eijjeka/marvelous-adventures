import axios from "axios";
import md5 from "md5";

const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const ts = new Date().getTime();
// const ts = Math.floor(Date.now() / 1000);

const hash = md5(ts + privateKey + publicKey);

axios.defaults.baseURL = "http://gateway.marvel.com/v1/public/";

export function getRandomCharacters() {
  const offset = Math.floor(Math.random() * 1400);
  return axios
    .get(
      `characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=100&orderBy=modified`
    )
    .then((response) => {
      const characters = response.data.data.results;
      console.log(characters);
      const randomHeroes = [];

      for (let i = 0; i < characters.length; i++) {
        const { description, thumbnail } = characters[i];

        if (randomHeroes.length === 5) {
          return randomHeroes;
        } else if (
          thumbnail.path.indexOf("image_not_available") === -1 &&
          description !== ""
        ) {
          randomHeroes.push(characters[i]);
        }
      }
      return randomHeroes;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}
