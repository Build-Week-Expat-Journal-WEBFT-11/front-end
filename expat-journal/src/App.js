 import React from 'react'
import {Route,Link, Switch,Redirect} from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"

function App() {
  return (
    <div className="App">
      <Route exact path='/'><Redirect to="/home" /></Route>
      <Route path="/home"> <Home/></Route>
      <Route path="/login"><Login/></Route> 
      <Route path="/signup"><Signup/></Route>
    </div>
      
  );
}

export default App;
