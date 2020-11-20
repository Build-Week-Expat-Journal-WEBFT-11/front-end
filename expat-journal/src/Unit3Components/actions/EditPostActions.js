import axios from "axios"

export let getPostByID_Success = "getPostByID_Success"

let getPostById = function(id){
return function(dispatch){
axios.get(`https://expat-journal-backend2.herokuapp.com/api/posts/${id}`)
.then(function(data){
    dispatch({type: getPostByID_Success,payload: data.data})
})
}
}

export let onTypeTitle = "onTypeTitle"
export let onTypeStory = "onTypeStory"
export let onTypeImage = "onTypeImage"

export let onChange = function(event){ 
    let {value} = event.target
    if(event.target.name === "title"){
        return {type: onTypeTitle,payload: value}
    } else if(event.target.name === "story"){
        return {type: onTypeStory,payload: value}
    } else if(event.target.name === "image"){
        return {type: onTypeImage,payload: value}
    }

}

export default getPostById