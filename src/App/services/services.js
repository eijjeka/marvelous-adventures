import axios from "axios";
import md5 from "md5";

axios.defaults.baseURL = "https://gateway.marvel.com/v1/public/";

const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

export const getRandomCharacters = async () => {
  const offset = Math.floor(Math.random() * 1460);
  try {
    const response = await axios.get(
      `characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=50&orderBy=modified`
    );
    return response.data.data.results;
  } catch (error) {
    console.log(error);
  }

  // const randomHeroes = [];

  // for (let i = 0; i < characters.length; i++) {
  //   const { description, thumbnail } = characters[i];

  //   if (randomHeroes.length === 5) {
  //     return randomHeroes;
  //   } else if (
  //     thumbnail.path.indexOf("image_not_available") === -1 &&
  //     description !== ""
  //   ) {
  //     randomHeroes.push(characters[i]);
  //   }
  // }
  // return randomHeroes;
};
