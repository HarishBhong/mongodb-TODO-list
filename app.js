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

todo.save();