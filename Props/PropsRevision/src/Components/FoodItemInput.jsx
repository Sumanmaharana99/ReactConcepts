import styles from "./FoodItemInput.module.css";
const FoodItemInput = () =>{
    const handleOnchange = (e) =>{
        console.log(e.target.value);
    }
 return (
    <input 
    type="text" 
    placeholder="Enter food item here"
    className={styles.foodInput}
    onChange={(e)=>
    handleOnchange(e)}>
    </input>
 )
}
export default FoodItemInput;