<<<<<<< HEAD
 import React, {useState,useEffect} from 'react'
import {Route,Link, Switch,Redirect} from 'react-router-dom'
import * as yup from 'yup'
=======
import React from "react"
import {Route,Link, Switch,Redirect} from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Posts from "./Unit3Components/Posts"

>>>>>>> 21e4789572e33399a07d1ee64f9dc669fc4894ce





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
<<<<<<< HEAD
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
=======
      <Route path="/login"><Login/></Route> 
      <Route path="/signup"><Signup/></Route>
      <Posts/>
>>>>>>> 21e4789572e33399a07d1ee64f9dc669fc4894ce
    </div>
      
  );
}

export default App;
