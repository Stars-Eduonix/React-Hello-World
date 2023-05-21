// import React from 'react';

// import "./style.css" // this file is loaded

import Card from "./Components/Card.js"


let arr = [
        {name: "Abhishek", age: 10},
        {name: "Rahul", age: 20},
        {name: "Rohit", age: 30},
        {name: "Raj", age: 40},
        {name: "Ravi", age: 50},
]



const App=()=>{

    //  for loops 
    // if else


    return (
        <div  className="app">
           <h1>hello</h1>
           <p>Hey I am Abhishek</p>
            
            {
           
                arr.map((value, key) => (
                    <Card 
                    name =  {value.name}
                    age =  {value.age}
                    />
                ))
            }
           
            


        </div>
    
    )
}





export default App;




// function sum(a,b){
//      a = 10 
//      b = 20 
//      return a+b
// }


// sum(10,20) 
// sum(11,21)