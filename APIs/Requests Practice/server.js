const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    const query = req.body.cityName;
    const appID = "17c8c71bc123fbf4387a3c552c42e43b";
    const units = "metric";
    
    const urlOpenWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appID + "&units=" + units;
    
    https.get(urlOpenWeather, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp =  parseInt(weatherData.main.temp);
            const weatherDescription = weatherData.weather[0].description;
            const icon =  weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            console.log(weatherDescription);
            
            res.write("<h1>" + query + "<h1>");
            res.write("<h2>The weather is currently " + weatherDescription + "<h2>");
            res.write("<h3>The temperature in london is " + temp + " degrees Celsius<h3>");
            res.write("<img src=" + imageURL + ">");

            res.send();
        });
    });
    console.log("Post recieved");
});




app.listen(3000, function(){
    console.log("Server is running on port 3000");
});