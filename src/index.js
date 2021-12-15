const express = require('express');



const productController = require('./controllers/product.controllers')

const app = express();

app.use(express.json());


app.use(express.static("public")) // for adding js and css file

app.set("view engine", "ejs")

app.use('/products', productController);

module.exports = app;