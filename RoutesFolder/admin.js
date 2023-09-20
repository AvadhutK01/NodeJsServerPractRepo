const express = require('express');

const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.send("<form action='/admin/add-product' method='POST'><lable for='title'>Product Title:</lable><input type='text' name='title'/><br><lable for='size'>Product Size:</lable><input type='text' name='size'/><br><button type='submit'>Add Product</button></form>");
});
//app.get for get request and app.post for post request
router.post('/add-product', (req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/shop/');
});

module.exports = router;