const express = require('express');
const bodyParser = require('body-parser');

const adminrouter = require('./RoutesFolder/admin')
const shoprouter = require('./RoutesFolder/shop')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminrouter);

app.use('/shop', shoprouter);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(4000);
