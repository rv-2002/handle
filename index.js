var exprees=require('express');
var http=require('http');
var app=exprees();
var mongos=require('mongoose');
var hbs=require('hbs');
var body=require('body-parser');
var path=require('path');
var admin=require('./routes/route');
mongos.connect("mongodb+srv://raguvaranraguvaran020:raguragu@cluster0.aa4ub.mongodb.net/database");
app.use(body.urlencoded({extended:true}));

app.use(body.json());

app.set('views',path.join(__dirname,'views'));

app.set('view engine','hbs');

app.use(admin);
app.listen(4000,(req,res)=>
{
    console.log("connect!!!");
    
})

