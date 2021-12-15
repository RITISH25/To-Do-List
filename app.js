// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
app.set('view engine', 'ejs');
const newentries = ["Read Newspaper","Practice DSA","Make Projects"];
const workList = [];
app.use(bodyParser.urlencoded({
  extended: true
}));
global.document = new JSDOM("list.ejs").window.document;
var button = document.getElementsByClassName('about');
button.onclick = function() {
  location.assign('https://stackoverflow.com/questions/52229901/navigate-to-route-on-button-click/');
}

app.use(express.static("public"));

app.get("/", function(req, res) {
 day = date.getDate();
  res.render("list", {
    listName: day,
    newentries: newentries
  });
});

app.post("/", function(req, res) {
  if(req.body.button === 'Work List'){
    const newWork = req.body.newentry;
    workList.push(newWork);
    res.redirect("/work");
  }
  else{
    console.log("hello");
    const newentry = req.body.newentry;
    newentries.push(newentry);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("list", {
    listName: "Work List",
    newentries: workList
  });
})

app.get("/about",function(req,res){
  res.render("about");
})


app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("Server started...");
})
