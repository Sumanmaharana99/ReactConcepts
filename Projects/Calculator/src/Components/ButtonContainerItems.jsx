import styles from "./ButtonContainerItems.module.css";
const ButtonContainerItems = ({buttonItem,onButtonClick}) =>{
return <>
<button className={styles.button} onClick={()=>onButtonClick(buttonItem)}>{buttonItem}</button>

</>
}
export default ButtonContainerItems;