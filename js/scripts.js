
var carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances


//City1
$.simpleWeather({
  location: 98813,
  success: function(weather) {

    $('#city1 .image img').attr('src',weather.image);
    $('#city1 .city').text(weather.city);
    $('#city1 .temp').text(weather.temp);
    $('#city1 .time').text(weather.updated);
  }, 
  error: function(error) {
    console.log('Go outside!');
  }
});

//City2
$.simpleWeather({
  location: 11722,
  success: function(weather) {

    $('#city2 .image img').attr('src',weather.image);
    $('#city2 .city').text(weather.city);
    $('#city2 .temp').text(weather.temp);
    $('#city2 .time').text(weather.updated);
  }, 
  error: function(error) {
    console.log('Go outside!');
  }
});
// Geolocation Check
if('geolocation' in navigator){
  $('#geo').show();
  $('.no-geo').hide();
  
} else {
  
  $('#geo').hide();
  $('.no-geo').show();
 
}

// Get Weather
$('.button').click(function(){
 
     navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
       
       //Get Weather
       getWeather(lat + ',' + long);
       
       //Display Data
       
      });
});

//define get weather
var getWeather = function(location){
   $.simpleWeather({
    location: 'geolocation',
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#geo .image img').attr('src',weather.image);
      $('#geo .city').text(weather.city);
      $('#geo .temp').text(weather.temp);
      $('#geo .time').text(weather.updated);
        

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
};