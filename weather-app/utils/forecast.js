const request = require('request');
const forecast = (latitude,longtitude,callback) =>
{
const url = 'https://api.darksky.net/forecast/d9636b0d88477cbdfb0a3f762138b1eb/'+ latitude + ',' + longtitude;
request({ url , json:true }, (error,{body}) => {
//console.log(url);

if(error)
{
 callback('unable to connect weather api', undefined);
}
else if(body.error)
{
    callback(body.error, undefined);
}
else{
    // console.log(response.body.currently.temperature + 'degree and the rain possibility' + response.body.currently.precipProbability);
    // //console.log(response.body.daily.data[0].summary + 'it is currently' + )

    callback('undefined',body.currently.temperature + 'degree and the rain possibility' + body.currently.precipProbability);
}

})
}
module.exports = forecast;