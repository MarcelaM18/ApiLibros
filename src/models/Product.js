const mongoose = require('mongoose');
const { DOUBLE } = require('sequelize');

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: DOUBLE,
    required: true,
  },
  estado: {
    type: String,
    default: 'Activo',
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
