const express = require('express');
const router = new express.Router()
const Tasks =require('../model/tasks')
const auth = require('../middleware/auth')

router.post('/tasks',auth, async (req,res)=>{
    const tasks = new Tasks(req.body)
    try{
await tasks.save()
res.status(201).send(tasks)
 }catch(e)
    {
res.status(400).send(e)
    }

})

router.get('/tasks', async(req,res)=>{
try{
    const tasks= await Tasks.find()
    res.send(tasks)
}catch(e)
{
res.status(500).send(e)
}

})

router.get('/task/:id',async(req,res)=>{
    try{
        const taskid = await Tasks.findById(req.params.id)
        if(!taskid)
        {
            return res.status(404).send()
        }
        res.send(taskid)
    }catch(e)
    {
        res.status(400).send(e)
    }

})

router.patch('/tasks/:id', async(req,res) =>{

    //res.send(req.params.id)
const update = Object.keys(req.body)
const allowedUpdated = ['description','completed']
const isValidoperation = update.every((update)=> allowedUpdated.includes(update))

if(!isValidoperation)
{
    return res.status(400).send({error: 'invalid request'})
}
try{
const task = await Tasks.findById(req.params.id)
update.forEach((update)=> task[update]= req.body[update])
await task.save()


//const task = await Tasks.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators:true})
if(!task)
{
   return res.status(404).send()
}
 res.send(task);
}catch(e)
{
res.status(400).send(e)
}
})

router.delete('/tasks/:id', async (req,res)=>{
    try{
        const task = await Tasks.findByIdAndDelete(req.params.id)
        if(!task)
        {
            return res.status(400).send()
        }
        res.send(task)
    }catch(e)
    {
        res.status(400).send(e)
    }

  
})



module.exports = router


// Tasks.findById(req.params.id).then((task)=>{
// if(!task)
// {
// return res.status(400).send()
// }
// res.send(task)

// }).catch((e)=>{
//     res.status(404).send()
// })