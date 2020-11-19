import { combineReducers } from 'redux'
import PostReducer from "./PostsReducer"
import CreatePostReducer from "./CreatePostReducer"
import EditPostReducer from "./EditPostReducer"

export default combineReducers({
    PostReducer,
    CreatePostReducer,
    EditPostReducer
})