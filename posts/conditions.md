---
pageTitle: Conditions
date: 2019-07-11
excerpt: If We could't get Conditions right, We would be screwed. And that's how It's done.
---

### Last hour questions
* Declare variable with some number as a value. Increase its original value by 9000 on the next line.
* Create variable timeNow that is saying 'It is [actual time]'. Because time is constatly changing, place variable time instead of [actual time] string piece, give it a number value of actual time and cocatenate it with the string.
* Create variable test and give it a string hello world. Comment it out. Uncomment it.

### Conditions
* You want something to happen only **if certain condition apply**
* Example: If user is logged then welcome that user, in JS sense:

````javascript
var isLoggedIn = true;
if (isLoggedIn === true) {
   console.log('Welcome user!');
}

// or shortened
if (isLoggedIn) {
   console.log('Welcome user!');
}
````

* **NOTICE:** the difference between = (**assigning a value**) and === (**equality operator** - is something equal?)
* **NOTICE:** you could **check** also for the exact **string** or **number** value, It is not mandatory to check just for booleans
* First ask - **IF**, then define a question within **normal brackets**, then do something if condition apply within **curly brackets** (that is a block statement - everything within curly brackets has its own area)

<br>

###  CH1: Am I a Batman?
* declare **is batman** variable and set it to true (boolean)
* use the if statement to check whether you are a batman - if yes than log **"I am Batman"**
* try to change variable value to false - it shouldn't log anything
* [solution here](https://codepen.io/Phhunkhouse/pen/RzeMge)

<br>

* **Comparison operators:**

````javascript
// Equal
(8 === 8)
('microsoft' === 'microsoft')

// Not equal
(8 !== 4)
('Microsoft' !== 'microsoft')

// Greater than
(8 > 4)

// Less than
(4 < 8)

// Negative check - NOT
(!isFilled)
````

* What if I want to set behavior for a state that is **not true**? We use **ELSE** for that:

````javascript
var isLoggedIn = true;
if (isLoggedIn) {
   console.log('Welcome user!');
} else {
   console.log('Welcome! Please log in.');
} 
````

* **NOTICE:** you don't need to specify else condition (brackets) - because  else is just every other condition than the first one

<br>

### CH2: Am I a Batman? 2.0
* set **is batman** variable to false
* create another condition for that false statement that will log **"I am not batman enough"**
* log it
* [solution here](https://codepen.io/Phhunkhouse/pen/QXeNNY)

<br>