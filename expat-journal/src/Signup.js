import {Route} from "react-router-dom"

function SignupMenu(){
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

</div>
    )
    
}