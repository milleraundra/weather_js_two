function kelvinConvertFahrenheit(kelvin_input) {
  var kelvin = parseInt(kelvin_input);
  var fahrenheit = (1.8 * (kelvin-273)) + 32;
  return Math.round(fahrenheit);
}

function kelvinConvertCelsius(kelvin_input) {
  var kelvin = parseInt(kelvin_input);
  var celsius = kelvin_input - 273.15;
  return Math.round(celsius);
}

//Fahrenheit button
$(document).ready(function() {
  $("#weatherTempFahrenheit").click(function(event) {
    event.preventDefault();
    var city = $("input#location").val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey).then(function(response) {
      $('.showWeather').text("The temperature in " + city + " is " + kelvinConvertFahrenheit(response.main.temp) + "°F")}).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
    });
  });

//Celsius button
  $(document).ready(function() {
    $("#weatherTempCelsius").click(function(event) {
      event.preventDefault();
      var city = $("input#location").val();
      $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey).then(function(response) {
        $('.showWeather').text("The temperature in " + city + " is " + kelvinConvertCelsius(response.main.temp) + "°C")}).fail(function(error) {
          $('.showWeather').text(error.responseJSON.message);
        });
      });
    });

//Kelvin Button
    $(document).ready(function() {
      $("#weatherTempKelvin").click(function(event) {
        event.preventDefault();
        var city = $("input#location").val();
        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey).then(function(response) {
          $('.showWeather').text("The temperature in " + city + " is " + response.main.temp + "°K")}).fail(function(error) {
            $('.showWeather').text(error.responseJSON.message);
          });
        });
      });
