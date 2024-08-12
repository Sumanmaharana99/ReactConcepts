//Allowing grouping of multiple elements without extra DOM nodes 
//Return multiple elements without wrapping parent
//Cleaner Dom and consistent styling

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
function App(){
 let foodItems=["Dal","Roti","Rice","Veggies","Fruits","Orange","Banana"];
  //let foodItems=[];
//conditional rendering

/*if(foodItems.length===0){
  return <h3>I am Still Hungry</h3> if-else
}*/
//let EmptyMessage=foodItems.length===0 ? <h3>I am Still Hungry</h3> : null;Another way for ternary
  return <React.Fragment> 
    <h2>Healthy Items</h2>
    {/* {EmptyMessage} */}
    {/* {foodItems.length===0 ? <h3>I am Still Hungry</h3> : null} */}
    {foodItems.length===0 && <h3>I am still hungry</h3>}
    
    <ul className="list-group">
      {foodItems.map((items)=>(
        <li key="{items}" className="list-group-item">{items}</li>
      ))}
</ul>
  </React.Fragment> //or <> </>->(Simple form for React Fragments)Does not require importing React object from react..
}
export default App;
