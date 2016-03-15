(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "2791a6a4c12b08ce1a402af7119f7da2";

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/temperature-interface.js":2}]},{},[3]);
