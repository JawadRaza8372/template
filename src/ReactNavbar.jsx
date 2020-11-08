import React from "react";
import {NavLink} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function ReactNavbar(){
return (<>
<div className="container-fluid">
    <div className="row">
<div className="col-10 mx-auto">

    <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <a className="navbar-brand ml-2" href="/">
    <p className="blacksimpletxt brandname">JawadRaza</p></a>
  <div className="mr-1" style={{marginLeft:"auto"}}><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <NavLink exact activeClassName="active_class"  className="btnmanu nav-link"  to="/">Home</NavLink>
        <NavLink exact activeClassName="active_class"    className="btnmanu nav-link"  to="/services">Services</NavLink>
        <NavLink exact activeClassName="active_class"    className="btnmanu nav-link"  to="/about">About</NavLink>
        <NavLink exact activeClassName="active_class"    className="btnmanu nav-link"  to="/contact">Contact</NavLink>
  </div> </div> 
</nav>    </div></div>
</div>
</>);
}
export default ReactNavbar;