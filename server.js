const express  = require('express');
const app = express();
var bodyParser = require('body-parser')
const path=require('path')
const userRouter=require('./routes/user');
const productInfo = require('./routes/product');

app.set('view engine','ejs');
app.set('veiws',path.join(__dirname+'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})) 

app.use('/',(req,res,next)=>{
    next();
})
app.use("/",express.static(__dirname+"/public"))
app.use('/user',userRouter);
app.use('/product',productInfo);
// app.get('/home',(req,res)=>{
//     res.send("this is home page ")
// })
// app.get('/about',(req,res)=>{
// res.send("<h1>This is about about</h1>")
// })
// app.get('/',(req,res)=>{
// res.send("Here is an error")
// })
app.listen(3000,()=>{
    console.log("this server is listning on port no 3000");
})