import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){
  let foodItems=["Dal","Roti","Rice","Veggies","Fruits","Orange","Banana"];
  //let foodItems=[];
//Pass the props as attributes in jsx
  return( <>
  <h1>HEalthy foods</h1>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
  </>
)};
export default App;