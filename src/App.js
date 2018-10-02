import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 




  render() {

//Array Methods     
    const doubleYou = 'this string';
    // console.log(doubleYou);

     const firstString = ' this is the first string';
    
  const secondString = doubleYou;

 const arr = [1, 2, 3];

 const arr1 = arr; 

  arr1.push(6); 


  arr.push(2);

  arr.push(4)

  arr.pop(1);

  arr.unshift(3);

  arr.splice(3, 0 , 'dog','cat'); 
     

  arr.splice (3, 2); 

//  console.log(arr);


const thisArray = [ 'cecy', 'lone'];
const thatArray = [ 'emil', 'tobias', 'linus'];
const anotherArray = [ 'robin', 'morgan']; 

const myChildren = thisArray.concat(thatArray, anotherArray);

// console.log(myChildren); 

const fruits = [ 'banana', 'orange', 'lemon', 'apple', 'mango'];
// const citrus = fruits.slice(2,4);

// const moreFruits = fruits.toString();

// const moreFruits = fruits.toString();

// console.log(moreFruits);

// fruits.sort(); 

 fruits.sort().reverse();

// console.log(fruits);







//string methods

let stringOne = 'freeCodeCamp is the best place to learn '
let stringTwo = 'frontend and backend development'

//charAt()
// returns a character at a specified position
console.log(stringOne.charAt(1))

//charCodeAt()
//returns unit code character for 'r' which would return 114
console.log(stringOne.charCodeAt(1))

//concat()
//joins two or more strings
console.log(stringOne.concat(stringTwo))

//includes()
//this methods checks to see if a specific set of characters are in a string then returns a boolean value
console.log(stringTwo.includes('end'))


//indexOf()
//returns the index of the first found occurrence of characters which will be the specific character count
console.log(stringTwo.indexOf('end'))


//lastIndexOf()
//returns the last index found occurrence of characters which will be the specific character count interger
console.log(stringTwo.lastIndexOf('end'))

//match()
//match is going to search a string against a regular expression 
//returns an array of each match which shows twice for this example
console.log(stringTwo.match(/end/g))

//repeat()
//returns a new string with the number of specified copys of an exsisting string
console.log(stringOne.repeat(3))


//replace()
//replace searches a string for specified value or regex and returns a new string where specified values exist
console.log(stringTwo.replace(/end/g, 'END'))

//search()
// searches a string for a specified value or regex and returns the position of the match which is the index
console.log(stringTwo.search('end'))

//


//object methods 
//object destructuring
//function practice- es6




//es6 template literals 

let name = ['david', 'mike', 'johnny'];
let calledOut = ['ya wise guy','ya little jerk', 'ya fool']

let template = `Hey ${name[2]},This is a simple template in javascript ${calledOut[2]}`;



console.log(template);


//es6 default parameters and spread operator

function greet ($greeting = 'hey this as default greeting'  ){
  console.log($greeting);
}

greet();


let args1 = [1,2,3];
let args2 = [4,5,6];

const test = () => {
  console.log(args1+','+args2);
}

test(...args1,...args2);


    return (
      <div className="App">
       
       <div>
       
       </div>


      </div>
    );
  }
}

export default App;
