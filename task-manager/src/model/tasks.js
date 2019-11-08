const mongoose = require('mongoose')
const validator = require('validator')
const taskSchema = mongoose.Schema({
    description:{
        type: String,
        required:true,
        trim:true
    },
    completed:{
        type: Boolean,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})
const Tasks = mongoose.model('Tasks',taskSchema)

// const task = new Tasks({
//     description: '      third description   ',
    
// })

// task.save().then(()=>{
//     console.log(task);
    
// }).catch((error)=>{
//     console.log(error);
    
// })
module.exports = Tasks