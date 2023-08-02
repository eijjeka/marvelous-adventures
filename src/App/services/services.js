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

export const getCharactersByFilter = async (name, nameComics, order, date) => {
  try {
    let url = `characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    if (name) {
      url += `&nameStartsWith=${name}`;
    }

    if (order) {
      url += `&orderBy=${order}`;
    }

    if (date) {
      url += `&modifiedSince=${date}`;
    }
    console.log("getCharacters", date);
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getComicsByFilter = async (title, format, order, startYear) => {
  try {
    let url = `comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    if (title) {
      url += `&titleStartsWith=${title}`;
    }

    if (format) {
      url += `&format=${format}`;
    }

    if (order) {
      url += `&orderBy=${order}`;
    }

    if (startYear) {
      url += `&startYear=${startYear}`;
    }
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getComicsById = async (comicsId) => {
  try {
    const response = await axios.get(
      `/comics/${comicsId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    return response.data.data.results[0];
  } catch (error) {
    console.log(error);
  }
};
export const getComicsCharactersById = async (comicsId) => {
  try {
    const response = await axios.get(
      `/comics/${comicsId}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getComicsCreatorsById = async (comicsId) => {
  try {
    const response = await axios.get(
      `/comics/${comicsId}/creators?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
