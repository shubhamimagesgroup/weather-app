require('../src/db/mongoose')
const User = require('../src/model/users')



// User.findByIdAndUpdate('5db7f370aadde63afcaea546',{age:27}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({ age: 0 })
    
// }).then((result)=>{
//     console.log(result);
    
// }).catch((e)=>{
//     console.log(e);
    
// })

const updateAgeandCount = async (id,age)=>{
const user = await User.findByIdAndUpdate(id,{age})
const count = await User.countDocuments({age})
return count
}
updateAgeandCount('5db7f370aadde63afcaea546',2).then((count)=>{
    console.log(count)
    
}).catch((e)=>{

    console.log(e);
    
})