---
pageTitle: More Loops and Functions
date: 2019-08-15
excerpt: We finished loops with more options how to do them and tried our first functions.
---

### Last hour questions
* Create **for loop** that will count **from 1 to 10**, every number will be logged
* Create an **array** with **2 strings** in there - dynamicaly **add another one** to the end

## Loops continued
* Another variant for looping is **while loop**:

````Javascript
var i = 0;
while (i < 3) {
   console.log('Loop number ' + i);
   i++;
}
/*
Loop number 0
Loop number 1
Loop number 2
*/
````

* **NOTICE:** It's very similar to basic if statement but be aware that if the condition never fail, you'll got the **infinite loop** - freeze of your program or even PC

<br>

###  CH1: Choo choo
* there is a **train** that has a **length of 7 vagons**
* create a **while loop** that will loop **through all the vagons**
* first **two vagons** are **1st class**
* **all other but the last** are **2nd class**
* **last one** is a **post vagon**
* **output all the vagons to the console**
* [solution here](https://codepen.io/Phhunkhouse/pen/abomojQ)

<br>

* Finally let's get a preview look on really common way to **loop through an array items**, that could be way easier for many of you. Remember array methods? Let me introduce you **forEach** array method:

````Javascript
var filterCategories = ['country', 'month', 'type', 'level'];
filterCategories.forEach(function(item) {
   console.log(item);
});
/* 
country
month
type
level
*/
````

* There is a catch and that's **IE11 compatibility**. You will need **polyfill** for certain cases (piece of code inserted before any JS code to teach IE newer approaches). Compare [basic forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) (example above) and [forEach for node list](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach), which is used often for DOM manipulations (we'll get on that later)

## Functions
* **Reusable block, recipe** - that is **created once** and could be **reused many times**
* Good for more complex code to be smarter, shorter an better maintainable
* First, a function needs to be **defined**, then it could be **called** (used)
* Example of a basic function expression:

````Javascript
// Function definition
var hello = function() {
   console.log('Hello world');
}

// Function call
hello();
/* 
Hello world
*/
````

* **NOTICE:** It is again assigned to a variable, like other data types, but behaves differently
* Function could accept **parameter** (one or more) - sort of additional info that is available to be worked with. Parameter is defined by choosed **keyword** (variable for ingredient - do not declare it, it is sort of placeholder) and used with function call as an **argument** (ingredient itself - behaves like variable and could be even another function call)
* But It'll be better to look on the example:

````Javascript
// number1 and number2 are function parameters
var calcAdd = function (number1, number2) {
   console.log(number1 + number2);
}

// 5 and 10 are arguments for function call - so function will do math with those numbers
calcAdd(5, 10);
/* 
15
*/
calcAdd(20, 100);
/* 
120
*/
````

* Finally I am introducing you a **return** statement. Very common way to pass chosen result to a variable (in example)
* Return statement:

````Javascript
var calcAdd = function (number1, number2) {
   var addNum = number1 + number2;
   return addNum;
}

// result is returned to the console log
console.log(calcAdd(5, 10));
/* 
15
*/

// result is returned to the variable
var result = calcAdd(20, 100);
console.log(result);
/* 
120
*/
````

* Return statement is better practice to output things from functions. Console log is used more for testing purposes.

<br>

###  CH2: Hello!
* create a **function** that will dynamically insert **name** to a **predefined string** (like "Hello. I am 'name'")
* that function will have **one parameter** that will accept value of a **name**
* function needs to **return the result** and not to a console log inside the function
* **call the function** with chosen **name as a argument** inside **console log** afterwards
* [solution here](https://codepen.io/Phhunkhouse/pen/abombdr)

<br>