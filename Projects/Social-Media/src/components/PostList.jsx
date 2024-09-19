import { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/Post-list-store";
//Upar name conflict ke wajah se Postlist ko as PostListData use kiya hai
const PostList=()=>{
    const {postList}=useContext(PostListData);
return <>
{postList.map((post)=>
<Post key={post.id} post={post}></Post> //Each individual post ko mai postList mai pass kar raha hu
)}
</>
}
export default PostList;