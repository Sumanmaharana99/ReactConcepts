import TodoItem from "./Todoitem";
import styles from "./Todoitems.module.css";
const TodoItems = ({todoItems,onDeleteClick}) =>{
 return <div className={styles.itemsContainer}>
   {todoItems.map((items=>(
      <TodoItem key={items} todoName={items.todo_name} onDeleteClick={onDeleteClick}todoDate={items.todo_date}></TodoItem>
   )))}
 </div>
}
export default TodoItems;