import {Route} from "react-router-dom"
import React, {useState,useEffect} from 'react'
import schema from "./validation/signupSchema"
import * as yup from 'yup'
import axios from "axios"

function SignupMenu(){
    return (
        <nav id="menu">
						
						<ul className="actions stacked">
                        <li><a href="/home" className="button primary fit">Home</a></li>
							<li><a href="/login" className="button primary fit">Log-in</a></li>
							<li><a href="/signup" className="button fit">Sign-Up</a></li>
						</ul>
					</nav>
    )
}
const initialValidationDisplay="hideerrors"

export default function Signup(props){
    const {formValues,disabled,formErrors,setFormValues,setFormErrors,setDisabled}=props
    const [validationDisplay,setValidationDisplay]=useState(initialValidationDisplay)

    

    const onChange=(evt)=>{
        const {name, value}=evt.target;
        change(name,value)
    }
    

    const change=(name,value)=>{
        yup.reach(schema,name)
        
        .validate(value)
        .then(()=>{
          setFormErrors({
            ...formErrors,[name]:''
    
          })
        })
        .catch ((err)=>{
          console.log(err.errors)
          setFormErrors({...formErrors,
          [name]:err.errors[0]
        })
      })
    
      setFormValues({
        ...formValues,
        [name]:value
      })
    }

   
    
      


    const onSubmit=evt=>{
      if (formValues.email==="")
  {setFormErrors({...formErrors, email:"Please provide an email address"})}
  else{}
        evt.preventDefault()
        schema.isValid(formValues)
        .then((valid)=>{
          if(valid==true){
          console.log('VALID')
        const newUser={
            name:formValues.name,
            email:formValues.email,
            password:formValues.password
        }
        axios.post("https://expat-journal-backend2.herokuapp.com/api/auth/register",newUser)
            .then((res)=>{
                console.log(res)
                console.log("newUser",newUser)
            })
            .catch((err)=>{
                console.log(err)
                console.log("newUser",newUser)
            })
          }
        else {console.log('INVALID')
          setDisabled(true)
          setValidationDisplay('displayerrors')
          
        }
      })
    }
    
    useEffect(()=>{
      if(validationDisplay==='displayerrors'){
      schema.isValid(formValues)
        .then(valid=>{
          setDisabled(!valid);
        })
      }
      else{}
    }, [formValues])

    

  useEffect(()=>{
    if (formValues.name==="")
    {setFormErrors({...formErrors, name:"Please tell us your name"})}
    else{}
    

},[])
    
const passval=(()=>{
  if (formValues.password==="")
      {setFormErrors({...formErrors,password :"Please provide a password"})}
      else{}
})
    

    return (
        <div className="signupscreen">
        <header id="header" className="alt style2">
        <a href="/home" className="logo"> <span>Home</span></a>
        <nav>
            <a href="/signup/menu">Menu</a>
        </nav>
    </header>

    <Route exact path="/signup/menu"><SignupMenu /></Route>

    <div className="loginbox">
             
    <div className="col-6 col-12-xsmall">
            <h2>Sign Up:</h2>
            <label className="loginlabel">Full Name:
	        <input type="text" name="name"  value={formValues.name} placeholder="Enter your name here" onChange={onChange} />
            </label>
		    </div>
            <div className="col-6 col-12-xsmall">
            <label className="loginlabel">Email:
	        <input type="email" name="email"  value={formValues.email} placeholder="Enter Email" onChange={onChange} />
            </label>
		    </div>
            <div className="col-6 col-12-xsmall">
            <label className="loginlabel">Password:
	        <input type="password" name="password"  value={formValues.password} placeholder="Enter Password" onChange={onChange} />
            </label>
		    </div>
            <div className="errorsDiv">
                <div className={validationDisplay}>{formErrors.name}</div>
                <div className={validationDisplay}>{formErrors.email}</div>
                <div className={validationDisplay}>{formErrors.password}</div>
            </div>
            <button onMouseOver={passval} onClick={onSubmit} disabled={disabled} className="primary signupbutton">Sign up</button>
           
        </div>

</div>
    )
    
}