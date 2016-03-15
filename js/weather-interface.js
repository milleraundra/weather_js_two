var apiKey = require('./../.env').apiKey;
var temperature = require('./../js/temperature-interface.js');

$(document).ready(function() {
  $("#weatherLocation").click(function(event) {
    event.preventDefault();
    var city = $("input#location").val();
    //use API key to do something
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey).then(function(response) {
      console.log(JSON.stringify(response));
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%")}).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
    });
  });
