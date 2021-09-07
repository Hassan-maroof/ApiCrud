import { useEffect, useState } from "react";
 import {  deleteSpecificPost } from '../Api/Index';

function DeletePost({match}){
    const[deletePost,setdeletePost]  = useState ([]) ;
    useEffect(()=>{
        const deletePost = async ()=>{
            const deleteReq = await deleteSpecificPost(match.params.id)
            setdeletePost(deleteReq);
        }
        deletePost(); 
    },[])
    useEffect(()=>{
        console.log(deletePost)
    },[deletePost])
    return (
        <div > Post deleted</div>
    );
}

export default DeletePost