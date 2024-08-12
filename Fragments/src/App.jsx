//Allowing grouping of multiple elements without extra DOM nodes 
//Return multiple elements without wrapping parent
//Cleaner Dom and consistent styling
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
function App(){
  let foodItems=["Dal","Roti","Rice","Veggies","Fruits","Orange","Banana"];
  let cars=["Hyundai","bmw","mercedez","Lambo"];
  return <React.Fragment> 
    <h2>Healthy Items</h2>
    <ul className="list-group">
      {foodItems.map((items)=>(
        <li key="{items}" className="list-group-item">{items}</li>
      ))}
</ul>
<h2>Cars list</h2>
 <ul className="list-group">
  {cars.map((item)=>(
    <li key="{items}" className="list-group-item">{item}</li>
  ))}
 </ul>
  </React.Fragment> //or <> </>->(Simple form for React Fragments)Does not require importing React object from react..
}
export default App;
