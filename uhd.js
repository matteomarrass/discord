console.log('hello')

/*let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
let myArray = myString.split('+');

const arrayLenght = myArray.length;
const lastItem = myArray[arrayLenght-1]; */
/*myArray.splice(-2, 2, "Matteo");

myArray.forEach(item => console.log(item + myArray.indexOf(item)))


const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

const findEagles = birds.indexOf("Eagles")
const removeEagles = delete birds[findEagles];

const eBirds = birds.filter(item => item.startsWith('E'));
*/

/*const tellFortune = (numChild, partName, position, jobTitle) => {
    console.log(`You will be a ${jobTitle} in ${position}, and married to ${partName} with ${numChild} kids`)
}

tellFortune(4, 'Gianna', 'Mumbai', 'engineer')
*/
/*const calcultateDogAge = (age) => {
    ageDog = age * 7;
    console.log(`Your dog is ${ageDog} years in dog years!`)
}

calcultateDogAge(8)
*/

//The Lifetime Supply Calculator
//
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
//    Write a function named calculateSupply that:
//        takes 2 arguments: age, amount per day.
//        calculates the amount consumed for rest of the life (based on a constant max age).
//        outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X" 
//    Call that function three times, passing in different values each time.
//    Bonus: Accept floating point values for amount per day, and round the result to a round number. 

/*const calculateSupply = (age, ammount) => {
    const hundred = 100;
    const maxAge = 100 - age;
    const snacks = (ammount * 365) * maxAge;
    console.log(`You will need ${snacks} snacks to last you until the ripe old age of ${hundred}`)
}
calculateSupply(18, 2); */

/*TO DO

The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here.

Create a function called calcCircumfrence:

    Pass the radius to the function.
    Calculate the circumference based on the radius, and output "The circumference is NN". 

Create a function called calcArea:

    Pass the radius to the function.
    Calculate the area based on the radius, and output "The area is NN". 


    */

/*const calcCircumfrence = (radius) => {
    const circumference = (2 * radius) * 3.14;
    console.log(`The circumference is ${circumference}`)
}
calcCircumfrence(3);

const calcArea = (radius) => {
    const area = 3.14 * Math.pow(radius, 2);
    console.log(`The area is ${area}.`)
}

calcArea(3)
*/




/*Problem 2

The Temperature Converter

It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:

    Store a celsius temperature into a variable.
    Convert it to fahrenheit and output "NN°C is NN°F". 

Create a function called fahrenheitToCelsius:

    Now store a fahrenheit temperature into a variable.
    Convert it to celsius and output "NN°F is NN°C."
*/

/*const celsiusToFahrenheit = () => {
    let celsius = 30;
    const converterFahrenheit = (celsius * 1.8) + 32;
    console.log(`${celsius}°C is ${converterFahrenheit}°F.`)
}
celsiusToFahrenheit();

const fahrenheitToCelsius = () => {
    let fahrenheit = 70;
    const converterCelsius = (fahrenheit - 32) / 1.8;
    console.log(`${fahrenheit}°F is ${converterCelsius}°C.`)
}

fahrenheitToCelsius();
*/


//WEBSITE

    // https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php


//    Write a JavaScript function that reverse a number. Go to the editor
//    Example x = 32243;
//    Expected Output : 34223

const reverseNumber = (number) => {
    let num = number;
    let rev_num = 0;
    while (num > 0) {
        rev_num = rev_num *10 + num %10;
        num = num /10;
    }
    return rev_num;
    
}

console.log(reverseNumber(32243));

/*num = 4562 
rev_num = 0
rev_num = rev_num *10 + num%10 = 2 
num = num/10 = 456
rev_num = rev_num *10 + num%10 = 20 + 6 = 26 
num = num/10 = 45
rev_num = rev_num *10 + num%10 = 260 + 5 = 265 
num = num/10 = 4
rev_num = rev_num *10 + num%10 = 2650 + 4 = 2654 
num = num/10 = 0 
source- https://www.geeksforgeeks.org/write-a-program-to-reverse-digits-of-a-number/
*/
