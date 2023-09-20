
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
    res.send("<form action='/product' method='POST'><lable for='title'>Product Title:</lable><input type='text' name='title'/><br><lable for='size'>Product Size:</lable><input type='text' name='size'/><br><button type='submit'>Add Product</button></form>");
});
//app.get for get request and app.post for post request
app.post('/product', (req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
});
app.use("/", (req, res, next) => {
    res.send("<h1>Hello from Express</h1>");
});

app.listen(4000);
