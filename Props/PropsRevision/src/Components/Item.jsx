import styles from "./Item.module.css";
const Item = ({carItem}) =>{
const handleButtonClicked = (carItem,event) =>{
    console.log(event)
    console.log(`${carItem} is bought`);
}

 return (
 <li className="list-group-item">
    <span>{carItem}</span>
    <button 
    type="button" className={`${styles.button} btn btn-info`}
    onClick={(event)=>
         handleButtonClicked(carItem,event)
    }>Buy</button>
 </li>
 )

}
export default Item;