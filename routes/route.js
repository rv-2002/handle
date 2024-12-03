var express=require('express');

var route=express.Router();

var user=require('../model/usermodel');

route.post('/new',async(req,res)=>
{
 const data=await user({
    name:req.body.name,
    age:req.body.age,
    email:req.body.email,
    pass:req.body.pass,
    mobile:req.body.mobile
 })
 data.save();
 res.redirect('views');
})
route.get('/',async(req,res)=>
{
    res.render('home');
})
route.get('/views',async(req,res)=>
{
    const data=await user.find();
    res.render('views',{data});
})

module.exports=route;