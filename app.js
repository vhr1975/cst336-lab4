
// import Express library
const express = require("express");
// variable to access the methods
// exposes a top-level function
const app = express();
// render HTML
app.engine('html', require('ejs').renderFile);
// add static files folder 
app.use(express.static("public"));

// creating a “route”
app.get("/", function(req, res){

    res.render("index.html");

});

// creating a “route”
app.get("/mercury", function(req, res){

    res. render("mercury.html");

});

// creating a “route”
app.get("/venus", function(req, res){

    res.send("This will be Venus web page!");

});

// allow the server to listen for any request
// local server listener
// app.listen("8081", "127.0.0.1", function() {
// heroku server listner
app.listen(process.env.PORT, process.env.IP, function() {

    console.log("Express Server is Running...")

});