import styles from "./AppTodo.module.css";
const AppTodo=()=>{
 return <div className={styles.AppTodocss}>
 <div className="row rowElements">
            <div className="col-6"><input type="text" placeholder="Enter your Todo Here"/></div>
            <div className="col-4"><input type="date"></input></div>
            <div className="col-2"><button type="button" className="btn btn-success">ADD</button></div>
        </div>
 </div>
}
export default AppTodo;