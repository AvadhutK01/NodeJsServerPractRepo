const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminrouter = require('./RoutesFolder/admin')
const shoprouter = require('./RoutesFolder/shop')
const errController = require('./controllers/errorcontroller');
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminrouter);

app.use('/shop', shoprouter);

app.use(errController.getErrPage)

app.listen(4000);
