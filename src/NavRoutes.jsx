import React from "react";
import {Route,Switch} from "react-router-dom";
import ReactNavbar from "./ReactNavbar";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Home from "./Home";
function NavRoutes(){
    return(<>
    <ReactNavbar/>
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/services" component={Service} />
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route component={""}/>
         </Switch>

    </>);
    }
    export default NavRoutes; 