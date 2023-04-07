const db = require("../config/DB.config")

const create =(req,res)=>{
   var body = req.body;
   var sqlInsert="INSERT INTO customers (firstname,lastname,gender,username,password) VALUES (?,?,?,?,?);"
   var paramInsert=[body.firstname,body.lastname,body.gender,body.username,body.password]
   db.query(sqlInsert,paramInsert,(error,rows)=>{
        if(error){
            res.json({
                error:true,
                message:error,
            })
        }else{
            res.json({
                message:"Insert Succeed",
                data:rows,
            })
        }
    })    
}
const getList =(req,res)=>{
    db.query("SELECT * FROM customers;",(error,rows)=>{
        if(error){
            res.json({
                error:true,
                message:error,
            })
        }else{
            res.json({
                list:rows,
            })
        }
    })
    
}
const getOne =(req,res)=>{
   var customer_id=req.params.id
   var sql ="SELECT * FROM customers WHERE customer_id =?"
   var sqlParams=[customer_id]
   db.query(sql,sqlParams,(error,rows)=>{
    if(error){
        res.json({
            message:error,
            error:true
        })
    }else{
        res.json({
            data:rows,
        })
    }
   })
}
const update =(req,res)=>{
var body=req.body
   var sql ="UPDATE customers SET firstname=?,lastname=?,gender=?,password=? WHERE customer_id=?"
   var sqlParams=[body.firstname,body.lastname,body.gender,body.password,body.customer_id]
   db.query(sql,sqlParams,(error,rows)=>{
    if(error){
        res.json({
            message:error,
            error:true
        })
    }else{
        res.json({
            data:rows,
        })
    }
   })
}
const remove =(req,res)=>{
    var customer_id=req.params.id
    var sql ="DELETE FROM customers WHERE customer_id =?"
    var sqlParams=[customer_id]
    db.query(sql,sqlParams,(error,rows)=>{
     if(error){
         res.json({
             message:error,
             error:true
         })
     }else{
         res.json({
             data:rows,
         })
     }
    })
}
module.exports={create,getList,getOne,update,remove}

