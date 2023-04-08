const express = require("express")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello welcome Node ")
})
require("./src/route/customer.route")(app)
require("./src/route/category.route")(app)

const port = 8080
app.listen(port,()=>{
    console.log("http://localhost:8080/")
})