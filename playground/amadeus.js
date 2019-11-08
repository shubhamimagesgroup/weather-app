var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: 'rwNwBBAAO2Pnb6xpaWlTCdE653Gtkvuv',
  clientSecret: 'pCdaGggama2iG9p8'
});

// amadeus.referenceData.urls.checkinLinks.get({
//   airlineCode: 'BA'
// }).then(function(response){
//   console.log(response.data[0].href);
// }).catch(function(responseError){
//   console.log(responseError.code);
// });


amadeus.shopping.flightOffers.prediction.post(
    amadeus.shopping.flightOffers.get({ origin: 'NYC',
                                        destination: 'MAD',
                                        departureDate: '2020-04-01'
                                      }).body
     );
     amadeus.client.post('/v1/shopping/flight-offers/pricing', JSON.stringify({ body }));