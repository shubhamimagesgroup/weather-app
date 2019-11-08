const express = require('express')
const router = new express.Router()
const Users = require('../model/users')
const auth = require('../middleware/auth')


router.post('/users', async (req,res)=>{
    const user = new Users(req.body)
    try{
       
     await user.save()
     const token = user.generateAuthToken()
     res.status(201).send({user,token})
    }
    catch(e){
 res.status(400).send(e)
    }
 })

 router.post('/users/login', async (req, res) => {
    try {
        const user = await Users.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
       res.send({user,token})
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    
    try {
        req.user.token = req.user.token.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})


router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.token = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})
 
 router.get('/users', auth, async (req,res)=>{
 
     try{
 const user= await Users.find({})
 res.send(user)
     }catch(e)
     {
 res.status(500).send(e)
     }
 
 })


 router.get('/users/me', auth, async (req,res)=>{
 
    res.send(req.user)

})


 
 router.get('/user/:id',async (req,res)=>{
 
     try{
 const user = await Users.findById(req.params.id)
 if(!user)
 {
     return res.status(404).send()   
 }
 res.send(user)
     }catch(e)
     {
 res.status(500).send()
     }
 })
 
 router.patch('/users/me', auth, async(req,res)=>{
     const updates = Object.keys(req.body)
     const allowedUpdated = ['name','email','age','password']
     const isValidoperation = updates.every((update)=>{
         return allowedUpdated.includes(update)
     })
     if(!isValidoperation)
     {
         return res.status(400).send({error:'invalid request'})
     }
     
     try {
      
        
        //const user = await Users.findById(req.params.id)
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
         //const user = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
     
        //  if (!user) {
        //      return res.status(404).send()
        //  }
 
         res.send(user)
     } catch (e) {
         res.status(400).send(e)
     }
 
 })
 
 router.delete('/users/me', auth , async (req,res)=>{
 
     try{
//  const user = await Users.findByIdAndDelete(req.user._id)
//  if(!user)
//  {
//      res.status(404).send()
//  }
req.user.save()
 res.send(user)
     }catch(e)
     {
 res.status(500).send()
     }
 })


module.exports = router