const path = require('path');
const rootdir = require('../util/paths')
exports.getData = (req, res, next) => {
    res.sendFile(path.join(rootdir, "views", "add-product.html"));
};
exports.postProductData = (req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/shop/');
};
exports.getShop = (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
};