import TodoItem from "./Todoitem";
import styles from "./Todoitems.module.css";
const TodoItems = ({todoItems}) =>{
 return <div className={styles.itemsContainer}>
   {todoItems.map((items=>(
      <TodoItem key={items} todoName={items.todo_name} todoDate={items.todo_date}></TodoItem>
   )))}
 </div>
}
export default TodoItems;