import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./Components/ErrorMessage";
import CarsItems from "./Components/CarsItems";
import Container from "./Components/Container";
import FoodItemInput from "./Components/FoodItemInput";
import { useState } from "react";
function App(){
//  let cars=["bmw","Audi","Benz","Ducati","Honda"];

//Using useState([currentValue,functiontochangecurrentValue])
//useState("text")->this is the initial message
// let textStateArr=useState("Cars entered by user")
// let texttoShow=textStateArr[0];
// let setTextState=textStateArr[1];
//Array destructing of useState() is shown below -->EASIER SYNTAX

// let [texttoShow,setTextState]=useState();


let [cars,setCarItems]=useState([]);


 const onKeyDown = (e) =>{
   if(e.key==='Enter'){
       let newCarItem=e.target.value;
       e.target.value="";
       let newItems=[...cars,newCarItem];
       setCarItems(newItems);
       console.log("Car item entered is : "+newCarItem);
   }
}
 return( 
 <>
 <Container>
 <h1 className="car-heading">CARS</h1>
  <FoodItemInput handleKeyDown={onKeyDown}></FoodItemInput>
  <ErrorMessage items={cars}></ErrorMessage>

  <CarsItems items={cars}></CarsItems>
 </Container>
 <Container>
 <p>Above are the popular car brands</p>
 </Container>
 </>
)};
export default App;