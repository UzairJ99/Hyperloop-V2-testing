//2019-10-07 
//First version release COPY
//Uzair Jawaid + Sunny Bhatt
//Implementing changes to website to improve SEO, Mobile responsiveness, and user interactivity

//import modules
var express = require("express");
var app = express();
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//connect to MongoDB
//need to build separate cluster for database connection specifically for Hyperloop
//mongoose.connect(process.env.DATABASEURL, {useNewUrlParser: true});

//schema setup
var blogSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
    description: String,
    date: String
  }
);

//create mongo model to use schema
var Blog = mongoose.model("Blog", blogSchema);

//get today's date for the blog post
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

//sets main directory path to start in /public
app.use(express.static("public"));
//allows form information extraction
app.use(bodyParser.urlencoded({extended: true}));

//transporter goes here -- important -- make no changes
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'hyperloopmailman@gmail.com',
    pass: process.env.EMAILPASS
  }
});

//setting up email information -- important -- make no changes
var mailOptions = {
  from: 'hyperloopmailman@gmail.com',
  to: 'mcmasterhyperloopteam@gmail.com',
  subject: 'Hyperloop Website',
  text: ''
};

//sends an email using nodemailer
function sendIt()
{
  transporter.sendMail(mailOptions, function(error, info)
  {
    if (error) 
    {
      console.log(error);
    } else 
    {
      console.log('Email sent: ' + info.response);
    }
  });
}

//start up server on localhost:3000
app.listen(3000, function()
{
  console.log("server started.");
});

//Contact post route
app.post("/", function(req, res)
{
  //extract info from form
  var name = req.body.name;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var message = req.body.message;
  //compilation of all variables to form a message  
  var sendThis = "<p> Email sent from: " + name + lastName + '.</p><br>';
      sendThis += "<p> Their email is: " + email + '.</p><br>';
      sendThis += "<p> Their message is: " + message + '.</p><br>';

  //replaces nodemailer defualt text message
  mailOptions.html = sendThis;
  sendIt();
  //renders the landing page again
  res.render("index.ejs");
});

//router get methods to render each page
app.get("/", function(req, res)
{
  res.render("index.ejs");
});

app.get("/contact", function(req, res)
{
  res.render("contact.ejs");
});

app.get("/about", function(req, res)
{
  res.render("about.ejs");
});

app.get("/blog", function(req, res)
{
  //search database for all blogs and pass them through as allBlogs
  Blog.find({}, function(err, allBlogs)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      //render the page
      //the ejs file will reference each item from the database as 'blogs'
      res.render("blog.ejs", {blogs:allBlogs});
    }
  });

});

app.get("/ourTeam", function(req, res)
{
  res.render("ourTeam.ejs");
});

app.get("/partners", function(req, res)
{
  res.render("partners.ejs");
});

app.get("/ourPod", function(req, res)
{
  res.render("ourPod.ejs");
});