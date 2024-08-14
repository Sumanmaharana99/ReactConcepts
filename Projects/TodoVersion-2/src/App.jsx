import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoItems from "./Components/TodoItems";
function App(){
  //Object creation in js
  const todoItems = [
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

  return <center className="Todo-container">
    <AppName></AppName> 
    <div className="container">
    <AppTodo></AppTodo>
    <TodoItems todoItems={todoItems}></TodoItems>
      </div> 
    
  </center>

}
export default App;