import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteBook } from "../dataSources/api";

const BookTable = ({ books, getAllBooks }) => {
  const navigate = useNavigate();

  const onDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      getAllBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-white">
        <thead class="text-xs uppercase bg-gray-700 text-white font-bold">
          <tr>
            <th scope="col" class="px-6 py-3">
              Judul
            </th>
            <th scope="col" class="px-6 py-3">
              Pengarang
            </th>
            <th scope="col" class="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr class="border-gray-700  bg-gray-800" key={book._id}>
              <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                {book.judul}
              </th>
              <td class="px-6 py-4">{book.pengarang}</td>
              <td class="px-6 py-4">
                <button
                  onClick={() => {
                    navigate("edit-buku/" + book._id);
                  }}
                  type="button"
                  class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Ubah
                </button>
                <button
                  onClick={(ev) => {
                    ev.preventDefault();
                    onDeleteBook(book._id);
                  }}
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
