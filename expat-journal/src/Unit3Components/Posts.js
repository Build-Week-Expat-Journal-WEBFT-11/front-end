import React,{useEffect} from "react"
import { connect } from "react-redux"
import getPosts from "./actions/PostsActions"
import Post from "./Post"
import {useHistory} from "react-router-dom"

let Posts = function(props){

    let history = useHistory()

    let creatPostOnClick = function(){
        history.push("/createpost")
    }

useEffect(function(){
props.getPosts()
},[])

console.log(props.posts)

    return(
        <div>
        <div><h1>Click To Create A Post!</h1> <button onClick={creatPostOnClick}>Create Post</button></div>
        <div>
            {props.posts.map(function(item){
                return <Post post={item}/>
            })}
        </div>
        </div>
    )
}

let mapStateToProps = function(state){
    return {
        posts: state.PostReducer.posts
    }
    }
    
    export default connect(mapStateToProps,{getPosts})(Posts)