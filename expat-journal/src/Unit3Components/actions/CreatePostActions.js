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