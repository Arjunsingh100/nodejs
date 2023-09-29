const express=require('express');
const router=express.Router();
const bb=require('../utils/busboyutil');

router.post("/signin",(req, res)=>{
    console.log(req.body.username)
    res.send("user has to signin");
})
router.get("/signup",(req, res)=>{
    res.send("user has to sign up")
})

router.post('/login',bb,(req,res)=>{
    // const userData=require('../data');
    // console.log("form body",req.body);
    console.log("form body");
    res.send("sent successfullty");
})

router.get('/signout',(req,res)=>{
    res.send("This is sign out page and you can sign out here")
})
router.get('/change',(req,res)=>{
    res.send("here you can change your info")
})
module.exports=router;