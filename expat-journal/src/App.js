 import React, {useState} from 'react'
import {Route,Link, Switch,Redirect} from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"

const initialFormValues={
  email:'',
  password:'',

}
const initialFormErrors={
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
      disabled={disabled}/></Route> 
      <Route path="/signup"><Signup/></Route>
    </div>
      
  );
}

export default App;
