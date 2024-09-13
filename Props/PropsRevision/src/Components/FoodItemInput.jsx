import styles from "./FoodItemInput.module.css";
const FoodItemInput = ({handleKeyDown}) =>{
    
 return (
    <input 
    type="text" 
    placeholder="Enter food item here"
    className={styles.foodInput}
    onKeyDown={handleKeyDown}>
    </input>
 )
}
export default FoodItemInput;