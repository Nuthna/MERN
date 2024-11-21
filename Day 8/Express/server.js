const express = require('express')
const app = express()
const port = 3000
const bodyparser=require("body-parser");
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
// res.sendStatus(404);
// res.download("image.png")
})
// app.get('/products', (req, res) => {
//  res.send('you are on product page')
//     // res.sendStatus(404);
//     })

app.post("/postuserinfo",(req,res) => {
    const idd=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    res.send("data recieved successfully");
    res.send(JSON.stringify(req.body));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})