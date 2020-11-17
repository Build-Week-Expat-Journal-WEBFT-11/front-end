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

export default function Signup(){
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
	        <input type="text" name="name" id="demo-name" value="" placeholder="Enter your name here" />
            </label>
		    </div>
            <div className="col-6 col-12-xsmall">
            <label className="loginlabel">Email:
	        <input type="email" name="email" id="demo-name" value="" placeholder="Email" />
            </label>
		    </div>
            <div className="col-6 col-12-xsmall">
            <label className="loginlabel">Password:
	        <input type="password" name="username" id="demo-name" value=""  placeholder="Password" />
            </label>
		    </div>
            <button className="primary signupbutton">Sign up</button>
           
        </div>

</div>
    )
    
}