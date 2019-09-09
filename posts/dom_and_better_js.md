---
pageTitle: DOM and better JS
date: 2019-09-05
excerpt: TBD
---

## Two hints to write better JS
* Keyword **var** (to declare a variable) is already old enough and have better alternative in **const** and **let**, compatible with IE11 too
* Use them for more readable and foolproof code
* Also use always **const as a default** and **let** only if you plan that his **value will be changed**

````Javascript
const car = 'BMW' // Immutable, you cannot change a value
car = 'Audi' // Output error 

let mobileOS = 'Android' // Block scoped, mutable
mobileOS = 'iOS' // Without errors
````

* Do you want better error handling? **Strict mode** will, in example, give you an error when you forget to declare a variable to perevent unexpected behavior
* You just need to put this string to the **start of any js file**

````Javascript
'use strict'

car = 'BMW' // Error - not declared
````

## DOM continued
* So next thing we want to do with our DOM is to add **event listener** - and most used one is the **click event**:

````Javascript
// Select button
const buttonEl = document.querySelector('button')
// Listen for click on that button
buttonEl.addEventListener('click', function () {
   const bodyEl = document.querySelector('body')

   // After click, create new paragraph with predefined text content and append to the end of body
   const newParagraph = document.createElement('p')
   newParagraph.textContent = 'Thank you!'
   bodyEl.appendChild(newParagraph)
})
````