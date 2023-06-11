const express = require("express");
const router = express.Router();
const BookController = require("../controllers/BookController");

router.get("/ping", (req, res) => {
  res.send("pong");
});

router.get("/books", BookController.getAll);
router.post("/books", BookController.add);
router.put("/books/:id", BookController.update);
router.delete("/books/:id", BookController.delete);

module.exports = router;
