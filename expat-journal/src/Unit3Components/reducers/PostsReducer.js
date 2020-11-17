import {getPosts_Success} from "../actions/PostsActions"

let initialposts = {
    posts: []
}

let PostReducer = function(state = initialposts,action){
    switch(action.type){
        case getPosts_Success:
            return {
                ...state,
                posts: action.payload
            }
        default:return state
    }
}

export default PostReducer