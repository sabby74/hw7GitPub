const express = require("express");

const app = express();
const drinks = require("./models/drinks.js")


app.get("/" , (req,res) =>{
    res.send("Welcome to Gitpub App!");
});

app.get("/drinks/", (req,res) =>{
    res.render("index.ejs",{
        drinks: drinks[req.params.id]
    })
})


app.listen(3000 ,() => {
    console.log("server is listening on port 3000");
});