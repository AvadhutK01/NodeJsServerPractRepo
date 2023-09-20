const express = require('express');
const path = require('path');
const rootdir = require('../util/paths')
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootdir, "views", "add-product.html"));
});
//app.get for get request and app.post for post request
router.post('/add-product', (req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/shop/');
});
router.get("/contact-us", (req, res, next) => {
    res.sendFile(path.join(rootdir, "views", "contact-us.html"));
});
router.post("/contact-us", (req, res, next) => {
    res.redirect('/shop/success');
});
module.exports = router;