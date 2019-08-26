---
pageTitle: Functions and Objects
date: 2019-08-22
excerpt: Finsihing absolute basics with closer look on Functions and Objects.
---

### Last hour questions
* Function scope questions

## Functions continued

* There are **two ways** to define a function. Through **function expression** or **function declaration** (and It is up to you choose):

````Javascript
// Function expression
var calcAdd = function (number1, number2) {
   var addNum = number1 + number2;
   return addNum;
}

// Function declaration
function calcAdd(number1, number2) {
   var addNum = number1 + number2;
   return addNum;
}
````

<br>

### CH1: Find a country

* Copy this array:
````Javascript
var countries = ['Brazil', 'Austria', 'France', 'Germany'];
````
* Create a function **findCountry** that will accept one argument - **country** and tries to find it within the countries array
* **Return** string responds (like 'Found it' or 'Not found') for cases when the searched **string is in the array or not**
* **Log the function call** (try both cases)
* [solution here](https://codepen.io/Phhunkhouse/pen/XWrMqeQ)

<br>

## Objects

* Collection of **key/value pairs**. Can store many things inside one variable to keep things organised. Heavily used in **object oriented programming** (sort of higher level in JS) - which isn't the case for us, but You can get advantage of knowing them even now
* Basic object:

````Javascript
var person = {
   firstName: 'Chuck',
   lastName: 'Norris'
}

console.log('This is ' + person.firstName + ' ' + person.lastName)
// This is Chuck Norris
````

* Values could be almost anything - even **functions** and other **objects**
* Actually, use of functions inside objects is so common that We have a special term for that - They'are called **methods**
* Methods have a possibility to grab a value from other object keys. This can be done through **this** keyword
* Example:

````Javascript
var teenCalculator = {
   prependText: 'OMG, the result is: ',
   appendText: ' .That\'s lame, I wanna go home.',
   add: function(num1, num2) {
      return this.prependText + (num1 + num2) + this.appendText;
   },
   multiply: function (num1, num2) {
      return this.prependText + (num1 * num2) + this.appendText;
   }
}

var result1 = teenCalculator.add(5, 45);
console.log(result1);
// OMG, the result is: 50. That's lame, I wanna go home.

var result2 = teenCalculator.multiply(10, 8);
console.log(result2);
// OMG, the result is: 80. That's lame, I wanna go home.
````

* Can you recall some methods We used before? Yea, right - **array methods**, or even **console.log()**!
* There are many other methods for **arrays**, **strings**, **numbers** etc. and You'll get to know many of them in a near future - check **MDN** to preview some of them

<br>

### CH2: Temperature converter 2.0

* create **object** that will have **two methods**
* one will be for converting **Fahrenheit temperature to Celsius**
* second will be for converting **Celsius temperature to Fahrenheit**
* both of them should **return result** - no console.log inside a method
* convert **50 Fahrenheit to Celsius**
* convert **25 Celsius to Fahrenheit**
* log results
* [solution here](https://codepen.io/Phhunkhouse/pen/vYBxjQx)