// Todays forcast, which is constant, is 293 Kelvin.
const kelvin = 0;
// The temperature in Celsius is equal to temperature in Kelvin less 273.
let celsius = kelvin - 273;
// The temperature in Fahrenheit is equal to the temperature in Celsius multiplied by nine-fifths plus 32.
let fahrenheit = (celsius * (9/5) + 32);
// This update to the fahrenheit variable will round down if the result is not a whole number.
let TEMPERATURE = Math.floor(fahrenheit);
// This string interpolation will return to the console log the statement with calculations complete "The temperature is X degrees Fahrenheit". 
console.log(`The temperature is ${TEMPERATURE} degrees Fahrenheit.`);
