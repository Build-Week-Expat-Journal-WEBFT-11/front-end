import React from "react"

let CreatePost = function(props){
    return (
        <div>
            <h1>Create Post</h1>
            <form>
                <label>Title:
                    <input
                    type="text"
                    />
                </label>
                <br/>

                <label>Story:
                    <textarea>

                    </textarea>
                </label>
                <br/>

                <label>Image:
                    <input
                    type="text"
                    />
                </label>
                <br/>

                <input type="submit"/>
            </form>
        </div>
    )
}

export default CreatePost