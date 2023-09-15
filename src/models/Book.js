const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
