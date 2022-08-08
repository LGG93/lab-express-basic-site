const express = require("express");
const app = express ();

app.use(express.static(__dirname + "/public"));

app.get ("/", (req,res) => {
    res.sendFile(__dirname+"/views/index.html")
});

app.get ("/About", (req,res) => {
    res.sendFile(__dirname+"/views/about.html")
});
app.get ("/Work", (req,res) => {
    res.sendFile(__dirname+"/views/work.html")
});
app.get ("/Gallery", (req,res) => {
    res.sendFile(__dirname+"/views/gallery.html")
});

app.listen(3000, () => {
    console.log("listening on port 3000!");
});