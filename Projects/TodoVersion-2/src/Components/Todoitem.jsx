const TodoItem = ({todoName,todoDate,onDeleteClick})=>{
   return <>
     <div className="row rowElements">
    <div className="col-6">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-2"><button type="button" className="btn btn-danger" onClick={()=>onDeleteClick(todoName)}>DELETE</button></div>
  </div>
   </>
}
export default TodoItem;