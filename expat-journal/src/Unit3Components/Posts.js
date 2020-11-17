import React,{useEffect} from "react"
import { connect } from "react-redux"
import getPosts from "./actions/PostsActions"
import Post from "./Post"

let Posts = function(props){

useEffect(function(){
props.getPosts()
},[])

console.log(props.posts)

    return(
        <div>
            {props.posts.map(function(item){
                return <Post post={item}/>
            })}
        </div>
    )
}

let mapStateToProps = function(state){
    return {
        posts: state.PostReducer.posts
    }
    }
    
    export default connect(mapStateToProps,{getPosts})(Posts)