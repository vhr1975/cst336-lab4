
const express = require("express");
const app = express();

app.get("/", function(req, res){

    res.send("it works!");

});

// server listener
app.listen("8081", "0.0.0.0", function() {

    console.log("Express Server is Running...")

});