//jshint esversion:6

const express = require('express');

const app = express();

app.get("/", function(request, response){
    response.send("Hello");
});

app.get("/contact", function(request, response){
    response.send("Email me at: grant.keith@mail.mcgill.ca");
});

app.get("/about", function(request, response){
    response.send("My name is Grant and I love video games ;)");
});

app.get("/hobbies", function(request, response){
    response.send("Coffee, Code, and Beer");
});


app.listen(3000, function(){
    console.log("Server started on Port 3000");
});

