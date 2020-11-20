import React from "react"
import { connect } from 'react-redux'
import {onChange} from "./actions/CreatePostActions"
import { useHistory } from 'react-router-dom'
import axios from "axios"

let CreatePost = function(props){
    console.log(props)

let history = useHistory()

let onSubmit = function(event){

    event.preventDefault()

    let newpost = {
    photo_url: props.photo_url.trim(),
    story: props.story.trim(),
    story_title: props.story_title.trim(),
    upvotes: props.upvotes,
    user_id: props.user_id
    }

    postNewPost(newpost)

    history.push("/posts")
    history.go(0)
}

let postNewPost = function(newpost){
axios.post("https://expat-journal-backend2.herokuapp.com/api/posts/",newpost)
.then(function(data){console.log(data)})
}

let onClick = function(){
    history.push("/posts")
}

    return (
        <div>
            <h1>Create Post</h1>
            <button onClick={onClick}>Return To Posts</button>
            <form onSubmit={onSubmit}>
                <label>Title:
                    <input
                    type="text"
                    name="title"
                    value={props.story_title}
                    onChange={props.onChange}
                    />
                </label>
                <br/>

                <label>Story:
                    <textarea 
                    name="story"
                    value={props.story}
                    onChange={props.onChange}
                    >

                    </textarea>
                </label>
                <br/>

                <label>Image Url:
                    <input
                    type="text"
                    name="image"
                    value={props.photo_url}
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
    story_title: state.CreatePostReducer.story_title,
    story: state.CreatePostReducer.story,
    photo_url: state.CreatePostReducer.photo_url,
    upvotes: state.CreatePostReducer.upvotes,
    user_id: state.CreatePostReducer.user_id
    }
}

export default connect(mapStateToProps,{onChange})(CreatePost)