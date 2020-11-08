import React from "react";
import { NavLink } from "react-router-dom";
function Card(props){
return (<>
<div className="colu col-lg-4 col-md-5 col-sm-8 col-xsm-10 col-10 mx-auto">
<div className="card border-primary mb-3">
  <div className="card-header border-primary"><img src={props.imgsrc} alt="pic"/></div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <NavLink to={props.location} style={{width:"100px"}} className="btn btn-outline-primary">Visit</NavLink>
  </div>
</div></div>
</>);
}
export default Card;