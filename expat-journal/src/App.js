import React from "react"
import {Route,Link, Switch,Redirect} from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Posts from "./Unit3Components/Posts"
import CreatePost from "./Unit3Components/CreatePost"
import EditPost from "./Unit3Components/EditPost"


function App() {
  return (
    <div className="App">
      <Route exact path='/'><Redirect to="/home" /></Route>
      <Route path="/home"> <Home/></Route>
      <Route path="/login"><Login/></Route> 
      <Route path="/signup"><Signup/></Route>
      <Route path="/posts"><Posts/></Route>
      <Route path="/createpost"><CreatePost/></Route>
      <Route path="/editpost/:id"><EditPost/></Route>
    </div>
      
  );
}

export default App;
