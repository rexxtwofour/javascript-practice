import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 




  render() {
    const doubleYou = 'this string';
    console.log(doubleYou);

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

 console.log(arr);


const thisArray = [ 'cecy', 'lone'];
const thatArray = [ 'emil', 'tobias', 'linus'];
const anotherArray = [ 'robin', 'morgan']; 

const myChildren = thisArray.concat(thatArray, anotherArray);

console.log(myChildren); 

const fruits = [ 'banana', 'orange', 'lemon', 'apple', 'mango'];
// const citrus = fruits.slice(2,4);

const moreFruits = fruits.toString();
 
console.log(moreFruits);



    return (
      <div className="App">
       
       <div>
       
       </div>


      </div>
    );
  }
}

export default App;
