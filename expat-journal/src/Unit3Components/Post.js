import React from "react"

let Post = function(props){
let {post} = props


    return(
        <div>
            <h2>{post.story_title}</h2>
            <img src={post.photo_url}/>
            <p>{post.story}</p>
        </div>
    )
}

export default Post