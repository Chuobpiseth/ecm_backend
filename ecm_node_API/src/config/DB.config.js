const mysql =require("mysql")
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecm_backend_g2'
  });

module.exports=db