import { useContext } from "react";
import { MdDelete } from "react-icons/md";//imported delete icon from react icon
import { TodoItemsContext } from "../store/todo-items-store";
const TodoItem = ({todoName,todoDate,onDeleteClick})=>{ //used context api so no need of onDeleteClick prop => Therefore,NOT USED
  const {deleteItem} = useContext(TodoItemsContext);
   return <>
     <div className="row rowElements">
    <div className="col-6">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-2"><button type="button" className="btn btn-danger" onClick={()=>deleteItem(todoName)}><MdDelete /></button></div>
  </div>
   </>
}
export default TodoItem;