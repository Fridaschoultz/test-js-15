// String - text


let fruit1 = "Banan";
let fruit2 = 'Vattenmelon';

document.getElementById("string").innerHTML =
fruit1 + "<br>" + fruit2; 


// Number - text 

let x = 15.00;
let y = 25;
let z = 10.3;

document.getElementById("number").innerHTML =
x + "<br>" + y + "<br>" + z;

// Booleans - kollar om den är lika med varandra
/*
let x = 10;
let y = 10;
let z = 5;

document.getElementById("booleans").innerHTML =
(x == y) + "<br>" + (x == z);
*/

//Arrays

const marvel = ["Iron man","Doctor Strange","Thor"];

document.getElementById("array").innerHTML = marvel[1] ; // ändra till marvel för att skriva ut hela arrayen, lägg till ="Thor" för att ändra doctor strange

//Object

const hero1 = {
    firstName : "Tony",
    lastName  : "Stark",
    age       : 55
  };

  const hero2 = {
    firstName : "Steve",
    lastName  : "Rogers",
    age       : 100
  };
  
  document.getElementById("object").innerHTML =
  hero1.firstName + " " + hero1.lastName + " är " + hero1.age + " år gammal."+ "<br>" 
  + hero2.firstName + " " + hero2.lastName + " är " + hero2.age + " år gammal.";

  
  //Undefined 
let superHeros;

document.getElementById("undefined").innerHTML =
superHeros + "<br>" + typeof superHeros;



// Functions

/* Här anropas funktionen och vi skickar 4 och 3 till parametrarna 
a och b som utför en multiplikation och returnerar tillbaks till variabeln p */

let f = myFunction(4, 3); // här anropas funktionen
document.getElementById("function").innerHTML = f;

function myFunction(a, b) {
  return a * b;
}


