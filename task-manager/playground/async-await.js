const dowork = async ()=>{
    throw new Error('something went wrong')
    return "test"
}

dowork().then((result)=>{

console.log(result);

}).catch((e)=>{
    console.log(e);
    
})