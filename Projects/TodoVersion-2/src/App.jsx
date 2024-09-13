import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import Welcomemessage from "./Components/Welcomemessage";
function App(){
  //Object creation in js
   const initialtodoItems = [
     {
       "todo_name":"Buy Milk",
       "todo_date":"5/8/2024"
     },
     {
      "todo_name":"Go to college",
       "todo_date":"25/7/2024"
     },
   {
     "todo_name":"Games",
       "todo_date":"28/10/2024"
   },
   {
     "todo_name":"Movies",
       "todo_date":"20/12/2024"
   }
   ]
                 
  const [todoItems,settodoItems]=useState(initialtodoItems);
  const handleNewItems=(todoName,todoDueDate)=>{
    console.log(`Name:${todoName} and Date:${todoDueDate}`)
    const newtodoItems=[...todoItems, {"todo_name":todoName,
       "todo_date":todoDueDate}]//[..todoItems]=>spread Operators
       settodoItems(newtodoItems);
  }
  const handleDeleteItems=(todoName)=>{
    const newTodoItems=todoItems.filter((item)=>item.todo_name!=todoName)
    //filter method new Array banata hai True or false basiis pe
    //Agar mera current item ka naam "todoName" se alag hai to wo true hoga aur wo current item mera new Array mai jayega agar false hua toh nhi jayega 
    settodoItems(newTodoItems);//repaint
  // console.log(`The deleted item is : ${todoName}`)
  }
  return <center className="Todo-container">
    <AppName></AppName> 
    <div className="container">
    <AppTodo onNewItem={handleNewItems}></AppTodo>
    {todoItems.length===0 && <Welcomemessage/>}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItems}></TodoItems>
      </div> 
    
  </center>

}
export default App;