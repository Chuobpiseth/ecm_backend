const db = require("../config/DB.config")
const category = require("../route/category.route")

const getOne=(req,res)=>{
    var {id}=req.params
    db.query("SELECT * FROM category WHERE category_id =?",[id],(error,rows)=>{
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
                error:true,
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
    var {category_id,name,description,image}=req.body
    if (name==null || name==""){
        res.json({
            error:true,
            message:"Plz fill the category name!"
        })
    }else if(category_id==null ||category_id==""){
        res.json({
            error:true,
            message:"Plz fill the category category_id!"
        })
    }
    var sqlparam=[name,description,image,category_id]
    db.query("UPDATE category SET name=?, description=?, image=? WHERE category_id=?",sqlparam,(error,rows)=>{
        if(error){
            res.json({
                message:error,
            })
        }else{
            res.json({
                message:"Updated"
            })
         
        }
    })
}
const remove=(req,res)=>{
    var {id}=req.params
    db.query("DELETE FROM category WHERE category_id =?",[id],(error,rows)=>{
        if(error){
            res.json({
                message:error
            })
        }else{
            res.json({
                message:"Data has been deleted"
            })
        }
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}