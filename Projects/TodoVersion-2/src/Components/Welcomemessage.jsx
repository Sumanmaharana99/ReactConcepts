import { useContext } from "react";
import styles from "./Welcomemessage.module.css"
import { TodoItemsContext } from "../store/todo-items-store";

const Welcomemessage=()=>{
  // const ContextObj=useContext(TodoItemsContext)
  // const todoItems=ContextObj.todoItems;
  const {todoItems}=useContext(TodoItemsContext);
  return  todoItems.length===0 && <p className={styles.welcome}>Enjoy your day...</p>
}
export default Welcomemessage;