import styles from "./AppTodo.module.css";
//npm install react-icons -->save to use react icons
import { GrAdd } from "react-icons/gr";//imported add item from React-icons

import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const AppTodo=({onNewItem})=>{  //used Context Api for adding new item so no need of onNewItem Prop from parent

//  const [todoName,settodoName]=useState("");
//  const [todoDueDate,settodoDueDate]=useState("");
//  const noOfUpdates=useRef(0);//UseRef Hook->states stores karna hai but UI repainting nhi chahiye tab use karo useRef hook
//using useRef instead of useState can increase efficiency by reduccing the repaint cycle

//NOTE->Agar jsx element mai useRef use karna toh by default ek ref atrribute hota ha sab react componenet mai usko use karo ex->input section dekho
const todoNameElement=useRef();
const tododueDateElement=useRef();

//using ContextApi for adding item
const { addNewItem } = useContext(TodoItemsContext);

//Commented out because we are using useRef instead of useState
//  const handleNameChange=(e)=>{
//       settodoName(e.target.value)
//      //  noOfUpdates.current+=1;//noOfUpdates.current holds the current value.
//  }
//  const handleDateChange=(e)=>{
//       settodoDueDate(e.target.value)
//       console.log(noOfUpdates.current)
//  }
 const handleAddButtonClicked=(e)=>{
    e.preventDefault();//Form default action is to submit the form to the server as soon as possible and refresh the page to prevent this default behaviour we use e.preventDeafult()
    const todoName=todoNameElement.current.value;
    const todoDueDate=tododueDateElement.current.value;
    todoNameElement.current.value="";
    tododueDateElement.current.value="";
    console.log(`Todoname: ${todoName} and TododueDate: ${todoDueDate}`)
    addNewItem(todoName,todoDueDate);
//     settodoName('');//After taking input and clicking ADD clear both input sections
//     settodoDueDate('');
 }
 return <div className={styles.AppTodocss}>
 <form className="row rowElements" onSubmit={handleAddButtonClicked}>
            <div className="col-6"><input type="text" placeholder="Enter your Todo Here"  ref={todoNameElement}/></div>
            <div className="col-4"><input type="date" ref={tododueDateElement}></input></div>
            <div className="col-2"><button type="submit" className="btn btn-success" ><GrAdd /></button></div>
        </form>
 </div>
}
export default AppTodo;