---
pageTitle: More Arrays
date: 2019-07-25
excerpt: Introduction, instalation of of needed tools and some first steps to the land of Variables.
---

### Last hour questions
* Create an array and fill it with one **string**, one **variable** and one **number**. **Access third item** and save it to a **new variable**.
* Write a condition with **logical operator** where one thing **or** other thing could be **true**

## Arrays continued
* We can do many useful things with arrays. Let's talk about basic ones (we call them methods or properties):
  *  **Add** another item **to the end** (**push** method):

````Javascript
var cars = ['BMW', 'Audi', 'Ferrari'];

cars.push('Bugatti');
console.log(cars);
// ['BMW', 'Audi', 'Ferrari', 'Bugatti']

// OR
var chevrolet = ['Camaro', 'Corvette'];
cars.push('Porsche', chevrolet)
console.log(cars);
// ['BMW', 'Audi', 'Ferrari', 'Bugatti', 'Porsche', ['Camaro', 'Corvette']]
````

  * **Remove last** item (**pop** method):

````Javascript
var countries = ['Germany', 'Slovakia', 'Poland'];

countries.pop();
console.log(countries);
// ['Germany', 'Slovakia']
````

  *  **Add** to the **start** (**unshift** method):

````Javascript
var years = [1984, 1995, 2008];

years.unshift(1955);
console.log(years);
// [ 1955, 1984, 1995, 2008 ]
````

  *  **Remove** from the **start** (**shift** method):

````Javascript
var books = ['Brave New World', 'Animal Farm', 'Atlas Shrugged']

books.shift();
console.log(books);
// [ 'Animal Farm', 'Atlas Shrugged' ]
````

### CH1: Supermarket run
* You are in a supermarket and you need to buy some things
* **cart** is your **array** and depending on which **section** of supermarket you are, you will need to put things to your cart
* you are aware about **vegetables**, **snacks** and **meat** sections
* you'll need **tomato** and **cucumber** from *vegetables* sec.
* you'll need **cookies** from *snacks* sec.
* you'll need **chicken wings** from *meat* sec.
* **set condition for every section visit**
* **SCENARIO 1:**
  * you arrived to the **vegetables** section
  * **grab needed items** and **log the content** of your cart
  *  [solution here](https://codepen.io/Phhunkhouse/pen/EqZEXZ)
* **SCENARIO 2:**
  * you arrived to the **snacks** section 
  * **grab needed item**
  * you decided that the cookies are all you need so you will go straight to the checkout
  * after a while you realise that you forget your money so you will need to **put it back**
  * **log the content** of your cart after all of this
  *  [solution here](https://codepen.io/Phhunkhouse/pen/YmNaOO)

<br>

  *  So one final and really useful method for **removing or even adding one or more items** to (or from) **any place from within an array** (**splice** method):

````Javascript
var sports = ['football', 'tennis', 'golf', 'ice hockey', 'baseball', 'volleyball'];

sports.splice(1, 2);
console.log(sports);
// [ 'football', 'ice hockey', 'baseball', 'volleyball' ]

sports.splice(2, 0, 'basketball');
console.log(sports);
// [ 'football', 'ice hockey', 'basketball' 'baseball', 'volleyball' ]
````

  *  And one **property for array length** used, again, so often (**length** property):

````Javascript
var religions = ['christianity', 'islam', 'budhism', 'hinduism'];

console.log(religions.length);
// 4
````

  *  **NOTICE:** length counting **starts from 1**, not from 0 like in array's indexes

<br>

### CH2: Cities of the world
* Lets make an array - **european cities** and insert there five of your favourite cities (european)
* Make an empty array - **american cities**
* Under them make another empty array - **world cities**
* **SCENARIO 1:**
  * dynamically insert **european cities** array into the **world cities**
  * **choose one** and **log it from world cities** array
  *  [solution here](https://codepen.io/Phhunkhouse/pen/PMWRrr)
* **SCENARIO 2:**
  * dynamically fill **american cities** with **3 cities** from this continent, preferably in **one row** (with one method)
  * dynamically insert **american cities** array into the **world cities**
  * dynamically remove **european cities** from **world cities**
  * **log last item** of **american cities** from within the **world cities** array (**BONUS:** do it with a length property)
  *  [solution here](https://codepen.io/Phhunkhouse/pen/zgNjvp)
<br>