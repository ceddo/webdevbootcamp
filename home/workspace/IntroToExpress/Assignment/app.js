// app.js

// packages
var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});


// speaking animals
app.get("/speak/:animal", function(req,res) {
    
    var animal = req.params.animal.toLowerCase();
 
    var sounds = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof woof!',
        rat: 'Squeek!',
    };
    
    var sound = sounds[animal];
    if (sound === undefined) {
        sound = '...';
    }
    
    res.send("The " + animal + " says '" + sound + "'");
});

// repeat a word
app.get("/repeat/:word/:timesToRepeat", function(req, res) {
    var word = req.params.word.toLowerCase();
    var times = req.params.timesToRepeat;
    
    // making final result
    var result = "";
    for (var i = 1; i <= times; i++) {
        result += word + " ";
    };
    res.send(result );
})

app.get("*", function(req, res) {
    res.send("Page not found.");
});

// Tell Express to listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started.");
});