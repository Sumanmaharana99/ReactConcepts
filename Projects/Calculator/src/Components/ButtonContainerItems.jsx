import styles from "./ButtonContainerItems.module.css";
const ButtonContainerItems = ({buttonItem}) =>{
return <>
<button className={styles.button}>{buttonItem}</button>

</>
}
export default ButtonContainerItems;