import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoItems from "./Components/TodoItems";
import { useState,useReducer } from "react";
import Welcomemessage from "./Components/Welcomemessage";
import { TodoItemsContext } from "./store/todo-items-store";

//Reducer function is a pure function so declared outside the component=>takes action returns new state
const todoItemsReducer=(currtodoItems,action)=>{
 let newTodoItems=currtodoItems;
 if(action.type==="NEW_ITEM"){
 newTodoItems=[...currtodoItems, {"todo_name":action.payload.todoName,
       "todo_date":action.payload.todoDueDate}]
 } else if(action.type==="DELETE_ITEM"){
  newTodoItems=currtodoItems.filter((item)=>item.todo_name!==action.payload.todoName);
 }
 return newTodoItems;
}


function App(){
  //Object creation in js
  //  const initialtodoItems = [
  //    {
  //      "todo_name":"Buy Milk",
  //      "todo_date":"5/8/2024"
  //    },
  //    {
  //     "todo_name":"Go to college",
  //      "todo_date":"25/7/2024"
  //    },
  //  {
  //    "todo_name":"Games",
  //      "todo_date":"28/10/2024"
  //  },
  //  {
  //    "todo_name":"Movies",
  //      "todo_date":"20/12/2024"
  //  }
  //  ]
     
  const [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[])

  // const [todoItems,settodoItems]=useState([]);

  const addNewItem=(todoName,todoDueDate)=>{
    //yaha "useState HOOK" use kiya  hu
    // console.log(`Name:${todoName} and Date:${todoDueDate}`)
    // const newtodoItems=[...todoItems, {"todo_name":todoName,
    //    "todo_date":todoDueDate}]//[..todoItems]=>spread Operators
    //    settodoItems(newtodoItems);

    //Yaha "useReducer HOOK" used hai
    const newItemAction={
      type:"NEW_ITEM",
      payload:{
        todoName,
        todoDueDate
      }
    }
    dispatchTodoItems(newItemAction);
  }
  const deleteItem=(todoName)=>{
    //Yaha "UseState HOOk" used hai
    // const newTodoItems=todoItems.filter((item)=>item.todo_name!=todoName)
    // //filter method new Array banata hai True or false basiis pe
    // //Agar mera current item ka naam "todoName" se alag hai to wo true hoga aur wo current item mera new Array mai jayega agar false hua toh nhi jayega 
    // settodoItems(newTodoItems);//repaint
  // console.log(`The deleted item is : ${todoName}`)
 

  //yaha useReducer hook used hai
  const deleteItemAction={
    type:"DELETE_ITEM",
    payload:{
      todoName
    }
  }
  dispatchTodoItems(deleteItemAction);
  }
  // const defaultItems=[{"todo_name":"Anime",
  //   "todo_date":"30/12/2024"}]
  return (
 <TodoItemsContext.Provider value={
  {
    todoItems:todoItems,
    addNewItem:addNewItem,
    deleteItem:deleteItem
  }
 }>
 <center className="Todo-container">
    <AppName></AppName> 
    <div className="container">
    <AppTodo ></AppTodo>
    <Welcomemessage />
    <TodoItems></TodoItems>
      </div> 
    
  </center>
  </TodoItemsContext.Provider>
  )
}
export default App;