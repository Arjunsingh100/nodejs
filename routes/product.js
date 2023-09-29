// const express = require('express');
// const router = express.Router();
// router.get('/product1',(req,res)=>{
//     res.send("This is the list of product");
// })
// router.get('/add',(req,res)=>{
//     res.send("Here you can add products in your product listp");
// })
// router.get('/see',(req,res)=>{
//     res.send("You can see item here")
// })
// module.exports=router;
const express = require('express');
const router =express.Router();

router.get('/productPage',(req,res)=>{
    const data=require('../data')
    res.render('index.ejs',{heading:"Amazon Website",data:data,size:data.length});
})

router.get("/productInfo",(req, res,next)=>{
   // res.send("getting all info of the products");
   console.log(req.url)
    console.log("hello this is req incompleted");
    next();
})

router.get("/productInfo", (req, res)=>{
   
    res.send("hello req is taken care of")
})
router.get("/productInfo/getdetails",(req, res)=>{
    res.send("hi req successfully termminated")
})

router.get("/getAllDetails",(req, res)=>{

    const data= require("../data");
    res.json(data);
})
router.get("/getdetails",(req, res)=>{
    const productId = req.query.productId;
    const color= req.query.color;
    console.log(productId);
    console.log(color);
    const data = require('../data');
    let result=[]
    console.log(productId ,color)
    data.forEach(element => {
        if(element.productId===Number(productId) && element.color===color ){
            result.push(element)
        }
    });
    res.json([...result]);

})

router.get("/deleteProduct",(req, res)=>{
    res.send("product has to be deleted")
})

module.exports= router;