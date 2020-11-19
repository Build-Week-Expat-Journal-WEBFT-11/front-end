import React from "react"
import {useHistory } from 'react-router-dom'
import axios from "axios"


let Post = function(props){
let {post} = props

let history = useHistory()


let editOnClick = function(){
history.push(`/editpost/${post.id}`)
}

let deleteOnClick = function(){
axios.delete(`https://expat-journal-backend2.herokuapp.com/api/posts/${post.id}`)
.then(function(res){
    console.log(res)
    window.location.reload()
})
}

    return(
        <div>
            <h2>{post.story_title}</h2>
            <img src={post.photo_url}/>
            <p>{post.story}</p>
            <button onClick={editOnClick}>Edit Post</button>
            <button onClick={deleteOnClick}>Delete Post</button>
            </div>
    )
}

export default Post