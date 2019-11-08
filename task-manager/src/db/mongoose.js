const mongoose = require('mongoose');

const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false
})

// const User = mongoose.model('Users',{
 
//     name:
//     {
// type: String,
// required:true,
// trim:true
//     },

//     email:
//     {
// type:String,
// required:true,
// trim:true,
// lowercase:true,
// validate(value)
// {
//     if(!validator.isEmail(value))
//     {
//         throw new Error('invalid email address')
//     }
// }
//     },

//     age:{
//  type: Number,
//  default:0,
//  validate(value)
// {
//     if(value<0)
//     {
//         throw new  Error('age must be positive number')
//     }
// }
//     },
//     password:
//     {
//         type:String,
//         required:true,
//         trim:true,
//         minlength:7,
//         validate(value)
//         {
//             if(value.toLowerCase().includes('password'))
//             {
//                 throw new Error('password can not contains "password"')
//             }
//         }
//     }
// })

// const me = new User({
//     name: 'shyam',
//     email:'Spandey@contecglobal.com    ',
//     age:27,
//     password:'password'
   
// })
// me.save().then(()=>{
//     console.log(me);
    
// }).catch((error)=>{
//     console.log(error);
    
// })

// const Tasks = mongoose.model('Tasks',{
//     description:{
//         type: String,
//         required:true,
//         trim:true
//     },
//     completed:{
//         type: Boolean,
//         default:false
//     }
// })

// const task = new Tasks({
//     description: '      third description   ',
    
// })

// task.save().then(()=>{
//     console.log(task);
    
// }).catch((error)=>{
//     console.log(error);
    
// })