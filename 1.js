const degreeCelsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия:"));
const degreesFahrenheit = 9 / 5 * degreeCelsius + 32;
alert(`Цельсий: ${degreeCelsius} , Фаренгейт: ${degreesFahrenheit.toFixed(1)}`);