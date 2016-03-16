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

var apiKey = require('./../.env').apiKey;
var temperature = require('./../js/temperature-interface.js').kelvinConvertFahrenheit;

var displayStuff = function(response, city, number) {
  $('#city_' + number).text("City: " + city);
  // console.log(JSON.stringify(response));
  $('#temperature_' + number).text("Temperature: " + kelvinConvertFahrenheit(response.main.temp));
  $('#weather_' + number).text("Weather: " + response.weather[0].main);
  $('#humidity_' + number).text("Humidity: " + response.main.humidity);
  $('#wind_' + number).text("Wind: " + response.wind.speed);
}

var getWeather2 = function(city) {
  $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey).then(function(response) {
    displayStuff(response, city, 2);
    // var city2 = $("input#location2").val();
    // getWeather(city2, 2);
    }).fail(function(error) {
      if(error.responseJSON) {
        $('.showWeather').text(error.responseJSON.message);
      } else if (error.responseText) {
        $('.showWeather').text(error.responseText);
      }
    });
}

$(document).ready(function() {
  $("#weatherConditions").click(function(event) {
    event.preventDefault();
    var city1 = $("input#location1").val();
    var city2 = $("input#location2").val();

    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city1 + "&appid=" + apiKey).then(function(response) {
      displayStuff(response, city1, 1);
      getWeather2(city2);
      }).fail(function(error) {
        if(error.responseJSON) {
          $('.showWeather').text(error.responseJSON.message);
        } else if (error.responseText) {
          $('.showWeather').text(error.responseText);
        }
      });

  });
});
