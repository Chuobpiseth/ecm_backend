const customerController=require("../controller/customer.controller")
const customer = (app)=>{

    app.post("/api/customer/getList",customerController.getList)
    app.get("/api/customer/create",customerController.create)
    app.get("/api/customer/getOne/:id",customerController.getOne)
    app.put("/api/customer/update",customerController.update)
    app.delete("/api/customer/remove/:id",customerController.remove)
}

module.exports = customer