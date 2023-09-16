const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const bookRoutes = require('./routes/bookRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(bodyParser.json());

// Conectar las rutas
app.use('/api', userRoutes);
app.use('/api', roleRoutes);
app.use('/api', bookRoutes);
app.use('/api', productRoutes);

module.exports = app;
