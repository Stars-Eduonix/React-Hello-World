// import React from 'react';


const Card = ({name, age}) => {
    //   console.log("Props" , obj)
      // props => properties
      // props is an object here 
    //   props/obj = {name: "Apple", description: "Lorem ipsum dolor"} 
      // props is a read only object

    //   obj.name = "Mango"


      

    return(
        <div className="card">
            <h1>{name}</h1> 
            <p>{age}</p>
        </div>
    )
}

export default Card;


// JSX 