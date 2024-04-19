const express = require('express')
const mongoose = require('mongoose');
const productRouter = require('./routes/productRoute.js')
const productModel = require('./models/productsModel.js')

const app = express();


const url = "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.jahf7c0.mongodb.net/$_DB_Name_$?retryWrites=true&w=majority&appName=Cluster0"

const dataBaseUser = 'harshitsisodia789';
const dataBasePassword = '1234';
const dataBaseName = 'Amazon-Backend'

const dbLink = url.replace('$_USERNAME_$', dataBaseUser).replace('$_PASSWORD_$', dataBasePassword).replace('$_DB_Name_$', dataBaseName)

mongoose.connect(dbLink)
    .then(() => console.log('Connected!'));



app.use('/api/products', productRouter);

app.listen(1164, (req, res) => {
    console.log("Server started");

})