---
pageTitle: Loops
date: 2019-08-08
excerpt: Left a hardwork for computers. This intro for automation introduced us the basics of the for loop.
---

### Last hour questions
* Review of [summer challenges](/posts/summer-challenges) 

## Loops
* They do something repeatedly - they automate
* Loop through all countries, events, elements, filters etc… so **loop through some array of items** - to find something, to list something, with some sort of conditions
* Basic **for** loop:

````Javascript
var loopsCount = 5;
for (var i = 0; i < loopsCount; i++) {
   console.log(i);
}
/*
0
1
2
3
4
*/
````

* 	It is basically saying: "**Start from 0**, loop until the **i** variable is still **less than 5** and **increase** the **i** variable **by 1 each round**."
*	**NOTICE:** **i++** is the widely used shorthand for incrementation and it is basically **i += 1** that is shorthand for **i = i + 1**. This shorthand could be used just for **incrementing by 1** or decrementing by 1 (i--)
* 	Let's look on more real world example including an array in the mix:

````Javascript
var array = ['tomato', 'apple', 'oranges'];
for (var i = 0; i < array.length; i++) {
   console.log(array[i]);
}
/*
tomato
apple
oranges
*/
````

* So we are saying: "**Start from the 0**, loop until you reach the **length of the array**, **increment** always **by 1**" and: "Every time **log the current item of the array** - which has the same index as the current iteration"

<br>

###  CH1: Bazinga!
* Create an **array** and fill it **five different strings**
* Use for loop to **change all the items to bazinga**
* Log the array in the end
* [solution here](https://codepen.io/Phhunkhouse/pen/voVMdJ)

<br>

* We have two statements to further control behavior of the loop - **break** and **continue**
* **Break** will **stop the loop** if certain condition passes - to spare further computations:

````Javascript
var array = ['Brazil', 'Chile', 'Colombia', 'Cuba', 'Ecuador'];
for (var i = 0; i < array.length; i++) {
   if (array[i] === 'Chile') {
      console.log('Found it!');
      break; // Looping will end with 'Chile'
   }
}
````

* **Continue** will **exclude current iteration** if it passes:

````Javascript
var array = ['Brazil', 'Chile', 'Bazinga!', 'Colombia', 'Cuba', 'Ecuador', 'Bazinga!'];
for (var i = 0; i < array.length; i++) {
   if (array[i] === 'Bazinga!') {
      console.log('Found it!');
      continue; // Output will exclude 'Bazinga!'
   }
}
````

<br>

###  CH2: Headings not invited
* create following array:
````Javascript
var elements = ['DIV', 'IMG', 'H2', 'SPAN', 'FORM', 'H3'];
````
* create an **empty array** named **vipElements**
* loop through elements array and **push to the vipElements** only that **items that are not headings**
* log final vipElements array
* [solution here](https://codepen.io/Phhunkhouse/pen/MNPRVM)

<br>