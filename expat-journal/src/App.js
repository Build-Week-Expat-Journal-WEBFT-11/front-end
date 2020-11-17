import React, {useState} from "react"
import {Route,Redirect} from 'react-router-dom'
import Posts from "./Unit3Components/Posts"
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

const initialDisabled=true
function App() {
  const [formValues, setFormValues]=useState(initialFormValues)
    const [formErrors, setFormErrors]=useState(initialFormErrors)
    const [disabled,setDisabled]=useState(initialDisabled)

    



  return (
    <div className="App">
      <Route exact path='/'><Redirect to="/home" /></Route>
      <Route path="/home"> <Home/></Route>
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
      <Posts/>
    </div>
      
  );
}

export default App;
