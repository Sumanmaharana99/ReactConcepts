import { useState } from "react";
import styles from "./App.module.css"
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";
function App(){
 let [calVal,setcalVal]=useState("");
 const onButtonClick=(buttonItem)=>{
  console.log(buttonItem);
  if(buttonItem==="c"){
         setcalVal("");
  }
  else if(buttonItem==="="){
   const result=eval(calVal);
   setcalVal(result);
  }
  else{
    const newValue=calVal+buttonItem;
    setcalVal(newValue);
  }
 }

return(
  <>
  <h1>Calculator App</h1>
  <div className={styles.calculator}>
    <Display calVal={calVal}></Display>
    <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
  </div>
  </>
)
}
export default App;