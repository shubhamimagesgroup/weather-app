require('../src/db/mongoose')
const Tasks = require('../src/model/tasks')

// Tasks.deleteOne({_id: '5db7f6b6cd6d897f48cc8d49'}).then(()=>{
//    console.log('deleted')
//    return Tasks.countDocuments({ completed:false }).then((task)=>{
//        console.log(task)
//    }).catch((e)=>{
//        console.log(e)
//    })
// })

const deleteAndcount = async(id,completed)=>{
   const iid = await Tasks.findByIdAndDelete(id)
   const count = await Tasks.countDocuments({completed})
   return count
}
deleteAndcount('5db7fc8acd6d897f48cc8d4b',true).then((count)=>{
    console.log(count);
    
}).catch((e)=>{
    console.log(e);
    
})