const express = require('express')
require('./db/mongoose')
// const Users = require('./model/users')
// const Tasks =require('./model/tasks')
const userRoute = require('./routers/user')
//const userRoute = require('./routers/task')
const taskRoute = require('./routers/task')
const bcrypt = require('bcryptjs')
const app = express()
const port = process.env.PORT || 3000


// app.use(( req, res , next ) => {
//     res.status(503).send('Site is currently down. check back soon!')
// })

// app.use(( req, res, next) => {

//     console.log(req.method,req.path)
//     if(req.method=='GET')
//     {
// res.send('Get request disabled')
//     }else{
//         next()
//     }
   
// })
app.use(express.json())
app.use(userRoute)
app.use(taskRoute)

const jwt = require('jsonwebtoken')
const myFunction = async () => {

    const token = jwt.sign({_id:'12345'},'thisisme',{expiresIn:'1 second'})
    const isMatch= jwt.verify(token,'thisisme')

    // console.log(token)
    // console.log(isMatch)
// const password = "red12345"
// const hashPassword = await bcrypt.hash(password,8)
// console.log(password)
// console.log(hashPassword)
// const isMatch = await bcrypt.compare('red12345',hashPassword)
// console.log(isMatch)
}
myFunction()
app.listen(port,()=>{

    console.log('server is running on port'+ port);
    
})