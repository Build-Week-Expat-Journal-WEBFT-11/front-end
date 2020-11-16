import axios from "axios"

export let getPosts_Success = "getPosts_Success"

let getPosts = function(){
return function(dispatch){
axios.get("https://expat-journal-backend2.herokuapp.com/api/posts")
.then(function(data){
    dispatch({type: getPosts_Success,payload: data.data})
})
}
}

export default getPosts