const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Rutas para libros
router.get('/product', ProductController.getAllProducts);
router.get('/product/:id', ProductController.getProductById);
router.post('/product', ProductController.createProduct);
router.put('/product/:id', ProductController.updateProduct);
router.delete('/product/:id', ProductController.deleteProduct);

module.exports = router;
