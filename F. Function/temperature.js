/* Problem-6

Write a function to convert temperature from Celsius to Fahrenheit. & Celsius to kelvin & fahrenheit to celsius.

*/

// Celsius to Fahrenheit 
function convertTemp(temperature) {
    const celsiusToFahrenheit = temperature * (9 / 5) + 32;
    const celsiusToKelvin = temperature + 273.15;
    const fahrenheitCelsius = parseFloat((temperature - 32) * 5 / 9).toFixed(2);
    const result = 'Temperature is= ' + celsiusToFahrenheit + '°F ' + celsiusToKelvin + 'K ' + fahrenheitCelsius + '°C';
    return result;

}
const temperature = convertTemp(0);
console.log(temperature);