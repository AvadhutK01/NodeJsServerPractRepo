const path = require('path');
const express = require('express');
const rootdir = require('../util/paths')
const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
});
router.get("/success", (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'contactsuccess.html'));
});

module.exports = router;
