const http=require("http");//getting http req
const fs=require("fs");
const server = http.createServer((req, res) => {
    fs.readFile("filedata.txt",(err,data)=>{
        res.write(data);
        res.end();
    });
});

server.listen(3000,"127.0.0.1",()=>{
    console.log("Listening on 127.0.0.1:3000");
});