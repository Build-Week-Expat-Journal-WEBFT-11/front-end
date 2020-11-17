 import React, {useState,useEffect} from 'react'
import {Route,Link, Switch,Redirect} from 'react-router-dom'
import * as yup from 'yup'
import schema from "./validation/formSchema"


import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"

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

    const change=(name,value)=>{
    yup.reach(schema,name)
    .validate(value)
    .then(()=>{
      setFormErrors({
        ...formErrors,[name]:''

      })
    })
    .catch ((err)=>{
      
      setFormErrors({...formErrors,
      [name]:err.errors[0]
    })
  })

  setFormValues({
    ...formValues,
    [name]:value
  })
}

  useEffect(()=>{
    schema.isValid(formValues)
      .then(valid=>{
        setDisabled(!valid);
      })
  }, [formValues])


  return (
    <div className="App">
      <Route exact path='/'><Redirect to="/home" /></Route>
      <Route path="/home"> <Home/></Route>
      <Route path="/login"><Login
      formValues={formValues}
      formErrors={formErrors}
      disabled={disabled}
      change={change}/></Route> 
      <Route path="/signup"><Signup
      formValues={formValues}
      formErrors={formErrors}
      disabled={disabled}
      change={change}/></Route>
    </div>
      
  );
}

export default App;
