import axios from "axios";

const BASE_URL = "http://localhost:2510/";

export const getBooks = async () => {
  try {
    const { data } = await axios.get(BASE_URL + "books");
    return data.data;
  } catch (error) {
    return null;
  }
};

export const getBookById = async (id) => {
  try {
    const { data } = await axios.get(BASE_URL + "books/" + id);
    return data.data;
  } catch (error) {
    return null;
  }
};

export const addBook = async (payload) => {
  try {
    await axios.post(BASE_URL + "books", payload);
    return "success";
  } catch (error) {
    return null;
  }
};

export const updateBook = async (id, payload) => {
  try {
    await axios.put(BASE_URL + "books/" + id, payload);
    return "success";
  } catch (error) {
    return null;
  }
};

export const deleteBook = async (id) => {
  try {
    await axios.delete(BASE_URL + "books/" + id);
    return "success";
  } catch (error) {
    return null;
  }
};
