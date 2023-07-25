const express = require("express");

const app = express();

const drinks = require("./models/drinks.js")

const foods = require("./models/foods.js")


app.get("/" , (req,res) =>{
    res.send("Welcome to Gitpub App!");
});

app.get("/drinks", (req,res) => {
    res.send(drinks)
    
});
app.get("/foods", (req,res) => {
    res.send(foods)
})


//show route


app.get("/drinks/:id", (req,res) => {
    res.render("drinks_show.ejs", { 
        drink: drinks[req.params.id],
        
    })
});

app.get("/foods/:id", (req,res) => {
    res.render("food_show.ejs", {
        food: foods[req.params.id],
       
    })
})
app.get("/GitpubMenu", (req,res) => {
    res.render("drinks_index.ejs", {
        drinks,
        foods,
       
    })
})

// app.get('/drinks/:id', (req, res) => {
//     const id = req.params.id;
//     if (id >= 0 && id < drinks.length) {
//       const drink = drinks[id];
//       res.render('drinks_show.ejs', { drink });
//     } else {
//       res.send('Drink not found');
//     }
//   });
  





app.listen(2000 ,() => {
    console.log("server is listening on port 2000");
});