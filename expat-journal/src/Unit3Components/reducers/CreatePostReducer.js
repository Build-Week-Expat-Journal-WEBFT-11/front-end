import {onTypeTitle,onTypeStory,onTypeImage} from "../actions/CreatePostActions"

let initialpost = {
    photo_url: "",
    story: "",
    story_title: "",
    upvotes: 1,
    user_id: 1
}

let CreatePostReducer = function(state = initialpost, action){
    switch(action.type){
        case onTypeTitle:
            return {
                ...state,
                story_title: action.payload
            }
            case onTypeStory:
                return {
                    ...state,
                    story: action.payload
                }
                case onTypeImage:
            return {
                ...state,
                photo_url: action.payload
            }
    default:return state
}
}

export default CreatePostReducer