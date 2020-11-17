import {} from "./assets/css/main.css"
import expat1 from "./images/expat1.jpg"
import expat4 from "./images/expat4.jpg"

import {Route} from "react-router-dom"

function Menu(){
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



export default function Home(){
	

    return(
        <div>
            	
			<div id="wrapper">

				
					<header id="header" className="alt style2">
						<a href="/login" className="logo"> <span>Log-In</span></a>
						<nav>
							<a href="/home/menu">Menu</a>
						</nav>
					</header>

				
					<Route exact path="/home/menu"><Menu /></Route>

				
					<section id="banner" className="style2"  background-position= "center 0px">
						<div className="inner">
							<span className="image">
								<img src="images/pic07.jpg" alt="" />
							</span>
							<header className="major">
								<h1>Expat Journal</h1>
							</header>
							<div className="content">
								<p>As an expat, I want to be able to show off the places I've been and remember them for myself. I have a lot of amazing pics and stories from around the world I'd like to share, but I need a site that is more personal than Instagram in order to do so.</p>
							</div>
						</div>
					</section>

				
					<div id="main">

						
							<section id="one">
								<div className="inner">
									<header className="major">
										<h2>Sed amet aliquam</h2>
									</header>
									<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
								</div>
							</section>

						
							<section id="two" className="spotlights">
								<section>
									<a href="generic.html" className="image">
										<img src={expat4} alt="" data-position="center center" />
									</a>
									<div className="content">
										<div className="inner">
											<header className="major">
												<h3>Orci maecenas</h3>
											</header>
											<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
											<ul className="actions">
												<li><a href="generic.html" className="button">Learn more</a></li>
											</ul>
										</div>
									</div>
								</section>
								
								
							</section>

						
							

					</div>

				
					
							
				
					<footer id="footer">
						<div className="inner">
							<ul className="icons">
								<li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
								<li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
								<li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
								<li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
							</ul>
							<ul className="copyright">
								<li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</footer>

			</div>

		
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>


        </div>
    )
}