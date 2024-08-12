//Allowing grouping of multiple elements without extra DOM nodes 
//Return multiple elements without wrapping parent
//Cleaner Dom and consistent styling
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
function App(){
  return <React.Fragment> 
    <h1>Fragments</h1>
    <h2>Healthy Items</h2>
    <ul class="list-group">
  <li class="list-group-item">Dal</li>
  <li class="list-group-item">Roti</li>
  <li class="list-group-item">Rice</li>
  <li class="list-group-item">Veggies</li>
  <li class="list-group-item">fruits</li>
</ul>
  </React.Fragment> //or <> </>->(Simple form for React Fragments)Does not require importing React object from react..
}
export default App;
