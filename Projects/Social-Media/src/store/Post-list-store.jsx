import { createContext, useReducer } from "react";
 export const PostList=createContext(
     //This is the final object jo mai context mai dena chata haii
    //Contract designing
    //Ye sirf ek structure hai original method PostList.Provider value={} mai ayega
    {postList:[],
    addPost:()=>{},
    deletePost:()=>{}
});
   
  

const PostListReducer=(currPostList,action)=>{

let newPostList=currPostList;
if(action.type==="DELETE_POST"){
  newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
}
if(action.type==="ADD_POST"){
  newPostList=[action.payload,...currPostList];
}
return newPostList;
}

const PostListProvider=({children})=>{
const [postList,dispatchPostList]=useReducer(PostListReducer,DEFAULT_POST_LIST);

const addPost=(userId,PostTitle,PostBody,reactions,tags)=>{
  // console.log(`${userId}, ${PostTitle}, ${PostBody}, ${reactions}, ${tags}`)
   dispatchPostList({
   type:"ADD_POST",
   payload:{
    id: Date.now(),
    title:PostTitle,
    body:PostBody,
    reactions:reactions,
    userId:userId,
    tags:tags
   }
   })
}

const deletePost=(postId)=>{
  //console.log(postId)
  dispatchPostList({
    type:'DELETE_POST',
    payload:{
      postId
    }
  })
}

return <PostList.Provider value={
    {
      //Object ko {} wrap kiya
    postList,
    addPost,
    deletePost
}
}>{children}</PostList.Provider>
}
const DEFAULT_POST_LIST=[
    {
      id:'1',
      title:'Going to Mumbai',
      body:'Mumbai for vacation is great deal of joy and happiness',
      reactions:'2',
      userId:'user-9',
      tags:['vacation','adventure','Mumbai']
},
    {
      id:'2',
      title:'Graduation ceremony',
      body:'Happy to be graduated',
      reactions:'30',
      userId:'user-10',
      tags:['Graduated','unbelievable']
}

]
export default PostListProvider;