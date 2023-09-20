const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productDataController')
const contactControllers = require('../controllers/contactController')
router.get("/add-product", productControllers.getData);
//app.get for get request and app.post for post request
router.post('/add-product', productControllers.postProductData);
router.get("/contact-us", contactControllers.getContactData);
router.post("/contact-us", contactControllers.postContactData);
module.exports = router;