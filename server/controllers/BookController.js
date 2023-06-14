const BookModel = require("../models/Books");

class BookController {
  static async getAll(req, res) {
    try {
      const books = await BookModel.find();
      res.status(200).json({ status: "success", data: books });
    } catch (error) {
      res.status(500).json({ status: "fail", error: error });
    }
  }

  static async getById(req, res) {
    try {
      const id = req.params.id;
      const book = await BookModel.findById(id);
      res.status(200).json({ status: "success", data: book });
    } catch (error) {
      res.status(500).json({ status: "fail", error: error });
    }
  }

  static async add(req, res) {
    try {
      const bookPayload = {
        judul: req.body.judul,
        pengarang: req.body.pengarang,
      };
      const book = await BookModel.create(bookPayload);
      res.status(201).json({ status: "success", data: book });
    } catch (error) {
      res.status(500).json({ status: "fail", error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const bookId = req.params.id;
      const bookPayload = {
        judul: req.body.judul,
        pengarang: req.body.pengarang,
      };
      const book = await BookModel.findByIdAndUpdate(bookId, bookPayload, {
        new: true,
      });
      res.status(200).json({ status: "success", data: book });
    } catch (error) {
      res.status(500).json({ status: "fail", error: error });
    }
  }

  static async delete(req, res) {
    try {
      const bookId = req.params.id;
      await BookModel.findByIdAndDelete(bookId);
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ status: "fail", error: error });
    }
  }
}

module.exports = BookController;
