---
pageTitle: DOM Manipulation
date: 2019-08-29
excerpt: Basic principles how to do things with HTML and CSS
---

* **DOM - Document object model** - "connects web pages to scripts or programming languages by representing the structure of a document" (MDN)  - It basically allows you to manipulate HTML or CSS with JS or other relevant languages.
* The key part of every successful DOM manipulation is to get friendly with **browser console** that will help you with outputing your console.log etc.
* Basic DOM **element selecting**:

````Javascript
// Values inside querySelector behaves like CSS selectors
var bodyEl = document.querySelector('body')
console.log(bodyEl) // Return <body> element with its predefined properties and methods
````

* With body selected, We can do something with it - lets **change color** value:

````Javascript
var bodyEl = document.querySelector('body')
bodyEl.style.color = 'tomato' // Add inline style
````

* However **style** property will add **inline style**, which isn't best practice out here. Why not **add** whole **class**? Definitely better maintainable afterwards:

````Javascript
var bodyEl = document.querySelector('body')
bodyEl.classList.add('body') // Add css class - much better

bodyEl.classList.remove('body') // And you can easily remove it (or any other)
````

* Let's say that We want **select** something **below** selected element (or **above**). Very useful if you have no way to use id's for better identification (you have no access to html in example):

````Javascript
var bodyEl = document.querySelector('body')

// List all child nodes of body element
bodyEl.childNodes.forEach(function (node) {
   // If the node item has a name of DIV, log him
   if (node.nodeName === 'DIV') {
      console.log(node)
   }
})
````

````Javascript
var divEl = document.querySelector('div')

// Log parent node of DIV
console.log(divEl.parentNode)
````

* Do you want **manipulate with more elements** at once? Not a problem - just another array:

````Javascript
var divs = document.querySelectorAll('div')
// Change background color for every div
divs.forEach(function (div) {
   div.style.backgroundColor = 'skyblue'
})
````

* You can event **create new element** and give it a value - so let's **create H1** with some **text content**:

````Javascript
// What? - H1
var newHeading = document.createElement('H1')
// Text of the H1
newHeading.textContent = 'Bazinga'
// Where? - inside BODY
var bodyEl = document.querySelector('body')
bodyEl.appendChild(newHeading)
````