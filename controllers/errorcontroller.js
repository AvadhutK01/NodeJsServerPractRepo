const path = require('path');
exports.getErrPage = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "pagenotfound.html"));
};