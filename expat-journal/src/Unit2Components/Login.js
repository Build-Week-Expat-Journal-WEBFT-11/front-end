import {Route} from "react-router-dom"
import {useState,useEffect} from "react"
import * as yup from 'yup'
import schema from "./validation/loginSchema"
import axios from "axios"
import {useHistory} from "react-router-dom"



  
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


const initialValidationDisplay="hideerrors"

export default function Login(props){
    const {formValues,disabled,formErrors,setFormValues,setFormErrors,setDisabled}=props

    const [validationDisplay,setValidationDisplay]=useState(initialValidationDisplay)


    let history = useHistory()

    

    const handleChange=(evt)=>{
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
          console.log("error", err)
          
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
        const loginInfo={
           
            email:formValues.email,
            password:formValues.password
        }
        axios.post("https://expat-journal-backend2.herokuapp.com/api/auth/login",loginInfo)
            .then((res)=>{
                console.log(res)
                console.log("loginInfo",loginInfo)
                localStorage.setItem("token",res.data.payload)
                history.push("/posts")
            })
            .catch((err)=>{
                console.log(err)
                
            })
          }
          else {
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
      if (formValues.password==="")
      {setFormErrors({...formErrors, password:"Please provide a password"})}
      else{}
      

  },[])


      

        
        
    
    
    

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
	        <input id="email" type="email" name="email"  value={formValues.email} placeholder="Enter Email" onChange={handleChange} />
            </label>
		    </div>
            <div className="col-6 col-12-xsmall">
            <label className="loginlabel">Password:
	        <input id="password" type="password" name="password"  value={formValues.password}  placeholder="Enter Password"  onChange={handleChange} />
            </label>
		    </div>
            <div className="errorsDiv">
                <div className={validationDisplay}>{formErrors.email}</div>
                <div className={validationDisplay}>{formErrors.password}</div>
            </div>
            <button onClick={onSubmit} disabled={disabled} className="primary loginbutton">Log-in</button>
            <div className="linktosignup">
                Don't have an account? <a href="/signup">Sign up here.</a>
            </div>
        </div>
      </div>
    )
}