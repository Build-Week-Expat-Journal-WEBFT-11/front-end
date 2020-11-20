import React, {useState} from "react"
import {Route,Redirect} from 'react-router-dom'
import Posts from "./Unit3Components/Posts"
import CreatePost from "./Unit3Components/CreatePost"
import EditPost from "./Unit3Components/EditPost"
import Home from "./Unit2Components/Home"
import Login from "./Unit2Components/Login"
import Signup from "./Unit2Components/Signup"


const initialFormValues={
  name: '',
  email:'',
  password:'',

}
const initialFormErrors={
  name: '',
  email:'',
  password:'',

}

const initialDisabled=false
function App() {
  const [formValues, setFormValues]=useState(initialFormValues)
    const [formErrors, setFormErrors]=useState(initialFormErrors)
    const [disabled,setDisabled]=useState(initialDisabled)

    



  return (
    <div className="App">
      <Route exact path='/'><Redirect to="/home" /></Route>
      <Route path="/home"> <Home/></Route>
      <Route path="/posts"><Posts/></Route>
      <Route path="/createpost"><CreatePost/></Route>
      <Route path="/editpost/:id"><EditPost/></Route>
      <Route path="/login"><Login
      formValues={formValues}
      disabled={disabled}
      formErrors={formErrors}
      setFormValues={setFormValues}
      setFormErrors={setFormErrors}
      setDisabled={setDisabled}
      /></Route> 
      <Route path="/signup"><Signup
      formValues={formValues}
      disabled={disabled}
      formErrors={formErrors}
      setFormValues={setFormValues}
      setFormErrors={setFormErrors}
      setDisabled={setDisabled}
      /></Route>
    </div>
      
  );
}

export default App;
