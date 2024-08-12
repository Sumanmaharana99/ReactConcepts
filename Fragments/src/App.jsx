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
  <li class="list-group-item">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
  </React.Fragment> //or <> </>->(Simple form for React Fragments)Does not require importing React object from react..
}
export default App;