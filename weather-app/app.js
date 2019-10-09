
const geoCode = require('./utils/geocode');
const forecast  = require('./utils/forecast');
//console.log(process.argv[2]);
// const url = 'https://api.darksky.net/forecast/d9636b0d88477cbdfb0a3f762138b1eb/37.8267,-122.4233?units=si';
// request({ url: url , json:true }, (error,response) => {
// //console.log(response.body.currently);

// if(error)
// {
// console.log('unable to connect weather api');
// }
// else if(response.body.error)
// {
//     console.log(response.body.error);
// }
// else{
//     console.log(response.body.currently.temperature + 'degree and the rain possibility' + response.body.currently.precipProbability);
//     //console.log(response.body.daily.data[0].summary + 'it is currently' + )
// }

// })

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2h1YmhhbWNvbnRlY2dsb2JhbCIsImEiOiJjazFhbmQ5a2oyN2JqM2lwZm1rcTRteHE5In0.fq5rS8csjJZElV4pzWgRWw";
// request({url: geocodeURL, json:true}, (error,response)=>
// {
// if(error)
// {
// console.log('unable to connect location api')
// }
// else if(response.body.features.length ===0)
// {
// console.log('unable to find location. Try another search');
// }
// else{
//     const latitude= response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     //console.log(latitude);
// }
// });

const address = process.argv[2];
if(!address)
{
    console.log('Please provide an address');

}
else{
    geoCode(address, (error, {latitude,longitude,location}) => {
    if(error)
    {
        return console.log(error);
    }

   // console.log('Error',error);
   // console.log('Data',data);

   forecast(latitude,longitude,(error,forecastData) =>{
if(error)
{
    console.log(error);
}
    // console.log('Error',error);
    // console.log('Data',data)
    console.log(location);
  console.log(forecastData)
})

})
}


