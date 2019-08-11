// FIND CHALLENGE H3'S AND ASSING THEM A CLASS FOR BACKGROUND
const pageH3 = document.querySelectorAll('h3')
pageH3.forEach(heading => {
   if (heading.innerHTML.match(/CH.*/)) {
      heading.classList.add('js-challenge-frame')
   }
})

// FIND STRONG ELEMENT WITH SCENARIO TEXT AND ASSIGN PARENT A CLASS THAT'LL INCREASE TOP MARGIN
const pageStrongEl = document.querySelectorAll('strong')
pageStrongEl.forEach(strong => {
   if (strong.innerHTML.match(/SCENARIO.*/)) {
      strong.parentNode.classList.add('js-challenge-scenario')
   }
})
