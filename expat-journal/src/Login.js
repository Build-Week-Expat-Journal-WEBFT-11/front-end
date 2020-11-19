import {Route} from "react-router-dom"


function LoginMenu(){
    return (
        <nav id="menu">
						
						<ul className="actions stacked">
                        <li><a href="/home" className="button fit">Home</a></li>
							<li><a href="/login" className="button primary fit">Log-in</a></li>
							<li><a href="/signup" className="button primary fit">Sign-Up</a></li>
						</ul>
					</nav>
    )
}


export default function Login(){
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
	        <input type="email" name="email" id="demo-name" value="" placeholder="Email" />
            </label>
		    </div>
            <div className="col-6 col-12-xsmall">
            <label className="loginlabel">Password:
	        <input type="password" name="username" id="demo-name" value=""  placeholder="Password" />
            </label>
		    </div>
            <button className="primary loginbutton">Log-in</button>
            <div className="linktosignup">
                Need an account? <a href="/signup">Sign up here.</a>
            </div>
        </div>
      </div>
    )
}