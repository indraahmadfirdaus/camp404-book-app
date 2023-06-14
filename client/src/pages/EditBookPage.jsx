import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, updateBook } from "../dataSources/api";
import Layout from "./Layout";

const EditBookPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [book, setBook] = useState({});
  const [bookPayload, setBookPayload] = useState({});

  const onSubmitEditBook = async (ev) => {
    ev.preventDefault();
    const res = await updateBook(params.id, bookPayload);
    if (res) {
      navigate("/");
    } else {
      console.log("error update book");
    }
  };

  const onFetchBook = async () => {
    const data = await getBookById(params.id);
    if (data) {
      setBook(data);
    } else {
      console.log("error get book by id");
    }
  };

  useEffect(() => {
    if (params) {
      onFetchBook();
    }
  }, [params]);

  return (
    <Layout>
      <div className="flex items-center w-full">
        <p className="text-white mb-4 text-2xl font-bold mr-auto">
          Ubah Data Buku
        </p>
      </div>

      <form>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-white">
            Judul Buku
          </label>
          <input
            defaultValue={book.judul}
            onChange={(ev) => {
              setBookPayload({
                ...bookPayload,
                judul: ev.target.value,
              });
            }}
            type="text"
            class=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-white">
            Pengarang
          </label>
          <input
            defaultValue={book.pengarang}
            onChange={(ev) => {
              setBookPayload({
                ...bookPayload,
                pengarang: ev.target.value,
              });
            }}
            type="text"
            class=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-start"></div>
        <button
          onClick={(ev) => {
            onSubmitEditBook(ev);
          }}
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ubah
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          type="button"
          class="ml-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-12 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Batal
        </button>
      </form>
    </Layout>
  );
};

export default EditBookPage;
