 import React, {useState,useEffect} from 'react'
import {Route,Link, Switch,Redirect} from 'react-router-dom'
import * as yup from 'yup'





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
      formErrors={formErrors}
      disabled={disabled}
      setFormValues={setFormValues}
      setFormErrors={setFormErrors}
      setDisabled={setDisabled}
      /></Route> 
      <Route path="/signup"><Signup
      formValues={formValues}
      formErrors={formErrors}
      disabled={disabled}
      setFormValues={setFormValues}
      setFormErrors={setFormErrors}
      setDisabled={setDisabled}
      /></Route>
    </div>
      
  );
}

export default App;
