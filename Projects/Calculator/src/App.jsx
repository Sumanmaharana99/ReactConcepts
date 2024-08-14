import styles from "./App.module.css"
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";
function App(){
  let buttonName=["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
return(
  <>
  <h1>Calculator App</h1>
  <div className={styles.calculator}>
    <Display></Display>
    <ButtonContainer buttonName={buttonName}></ButtonContainer>
  </div>
  </>
)
}
export default App;