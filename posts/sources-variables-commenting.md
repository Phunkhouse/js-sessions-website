---
pageTitle: Sources, Variables and Commenting
date: 2019-07-04
excerpt: So We spoke about the sources everyone should use, We finally finished Variables and explored ways to comment out our code.
---

## Sources
* **MDN** - most reliable, could be difficult to read, time independent, compatibility bonus
  * [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* **W3Schools** - not that reliable, easier to read, time independent
  * [https://www.w3schools.com/jsref/default.asp](https://www.w3schools.com/jsref/default.asp)
* **Stack Overflow** and others - could be faster, beware of time (when the problem there was solved)
* It's often faster to use **Google** then search inside these sources, just be aware that these sources are your primary ones - so search like "[search question] JS" and look for **MDN** and **W3Schools** results

## Last hour questions
* What is the variable?
* Declare variable with a string value
* Declare variable and let it compute 10 - 7

## Finishing Variables
* There is a difference between **declaring** and **updating** variable value
* you can **update value** of the variable and you can even **add to the original value** (speaking of math), same for other basic matematical operators:

````Javascript
var num = 3;

// More descriptive
num = num + 3;

// Shortcut
num += 3;
````

###  CH1: More math
* create variable **we are doing math** and give it value of some **number**
* increase the original value by **25** (so add, not multiply)
* decrease it by **10**
* log it
* [solution here](https://codepen.io/Phhunkhouse/pen/RzeMge)

<br>

* You can **insert variables inside a string**. Especially useful to make part of the text **dynamic**:

````Javascript
var logInStatic = 'Hello Robert, You are logged in.';

var user = 'Robert';
var logInDynamic = 'Hello ' + user + '. You are logged in.';
````

## Commenting
* Important for **not getting lost within a code**
* Important for temporary **clearing the code and using it later**
* Used similarly in HTML and CSS
* Use it like that:
  
````Javascript
// This is line comment that will work just for this line

/*
This is block comment:
   - it is pretty flexible
   - it is cleaner when you need to comment more lines
   - and the shortcut in VSCode is SHIFT + ALT + A
   - so if you want in example comment out piece of code, just select it and use the shortcut
*/
````

