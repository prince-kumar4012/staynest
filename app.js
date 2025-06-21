const express = require("express");
const app = express();
const mongoose = require("mongoose");

// 3: connect database 
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main ()
 .then(() =>{
    console.log("connect the DB");
 })
 .catch((err) =>{
    console.log(err);
 });

async function main() {
    await mongoose.connect(MONGO_URL);
};

// 2: create Basic Api
app.get("/", (req, res) =>{
    res.send("Hi I am Root");
})

// 1:  server start kar rahe hai
app.listen(8080, () =>{
    console.log("server is listening to port 8080");
});