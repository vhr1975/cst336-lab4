
// import Express library
const express = require("express");
// variable to access the methods
// exposes a top-level function
const app = express();

// creating a “route”
app.get("/", function(req, res){

    res.send("it works!");

});

// allow the server to listen for any request
// server listener
app.listen("8081", "127.0.0.1", function() {

    console.log("Express Server is Running...")

});