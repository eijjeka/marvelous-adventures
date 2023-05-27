import axios from "axios";
import md5 from "md5";

axios.defaults.baseURL = "https://gateway.marvel.com/v1/public/";

const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

export const getRandomCharacters = async () => {
  try {
    const offset = Math.floor(Math.random() * 1460);
    const response = await axios.get(
      `characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=100&orderBy=modified`
    );
    return response.data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(
      `characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    console.log(response.data.data.results);
    return response.data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getCharterComicsById = async (id) => {
  try {
    const response = await axios.get(
      `characters/${id}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=3`
    );
    console.log(response.data.data.results);
    return response.data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getCharacterByName = async (name) => {
  try {
    if (name) {
      const response = await axios.get(
        `characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${name}`
      );
      return response.data.data.results;
    }
    return;
  } catch (error) {
    console.log(error);
  }
};
