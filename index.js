const http=require('http');
const server=http.createServer((req,res)=>{
    res.write("This is my first express server");
    res.write("this is second line in express jss");
    console.log("a request has come");
    res.end();
})
server.listen(4000,'127.0.0.1',()=>{
    console.log("the server is listning on port no 4000");
})