import styles from "./Item.module.css";
const Item = ({carItem, bought ,handleBuyButton}) =>{


 return (
 <li className={`list-group-item ${bought && "active"}`}>
    <span>{carItem}</span>
    <button 
    type="button" className={`${styles.button} btn btn-info`}
    onClick={handleBuyButton}>Buy</button>
 </li>
 )

}
export default Item;