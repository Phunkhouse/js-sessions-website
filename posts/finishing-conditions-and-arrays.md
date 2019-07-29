---
pageTitle: Finishing Conditions and starting Arrays
date: 2019-07-18
excerpt: Conditions adventure is behind us. We also scratched surface of Arrays - lists everywhere!
---

### Last hour questions
* Create condition for situation when you are **tired**. When you are - **grab a cofee**. When not - **work harder**. Output for both conditions will be logged as a **string**.
* That isn't actually a question but We figured that We need to know more about **what is true and false in JS**. This [link](http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html) is perfect for it.

## Conditions continued
* So what if we need to set **more conditions**? Let's use **ELSE IF** for that:

````javascript
var isAdmin = true
var isLoggedIn = true;
var user = 'Chuck Norris';
if (isAdmin) {
   console.log('Welcome admin!');
} else if (isLoggedIn) {
   console.log('Welcome ' + user + '!')
} else {
   console.log('Welcome! Please log in.');
}
````

* **NOTICE:** ELSE IF needs to be always specified - same brackets as for IF. Also be shore that **conditions will be checked from top to bottom** (first one correct wins)
* And so and so on… you can use how many ELSE IF conditions you want

<br>

### CH1: Am I a Batman? 3.0
* delete **isBatman** variable
* create **hero** variable and set it to **"Robin"**
* change conditions in way so it will check for string **"Batman"** resulted in **"I am Batman"**
* it will also check for string **"Robin"** - result will be logged as **"So now I am Robin :("**
* last check will accept every other value and result to **"I am not batman enough"**
* log it
* you can play with with different string values for hero variable to see different results
* [solution here](https://codepen.io/Phhunkhouse/pen/NQGrZe)

<br>

* You can even nest **IF statements**:

````javascript
var haveXbox = true;
var isJarda = true;

if (haveXbox) {
   if (isJarda) {
      console.log("Forza is the best game in the World!");
   }
}

// OR
if (haveXbox && isJarda) {
   console.log("Forza is the best game in the World!");
}
````

* **NOTICE:** && is the logical **AND** operator and defines that both (or more) conditions must be true in the same time.
* Have in mind that both approaches could fit to different situations. First one is more flexible but also could be worse to maintain for more complex nesting, second one is more compact bit will not fit to some scenarios.
* About these **logical operators**:

````javascript
// Logical AND - everything must pass
(thisNeedsToBeTrue && trueVariable === true && anotherVariable !== false)

// Logical OR - something must pass
(thisCouldBeTrue || maybeVariable === 'maybe' || mathResult === 12)
````

### CH2: 18+
* You are creating access check for adult content site
* User can pass only when his age **is 18 or more** and he **is not from restricted country**
* if his age is **under 18** - log that he is too young
* if his country is a **restricted one** - inform him about that through log
* if he **passes** both conditions - log that he has an access
* [solution here](https://codepen.io/Phhunkhouse/pen/PMPGoB)

<br>

## Arrays
* list of items
* which items? **Strings**, **variables**, **numbers**, **booleans**, even other **arrays** or more complex types of data (later)
* how do I build the **array**:

````Javascript
var vegetables = ['garlic', 'tomato', 'potatoes'];
var groceries = ['coffee', 'bread', vegetables];
````

* every item is **divided by comma** and everything is **inside square brackets** - and finally saved to a **variable**
* how can I **approach individual items**? Through **index** of every **item**:

````Javascript
var vegetables = ['garlic', 'tomato', 'potatoes'];
var groceries = ['coffee', 'bread', vegetables];

console.log(groceries[0]);
// coffee
console.log(groceries[2]);
// [ 'garlic', 'tomato', 'potatoes' ]
console.log(groceries[2][1]);
// tomato
````

* **NOTICE:** Index counting starts from 0.

### CH3: Things to do
* create an **array** named **todo**
* insert there **3 things you should do** today
* log a message: **Don't forget to: [SECOND THING in your list]** - In example: *Don't forget to: make a coffee*
* [solution here](https://codepen.io/Phhunkhouse/pen/ymYaMN)