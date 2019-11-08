// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient;
const { MongoClient,ObjectId } = require('mongodb')
const id = new ObjectId()
console.log(id);
console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'
MongoClient.connect(connectionURL,{ useNewUrlParser : true,useUnifiedTopology: true},(error,client)=>{
if(error)
{
  return console.log(error)
}
  const db = client.db(database)
  // db.collection('users').insertOne({

  //   name:'shivam',
  //   age: 31
  // },(error,result)=>{
  //   if(error)
  //   {
  //     return error
      
  //   }
  //   console.log(result.ops);


  // })
//  db.collection('users').insertMany([

//   {
//     name:'shubham',
//     age:30
//   },
//   {
//     name: 'shivam',
//     age:31
//   }

//  ], (error,result)=>{
//    if(error)
//    {
//      return error;
//    }
//    return console.log(result.ops)
//  })

// db.collection('tasks').insertMany([

//   {
//     desc : 'first',
//     completed: true
//   },
//   {
//     desc : 'two',
//     completed: true 
//   },
//   {
//     desc : 'three',
//     completed: false 
//   }

// ],(error,result)=>{
//   if(error)
//   {
//     return error
//   }
//   console.log(result.ops)
// })

// db.collection('users').findOne({name :'shubham'},(error,result)=>{
// if(error)
// {
//   return error;
// }
// console.log(result.age);

// })
// db.collection('users').find({ age: 31}).toArray((error,users)=>{

//   console.log(users);
// })
// db.collection('tasks').findOne({desc: 'first'},(error,result)=>{
// if(error)
// {
//   return error
// }
// console.log(result)

// })
// db.collection('tasks').find({desc:'first'}).toArray((error,result)=>{

//   console.log(result);
// })

// db.collection('users').updateOne({_id: new ObjectId('5db5a0655d9c35566cf96e8f')


// },
// {
// $set:{
//   name: 'satyam'
// },
// $inc:
// {
//   age:1
// }
// }).then((result)=>{

// console.log(result);

// }).catch((error)=>{

// console.log(error)
// })

// db.collection('tasks').updateMany({ completed: false},
//   {
//     $set:{
//       completed:true
//     }
//   }).then((result)=>{

//     console.log(result);
    
//     }).catch((error)=>{
    
//     console.log(error)
//     })

db.collection('users').deleteMany({

age: 31

}).then((result)=>{
console.log(result)

}).catch((error)=>{

  console.log(error)
})


})