# Inin node project
    -has node in pc
    -create folder project (ecm_node_API)
    -goto root
    >npm init
# Create folder structure
 - create src
 src/config
 src/controller
 src/route
 src/util
# Install dependency
    -express js
        >npm install express
        >npm install mysql
# Route Param
   * parameter (query,params,body)
    #Query parameter
    re.query
        //ex: http://localhost:8080/api/customer/getList?name=data (name is key, data is value)
    #params parameter
    -res.params
        //ex: http://localhost:8080/api/customer/getList/:id need declare in route
        //ex: http://localhost:8080/api/customer/getList/101
    #body parameter
    -res.body
    *note in index.js // aoo.use(express.json())
        //ex: http://localhost:8080/api/customer/getList