// packages
var express = require("express");
var app = express();

// tell express to serve directory contents
app.use(express.static("public"));

// routes
app.get("/", function(req,res) {
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
})

app.get("/posts", function(req,res) {
    var posts = [
        {title: "Post 1", author: "Susy"},    
        {title: "My adorable pet bunny", author: "Jared"},    
        {title: "I'm flying high", author: "Vivienne"}    
    ]
    res.render("posts.ejs", {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening.");
})
