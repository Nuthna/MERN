// server.mjs
const http=require("http");//getting http req


const server = http.createServer((req, res) => {//creating server and taking parameters
if (req.url=="/"){
    res.write("You are on main page")
    res.end();
}
if(req.url=="/product"){
    res.write("you are on product page")
    res.end();
}
if(req.url=="/electronics"){
    res.write("you are on electronics page")
    res.end();
}
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
