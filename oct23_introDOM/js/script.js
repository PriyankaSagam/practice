//making a variable called titleE1
//we are having that variable hold the information from the element that has the id tit
//document.getElementById is a method that looks at the html and returns an element with 

let titleEl = document.getElementById('title');
//console.log to check
console.log(titleEl);
console.dir(titleEl);
//accessing an element without an id
//document.querySelector(selector)
//creating h1E1 variable
//get an h1 element fromour document and save it in that variable
let h1El=document.querySelector("h1");
console.log(h1El);

//if the css selector provided to querySelector()matches multiple elements, it returns the "first" matching element.
//if no matching node is found,null is returned.

//practice

//In index.html, add a <p>tag below the <h1>and give it a class of cool, then...
//Add some content inside of the <p>tag - try typing lorem [tab]to emit (using emmet) random lorem ipsum text.
//Use querySelector()to select the first element with a class of cool and assign it to a variable named pEl.
//Verify that the <p>element was selected by logging out pEl.
let pEl=document.querySelector(".cool")
console.log(pEl);

pEl.textContent = "Comments for <strong>Today</strong>";
pEl.innerHTML="Comments for <strong>Today</strong>";
