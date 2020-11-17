import {Route} from "react-router-dom"

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
    const {formValues,disabled,formErrors,change}=props

    const onChange=(evt)=>{
        const {name, value}=evt.target;
        change(name,value)
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
	        <input type="text" name="name" id="demo-name" value={formValues.name} placeholder="Enter your name here" onChange={onChange} />
            </label>
		    </div>
            <div className="col-6 col-12-xsmall">
            <label className="loginlabel">Email:
	        <input type="email" name="email" id="demo-name" value={formValues.email} placeholder="Email" onChange={onChange} />
            </label>
		    </div>
            <div className="col-6 col-12-xsmall">
            <label className="loginlabel">Password:
	        <input type="password" name="password" id="demo-name" value={formValues.password} placeholder="Password" onChange={onChange} />
            </label>
		    </div>
            <div className="errorsDiv">
                <div>{formErrors.name}</div>
                <div>{formErrors.email}</div>
                <div>{formErrors.password}</div>
            </div>
            <button disabled={disabled} className="primary signupbutton">Sign up</button>
           
        </div>

</div>
    )
    
}