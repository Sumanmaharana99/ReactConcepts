import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const Createpost=()=>{
const userIdElement=useRef();
const PostTitleElement=useRef();
const PostBodyElement=useRef();
const reactionsElement=useRef();
const tagsElement=useRef();

const { addPost } = useContext(PostList);//context use kar raha kiyuki mujhe sare useRef variables ko add karne hai post mai

const handleSubmit=(event)=>{
 event.preventDefault();//FORM ko apne hisab se submit karunga
 const userId=userIdElement.current.value;
 const PostTitle=PostTitleElement.current.value;
 const PostBody=PostBodyElement.current.value;
 const reactions=reactionsElement.current.value;
 const tags=tagsElement.current.value.split(" ");

 addPost(userId,PostTitle,PostBody,reactions,tags);

 userIdElement.current.value="";
 PostTitleElement.current.value="";
 PostBodyElement.current.value="";
 reactionsElement.current.value="";
 tagsElement.current.value="";
}
 return (
 <form className="create-post" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your USER id here</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="User Id..."/>   
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Enter Post Title</label>
    <input type="text" 
   ref={PostTitleElement} className="form-control" id="title" placeholder="How are  you felling today..."/>   
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Enter Post Content</label>
    <textarea ref={PostBodyElement} row="5" type="text" className="form-control" id="body" placeholder="Tell us more about it..."/>   
  </div>
  

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
    <input type="text" 
   ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people have reacted to this post..."/>   
  </div>

  <div className="mb-3">
    <label htmlFor="hashtags" className="form-label">Enter your hashtags here</label>
    <input type="text" ref={tagsElement} className="form-control" id="hashtags" placeholder="Please enter tags using space..."/>   
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
 
)}
export default Createpost;