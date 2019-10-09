const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const geoCode = require('./utils/geocode');
const forecast  = require('./utils/forecast');

//setup static directory to serve static html files
const dirPath=path.join(__dirname,'../public');
app.use(express.static(dirPath));

// path to include common file eg; header,footer
const partialPath = path.join(__dirname,'../template/partials');
hbs.registerPartials(partialPath)

// setup handlebar engine and view location
const viewPath=path.join(__dirname,'../template/views');
app.set('view engine', 'hbs');
app.set('views',viewPath);

app.get('',(req,res)=>{
	res.render('index',{
		title:'Weather',
		author:'Shubham'
	});
})

app.get('/about',(req,res)=>{
res.render('about',{
	title:'About Us',
	author:'Shubham'
})
})


app.get('/help',(req,res)=>{
	res.render('help',{
		title: 'Help',
		author: 'shubham'
	})
})
app.get('/weather',(req,res)=>{
 if(!req.query.address)
 {
	 return res.send({error:'please provide the address'})
 }
 
 geoCode(req.query.address, (error, {latitude,longitude,location} = {} ) => {
    if(error)
    {
        return   res.send({error}) 
    }

   // console.log('Error',error);
   // console.log('Data',data);

   forecast(latitude,longitude,(error,forecastData) =>{
if(error)
{
   return res.send({error});
}
    // console.log('Error',error);
    // console.log('Data',data)
 
  res.send([{forecast:forecastData},
  {
	  location,
	  address:req.query.address
  }]);
})

})



})

app.get('/help/*',(req,res)=>{
res.render('404',{
	title:'404',
	author:'shubham',
	errorMsg:'Help article not found'
})
})




app.get('*',(req,res)=>{
res.render('404',{
	title:'404',
	author:'shubham',
	errorMsg:'404 Page not found'

})
})


app.listen(3000,()=>{

	console.log('server is up on 3000 port');
})