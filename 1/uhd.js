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

/* TEST const reverseNumbera = (number) => {
    let num = number;
    let rev_num = 0;
    while (num > 0) {
        rev_num = rev_num *10 + num %10;
        num = num /10;
    }
    return rev_num;
    
}



num = 4562 
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



CORRECT

const reverseNumber = (number) => {
    return String(number).split('').reverse('').join('');
}

console.log(reverseNumbera(1322439));

-------correct--------
let num = 32243;
const reverseNumber = (num) => {
  let rev_num = 0;
  while (num > 0) {
    rev_num = rev_num * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev_num;
};

console.log(reverseNumber(num));
*/

// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php


//Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

/*const palindrome = (string) => {
    const splitPalindrome = string.split('').reverse('').join('');
    if (string === splitPalindrome){
        return true
    } else {
        return false
    }
}

console.log(palindrome('madam'))*/

//Write a JavaScript function that generates all combinations of a string.
//Example string : 'dog'
//Expected Output : d,do,dog,o,og,g 

/*const generateCombinations = (string) => {
    let combinations = [];
    for (let i = 0; i < string.length; i++ ) {
         for(let j = i + 1; j < string.length + 1; j++) {
            combinations.push(string.slice(i, j));
         }
    }
  return combinations;
}

console.log(generateCombinations('dog'))*/

//Write a JavaScript function that returns a passed string with letters in alphabetical order.
//Example string : 'webmaster'
//Expected Output : 'abeemrstw'

//toCharArray()
//const changeOrder = (string) => {
//    const alphabeticalOrder = string.split('').sort().join('');
//    return alphabeticalOrder
//}
//
//console.log(changeOrder('method'))

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of
//each word of the string in upper case.
//Example string : 'the quick brown fox'
//Expected Output : 'The Quick Brown Fox '

//const capitalizeFirst = (string) => {
//    let separatedWords = string.trim().split(" ");
//    separatedWords.forEach(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
//}
//
//console.log(capitalizeFirst("ciao mi chiamo Matteo"));

//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
//Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

/*const checkPrimeNumber = (num) => {
    for (let i = 2; i < num; i++){
        if ( num % i == 0){
            return 'Not a prime number!'
        } return 'Yes, a prime number!'
    }
}

console.log(checkPrimeNumber(10))*/

/*Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean,
function, number, string, and undefined.*/

/*const dataType = (data) => {
    console.log(typeof data);
}
dataType(true)*/

/*Write a JavaScript function which will take an array of numbers stored
and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4 */

/*const secGreatest = () => {
    const newArray = [1,8,2,4,5];
    newArray.sort(function (a, b) {
        return b - a;
      });
    const secondBiggest = newArray[1];
    newArray.sort(function (a, b) {
        return a - b;
    });
    const secondSmallest = newArray[1];
    console.log(`${secondBiggest}, ${secondSmallest}`)
}

secGreatest();*/

//Write a JavaScript program to list the properties of a JavaScript object.
//Sample object:
//var student = {
//name : "David Rayy",
//sclass : "VI",
//rollno : 12 };
//Sample Output: name,sclass,rollno

/*const matteo = {
    name: 'Matteo',
    years: 23,
    school: 'computer science'
}

console.log(`${matteo.name}, ${matteo.years}, ${matteo.school}`)*/

/*Write a JavaScript program to delete the rollno property from the following object.
Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };*/
/*const matteo = {
    name: 'Matteo',
    years: 23,
    school: 'computer science'
}
console.log(matteo.name);
delete matteo.name;
console.log(matteo.name);*/

/*Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };*/
/*const matteo = {
    name: 'Matteo',
    years: 23,
    school: 'computer science'
}
const objectLenght = Object.keys(matteo).length;
console.log(objectLenght)*/

/*Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status)
of the following books.*/

/*const library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

   library.forEach(book => {
    for(let item in book){
        console.log(`${item}: ${book[item]}`)
    }
})*/

/*Write a Bubble Sort algorithm in JavaScript. Go to the editor
Note : Bubble sort is a simple sorting algorithm that works by
repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]*/

//Exercises from https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php

//Write a JavaScript program that accept two integers and display the larger.
/*const larger = () => {
    const numbers = [1, 3, 5, 10, 10000];
    const largestNumber = Math.max(...numbers);
    console.log(largestNumber);
}

larger();*/

//Write a JavaScript conditional statement to find the sign of
//product of three numbers. Display an alert box with the specified sign
//Sample numbers : 3, -7, 2
//Output : The sign is - 

/*const minusSign = () => {
    const arraySign = [3, 9, 39, 103];
    const productArrays = arraySign.reduce((acc, current) => acc * current)
    console.log(productArrays)
}

minusSign();*/

