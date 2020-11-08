import React from "react";
import { NavLink } from "react-router-dom";
function Common(props){
    
    return(<>
    
<section id="header" className="d-flex align-items-center">
<div className="container-fluid nav-bg">
    <div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
    <h1 style={{textTransform:"capitalize"}}>{props.text} <strong className="brand_name">Jawad Raza</strong></h1>
    <h2 className="my-3">We are the team of Talented Developers.</h2>
<div className="mt-3">
    <NavLink style={{borderRadius:"12px"}} className="btn btn-outline-primary" to={props.location}>{props.btn}</NavLink>
</div>
</div>
<div className="col-lg-6 order 1 order-lg-2 header_img">
    <img style={{height:"500px"}} src={props.image} alt="header img" className="img-fluid animated"/>
</div>
</div>
</div>
</div>
</div>
</section>
    </>);
}
export default Common;