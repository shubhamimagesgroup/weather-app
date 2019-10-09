const request = require('request');
const geoCode = (address, callback)=>
{
 const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2h1YmhhbWNvbnRlY2dsb2JhbCIsImEiOiJjazFhbmQ5a2oyN2JqM2lwZm1rcTRteHE5In0.fq5rS8csjJZElV4pzWgRWw';
request({url:url,json:true},(error, {body})=>{
    //console.log(url);
if(error)
{
    callback('unable to connect to the api',undefined);
}
else if(body.features.length ===0)
{
    callback('unable to find location. Try another search',undefined);
}
else{
    callback(undefined,{
         latitude :body.features[0].center[1],
         longitude : body.features[0].center[0],
         location: body.features[0].place_name
    })
}

})
}
module.exports =geoCode;