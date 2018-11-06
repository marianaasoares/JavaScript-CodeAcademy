const kelvin = 0; // constante do valor de kelvin
var celsius = 0; //celsius se inicia em 0
celsius = kelvin - 273; // salvando a variavel celsius e diminuindo o valor total de kelvin por 273
var fahrenheit = 0;// fahrenheit inicia em 0
fahrenheit = celsius*(9/5) + 32; // equação para transformar celsius em farenheit
fahrenheit = Math.floor(fahrenheit); // arrendondando o valor do fahrenheit

console.log(`The temperature is ${fahrenheit} degreess Fahrenheit.`);

// usando escala de Newton
var newton = 0; // newton inicia em 0
newton = celsius*(33/100); // equaçao de conversão de celsius para newton
newton = Math.floor(newton); // arrendondando 
console.log(`The newton's temperature value is ${newton}`);	//print no console