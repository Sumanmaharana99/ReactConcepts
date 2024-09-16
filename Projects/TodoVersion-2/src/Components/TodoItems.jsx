import { useContext } from "react";
import TodoItem from "./Todoitem";
import styles from "./Todoitems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
const TodoItems = ({onDeleteClick}) =>{

  // const ContextObj=useContext(TodoItemsContext)
  // const todoItems=ContextObj.todoItems;
  //shortcut for above code is object destructuring
  const {todoItems}=useContext(TodoItemsContext);

 return <div className={styles.itemsContainer}>
   {todoItems.map((items=>(
      <TodoItem key={items.todo_name} todoName={items.todo_name} onDeleteClick={onDeleteClick} todoDate={items.todo_date}></TodoItem>
   )))}
 </div>
}
export default TodoItems;