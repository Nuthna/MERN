const express = require('express')
const mongoose=require('mongoose')
const Product=require('./models/product')
const app = express()
app.use(express.json())
const port = 3000
// mongodb+srv://nandhu:nandhu@4141@nandhu.vdpmv.mongodb.net/?retryWrites=true&w=majority&appName=Nandhu


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect("mongodb+srv://nandhu:nandhu%404141@nandhu.vdpmv.mongodb.net/?retryWrites=true&w=majority&appName=Nandhu").then(()=>{
     console.log("mongodb connected successflly")
})
app.post('/api/addproductdata',async(req,res)=>{
    try{
        const xyz=new Product(req.body);
        await xyz.save()
        res.send("data saved successfully")
    }
    catch(error){
        console.log("adding product data failed")
    }
})
app.get('/api/getproductdata',async(req,res)=>{
    try{
        const abc=await Product.find();
    res.send(abc);
}
catch(error){
    console.log("adding product failed")
}
})