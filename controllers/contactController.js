const path = require('path');
const rootdir = require('../util/paths')
exports.getContactData = (req, res, next) => {
    res.sendFile(path.join(rootdir, "views", "contact-us.html"));
};
exports.postContactData = (req, res, next) => {
    res.redirect('/shop/success');
};
exports.getSuccess = (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'contactsuccess.html'));
};