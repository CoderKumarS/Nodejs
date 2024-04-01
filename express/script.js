const { error } = require('console');
const express = require('express');
const app = express();
const port = 3000;

// app.use(function (request, response, next) {
//     console.log("Middlweware");
//     next();
// });
//for using static files
app.use(express.static('./public'));

//for using ejs files
app.set("view engine", "ejs");

//index.ejs file in views
app.get('/', function (req, res) {
    res.render("index",{Resume:"Resume",Contact:"Contact", Projects:"Projects"});
});

//contact.ejs file in views
app.get('/contact', function (req, res) {
    res.render("contact");
});

// for dynamic routing
app.get('/:username', function (req, res) {
    res.send(`Dynamic Page from ${req.params.username}`);
});

//for errors
app.get('/error', function (req, res, next) {
    throw Error("Something went Wrong");
});
app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', {error:err});
});
app.listen(port, () =>
    console.log(`Example app listening on localhost:${port} !`)
);