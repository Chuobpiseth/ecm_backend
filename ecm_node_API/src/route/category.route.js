const contrl=require("../controller/category.controller")
const category =(app)=>{
    app.get("/api/category/get-all",contrl.getAll)
    app.get("/api/category/get-one/:id",contrl.getOne)
    app.post("/api/category/create",contrl.create)
    app.put("/api/category/update",contrl.update)
    app.delete("/api/category/remove",contrl.remove)
}
module.exports=category