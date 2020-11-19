import React,{useEffect} from "react"
import { connect } from "react-redux"
import getPostById from "./actions/EditPostActions"
import {useParams} from "react-router-dom"
import {onChange} from "./actions/EditPostActions"
import { useHistory } from 'react-router-dom'
import axios from "axios"

let EditPost = function(props){

    let {id} = useParams()

    console.log(props.post)

    let history = useHistory()

let onSubmit = function(event){

    event.preventDefault()

    let newpost = {
    photo_url: props.post.photo_url.trim(),
    story: props.post.story.trim(),
    story_title: props.post.story_title.trim(),
    upvotes: props.post.upvotes,
    user_id: props.post.user_id
    }

    putChangedPost(newpost)

    history.push("/posts")
}

let putChangedPost = function(newpost){
axios.put(`https://expat-journal-backend2.herokuapp.com/api/posts/${id}`,newpost)
.then(function(data){console.log(data)})
}

let onClick = function(){
    history.push("/posts")
}

useEffect(function(){
props.getPostById(id)
},[])

    return(
        <div>
            <h1>Edit Post</h1>
            <button onClick={onClick}>Return To Posts</button>
            <form onSubmit={onSubmit}>
                <label>Title:
                    <input
                    type="text"
                    name="title"
                    value={props.post.story_title}
                    onChange={props.onChange}
                    />
                </label>
                <br/>

                <label>Story:
                    <textarea 
                    name="story"
                    value={props.post.story}
                    onChange={props.onChange}
                    >

                    </textarea>
                </label>
                <br/>

                <label>Image Url:
                    <input
                    type="text"
                    name="image"
                    value={props.post.photo_url}
                    onChange={props.onChange}
                    />
                </label>
                <br/>

                <input type="submit"/>
            </form>
        </div>
    )
}

let mapStateToProps = function(state){
    return {
        post: state.EditPostReducer.post
    }
    }

export default connect(mapStateToProps,{getPostById,onChange})(EditPost)