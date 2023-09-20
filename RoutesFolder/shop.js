const express = require('express');
const rootdir = require('../util/paths')
const router = express.Router();
const productControllers = require('../controllers/productDataController')
const contactControllers = require('../controllers/contactController')
router.get("/", productControllers.getShop);
router.get("/success", contactControllers.getSuccess);

module.exports = router;
