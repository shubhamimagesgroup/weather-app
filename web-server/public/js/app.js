console.log('client side javascript file loaded');

const webform=document.querySelector('form');
const search = document.querySelector('input');
const messageOne= document.querySelector('#message-1');
const messageTwo= document.querySelector('#message-2');


webform.addEventListener('submit', (e) =>{
//console.log('testing');
const location = search.value;
// console.log(location);
 e.preventDefault();

if(!location)
{
    console.log('pls enter the location');
}
else{
    messageOne.textContent= 'Loading...';
    messageTwo.textContent= ' ';
    fetch('http://localhost:3000/weather?address='+location+'').then((response)=>{

response.json().then((data)=>{
    if(data.error)
    {
        messageOne.textContent= data.error;
       
    }
    else{
        //console.log(data[0].forecast)
        messageTwo.textContent=data[0].forecast;
        messageOne.textContent=data[1].location;
        
    }

})
})
}


})