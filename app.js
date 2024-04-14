const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extend:true}));
app.use(express.static('public'));

const mongoose = require("mongoose");
//we have to connect app.js file with mongo db data base
mongoose.connect("mongodb://localhost:27017/todo");

//now create schema
const trySchema = new mongoose.Schema({
  name: String 
});

//now create model
const item = mongoose.model("task",trySchema);

const todo = new item({
  name: "Create some videos"
});

const todo2 = new item({
  name: "Learn DSA"
});

const todo3 = new item({
  name: "GO to GYM"
});

const todo4 = new item({
  name: "Netflix and CHILL"
});

// todo2.save();
// todo3.save();
// todo4.save();

app.get("/",function(req,res){
    item.find({},function(err,foundItems){
        if(err){
          console.log(err);
        }
        else{
          res.render("list",{dayej : foundItems});
        }
    });
});

//creating post request
app.post("/",function(req,res){
  const itemName = req.body.ele1;
  const todo4 = new item ({
      name : itemName
  });
  todo4.save();
  res.redirect("/");
});
//we have created item named variable and what ever value is entered in input box by user we are storing it in 'item' variable. input box is accessed by command : req,body.ele1 .ele1 is in the list.ejs file of view folder


// to display record on user screen when user will make a request. this is done by creating server using listen() function
app.listen("3000",function(){
  console.log("server is running")
});

//server will run at port no:3000
//now request is created using get function, which is written above, but its written after writting listen function