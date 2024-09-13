import styles from "./ButtonContainer.module.css";
import ButtonContainerItems from "./ButtonContainerItems";
const ButtonContainer = ({onButtonClick}) =>{
  const buttonName=["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
 return  <div className={styles.buttonsContainer}>
      {buttonName.map((item=>(
        <ButtonContainerItems key={item} onButtonClick={onButtonClick} buttonItem={item}></ButtonContainerItems>
      )))}
</div>
}
export default ButtonContainer;