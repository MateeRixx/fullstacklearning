const http = require("http")
const fs=require("fs")
const path = require("path")

const port=3000;


// how to make a server 

const server=http.createServer((req,res)=>{

    // what to do is request url is just a "/"

   const filePath= path.join(__dirname,req.url==='/' ? "index.html" : req.url);



  


   const extName=path.extname(filePath).toLowerCase();


   const mimeTypes = {
       '.html': "text/html",
       '.css': "text/css",
       '.js': "text/javascript"
   };

   const contentType = mimeTypes[extName] || 'application/octet-stream';

   fs.readFile(filePath, (err, content) => {
       if (err) {
           if (err.code === "ENOENT") {
               res.writeHead(404, { "Content-Type": 'text/html' });
               res.end("404: File Not Found");
           } else {
               res.writeHead(500, { "Content-Type": 'text/html' });
               res.end("500: Internal Server Error");
           }
       } else {
           res.writeHead(200, { 'Content-Type': contentType });
           res.end(content, 'utf-8');
       }
   });
   

});


server.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);

})

console.log(ans);

// 


