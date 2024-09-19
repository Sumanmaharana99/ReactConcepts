import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import Createpost from "./components/Createpost"
import PostList from "./components/PostList"
import { useState } from "react"
import PostListProvider from "./store/Post-list-store"
 const App = () =>{
    const [selectedTab,setselectedTab]=useState("Create");
  return (
    <PostListProvider>
  <div className="app-container">
  <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}></Sidebar>
  <div className="content">
  <Header></Header>
  {selectedTab==="Home"?<PostList></PostList> :   <Createpost></Createpost>}
  <Footer></Footer>
  </div>
  </div>
  </PostListProvider>
 )
}
 export default App;