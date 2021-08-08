import React from "react"
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import EditUser from "./components/EditUser"
import Code from "./components/Code";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import NavBar from './components/NavBar';
import NotFound from "./components/NotFound";


function App() {
  return (
   
    <BrowserRouter  >
    <NavBar/>
    <Switch>
    <Route exact path='/' component={Code}/>
    <Route exact path='/all' component={AllUsers}/>
    <Route exact path='/add' component={AddUser}/>
    <Route exact path='/edit/:_id' component={EditUser}/>
    <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
