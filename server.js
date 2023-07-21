const express = require("express");

const app = express();
const drinks = require("./models/drinks.js")

const foods = require("./models/food.js")


app.get("/" , (req,res) =>{
    res.send("Welcome to Gitpub App!");
});

app.get("/drinks", (req,res) => {
    res.send(drinks)
    
});


//show route


app.get("/drinks/:id", (req,res) => {
    res.render("index.ejs",{
        drink: drinks[req.params.id]
    })
});



app.get("/foods/:id", (req,res) => {
    res.send(foods[req.params.id])
})

app.listen(3000 ,() => {
    console.log("server is listening on port 3000");
});