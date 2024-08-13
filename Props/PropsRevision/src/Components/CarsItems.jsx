import Item from "./Item";
const CarsItems = ({items}) =>{
  return <>
  <ul className="list-group">
    {items.map((item)=>(
       <Item key={item} carItem={item}></Item>
    ))}
    </ul>
  </>
}
export default CarsItems;