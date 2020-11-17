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


export default function Signup(props){
    const {formValues,disabled,formErrors,setFormValues,setFormErrors,setDisabled}=props

    

    const onChange=(evt)=>{
        const {name, value}=evt.target;
        change(name,value,2)
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


      const onSubmit=evt=>{
        evt.preventDefault()
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
	        <input type="email" name="email"  value={formValues.email} placeholder="Email" onChange={onChange} />
            </label>
		    </div>
            <div className="col-6 col-12-xsmall">
            <label className="loginlabel">Password:
	        <input type="password" name="password"  value={formValues.password} placeholder="Password" onChange={onChange} />
            </label>
		    </div>
            <div className="errorsDiv">
                <div>{formErrors.name}</div>
                <div>{formErrors.email}</div>
                <div>{formErrors.password}</div>
            </div>
            <button onClick={onSubmit} disabled={disabled} className="primary signupbutton">Sign up</button>
           
        </div>

</div>
    )
    
}