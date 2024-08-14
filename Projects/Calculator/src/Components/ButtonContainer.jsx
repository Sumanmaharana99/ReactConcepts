import styles from "./ButtonContainer.module.css";
import ButtonContainerItems from "./ButtonContainerItems";
const ButtonContainer = ({buttonName}) =>{
 return  <div className={styles.buttonsContainer}>
      {buttonName.map((item=>(
        <ButtonContainerItems key={item} buttonItem={item}></ButtonContainerItems>
      )))}
</div>
}
export default ButtonContainer;