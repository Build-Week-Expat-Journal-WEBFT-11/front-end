import {getPostByID_Success,onTypeTitle,onTypeStory,onTypeImage} from "../actions/EditPostActions"

let initialpost = {
    post: {
    photo_url: "",
    story: "",
    story_title: "",
    upvotes: 1,
    user_id: 1
}
}

let EditPostReducer = function(state = initialpost,action){
    switch(action.type){
        case getPostByID_Success:
            return {
                ...state,
                post: action.payload
            }
            case onTypeTitle:
                return{
                    ...state,
                    post:{
                        photo_url: state.post.photo_url,
                        story: state.post.story,
                        story_title: action.payload,
                        upvotes: state.post.upvotes,
                        user_id: state.post.user_id
                    }
                }
                case onTypeStory:
                    return{
                        ...state,
                        post:{
                            photo_url: state.post.photo_url,
                            story: action.payload,
                            story_title: state.post.story_title,
                            upvotes: state.post.upvotes,
                            user_id: state.post.user_id
                        }
                    }
                    case onTypeImage:
                        return{
                            ...state,
                            post:{
                                photo_url: action.payload,
                                story: state.post.story,
                                story_title: state.post.story_title,
                                upvotes: state.post.upvotes,
                                user_id: state.post.user_id
                            }
                        }
        default:return state
    }
}

export default EditPostReducer