const makeBigger = () => {
   document.querySelector("p").style.fontSize=("50px")
   document.querySelector("h1").style.fontSize=("50px")
   // alert('make bigger!');
};

const makeSmaller = () => {
   document.querySelector("p").style.fontSize=("20px")
   document.querySelector("h1").style.fontSize=("20px")
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
