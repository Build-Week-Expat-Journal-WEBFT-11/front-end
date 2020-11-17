import {Route} from "react-router-dom"
import {useState,useEffect} from "react"
import * as yup from 'yup'
import schema from "./validation/loginSchema"
import axios from "axios"



  
function LoginMenu(){
    return (
        <nav id="menu">
						
						<ul className="actions stacked">
                        <li><a href="/home" className="button primary fit">Home</a></li>
							<li><a href="/login" className="button fit">Log-in</a></li>
							<li><a href="/signup" className="button primary fit">Sign-Up</a></li>
						</ul>
					</nav>
    )
}




export default function Login(props){
    const {formValues,disabled,formErrors,setFormValues,setFormErrors,setDisabled}=props
    

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
        const loginInfo={
           
            email:formValues.email,
            password:formValues.password
        }
        axios.post("https://expat-journal-backend2.herokuapp.com/api/auth/login",loginInfo)
            .then((res)=>{
                console.log(res)
                console.log("loginInfo",loginInfo)
            })
            .catch((err)=>{
                console.log(err)
                console.log("loginInfo",loginInfo)
            })
        }
    

    
    
    

    return (
    <div className="loginscreen" height="100%" width="100%">
        <header id="header" className="alt style2">
						<a href="/home" className="logo"> <span>Home</span></a>
						<nav>
							<a href="/login/menu">Menu</a>
						</nav>
					</header>

                    <Route exact path="/login/menu"><LoginMenu /></Route>
    
        <div className="loginbox">
             
             
            <div className="col-6 col-12-xsmall">
            <label className="loginlabel">Email:
	        <input type="email" name="email"  value={formValues.email} placeholder="Email" onChange={onChange} />
            </label>
		    </div>
            <div className="col-6 col-12-xsmall">
            <label className="loginlabel">Password:
	        <input type="password" name="password"  value={formValues.password}  placeholder="Password"  onChange={onChange} />
            </label>
		    </div>
            <div className="errorsDiv">
                <div>{formErrors.email}</div>
                <div>{formErrors.password}</div>
            </div>
            <button onClick={onSubmit} disabled={disabled} className="primary loginbutton">Log-in</button>
            <div className="linktosignup">
                Don't have an account? <a href="/signup">Sign up here.</a>
            </div>
        </div>
      </div>
    )
}