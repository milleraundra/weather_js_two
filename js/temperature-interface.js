function kelvinConverter(kelvin_input) {
  var kelvin = parseInt(kelvin_input);
  var fahrenheit = (1.8 * (kelvin-273)) + 32;
  return Math.round(fahrenheit);
};


$(document).ready(function() {
  $("#weatherTemperature").click(function(event) {
    event.preventDefault();
    var city = $("input#location").val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey).then(function(response) {
      $('.showWeather').text("The temperature in " + city + " is " + kelvinConverter(response.main.temp) + "°F")}).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
    });
  });
