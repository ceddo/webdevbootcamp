
// packages
var express = require("express");
// since express is not a single-function package, we save it to variable 'app'
var app = express();

// "/" => "Hi there!"
// GET route has 2 arguments:
// the path, 
// and a callback function with 2 arguments: request, result
// however, 'send' won't work unless app.listen() is used to listen for requests.
app.get("/", function(req, res) {
    res.send("Hi there!");
})

// "/" => "Goodbye"

// "/" => "Woof"

app.get("/dog", function(req, res) {
    console.log("Someone made a /dog request.");
    res.send("Woof");
})

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("You're on the " + subreddit + " subreddit!");
});


app.get("*", function(req, res) {
    res.send("You're a star!");
})


// Tell Express to listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started.");
});