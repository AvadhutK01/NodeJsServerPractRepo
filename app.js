
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("in the middlewarer");
    next();// allows request to continue to next middleware
})

app.use((req, res, next) => {
    console.log("in  another the middlewarer");
    res.send({ key1: "value" });
})

app.listen(4000)
