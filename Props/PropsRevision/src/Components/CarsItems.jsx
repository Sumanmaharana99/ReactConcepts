import { useState } from "react";
import Item from "./Item";
const CarsItems = ({items}) =>{

let [activeItems,setActiveItems]=useState([]);
const onBuyButton=(event,item)=>{
    let newItems=[...activeItems,item];
    setActiveItems(newItems);
}

  return <>
  <ul className="list-group">
    {items.map((item)=>(
       <Item key={item} 
       carItem={item} 
       bought={activeItems.includes(item)}
       handleBuyButton={(event)=>
        onBuyButton(event,item)
        }></Item>
    ))}
    </ul>
  </>
}
export default CarsItems;