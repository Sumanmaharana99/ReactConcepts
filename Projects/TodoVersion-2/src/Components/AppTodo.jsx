import styles from "./AppTodo.module.css";
import { useState } from "react";
const AppTodo=({onNewItem})=>{


 const [todoName,settodoName]=useState("");
 const [todoDueDate,settodoDueDate]=useState("");
 
 const handleNameChange=(e)=>{
      settodoName(e.target.value)
 }
 const handleDateChange=(e)=>{
      settodoDueDate(e.target.value)
 }
 const handleAddButtonClicked=()=>{
    onNewItem(todoName,todoDueDate);
    settodoName('');//After taking input and clicking ADD clear both input sections
    settodoDueDate('');
 }
 return <div className={styles.AppTodocss}>
 <div className="row rowElements">
            <div className="col-6"><input type="text" placeholder="Enter your Todo Here" value={todoName} onChange={handleNameChange}/></div>
            <div className="col-4"><input type="date" value={todoDueDate} onChange={handleDateChange}></input></div>
            <div className="col-2"><button type="button" className="btn btn-success" onClick={handleAddButtonClicked}>ADD</button></div>
        </div>
 </div>
}
export default AppTodo;