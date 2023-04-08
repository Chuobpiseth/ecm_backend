const db = require("../config/DB.config")
const category = require("../route/category.route")
const getOne=(req,res)=>{
var category_id=req.params.id
var getOneSQL="SELECT * FROM category WHERE category_id =?"
var sqlparam=[category_id]
db.query(getOneSQL,sqlparam,(error,rows)=>{
    if(error){
        res.json({
            message:error
        })
    }else{
        res.json({
            data:rows
        })
    }
})
}
const getAll=(req,res)=>{
    var select="SELECT * FROM category"
    db.query(select,(error,rows)=>{
        if(error){
            res.json({
                message:error
            })
        }else{
            res.json({
                data:rows
            })
        }
    })
}
const create=(req,res)=>{
    var {name,description,image}=req.body
    if (name==null || name==""){
        res.json({
            error:true,
            message:"Plz fill the category name"
        })
    }
    var insertSQL="INSERT INTO category(name,description,image) VALUES (?,?,?);"
    var sqlparam=[name,description,image]
    db.query(insertSQL,sqlparam,(error,rows)=>{
        if(error){
            res.json({
                message:error,
            })
        }else{
            res.json({
                message:"created"
            })
         
        }
    })
}
const update=(req,res)=>{
    
}
const remove=(req,res)=>{
    res.json({
        message:"remove gategory"
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}