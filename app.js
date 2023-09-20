const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminrouter = require('./RoutesFolder/admin')
const shoprouter = require('./RoutesFolder/shop')

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminrouter);

app.use('/shop', shoprouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "pagenotfound.html"));
})

app.listen(4000);
