import React, { useState } from "react";
import Contacts from "../src/img/undraw_contact_us_15o2.png";
function Contact(){
    const [txt,newtxt]=useState({name:"",coment:"",email:"",phone:""});
function text(event){
    event.preventDefault();
alert(` You are ${txt.name} Your Phone is ${txt.phone} Your Email is ${txt.email} You wanna say ${txt.coment}`);
}function inputv(event){
    const name=event.target.name;
    const value=event.target.value;
        newtxt((prevalue)=>{
            return{
                ...prevalue,
                [name]:value
} })
            }
    return(<>
     <div className="container nav-bg">
    <div className="row">
<div className="col-6 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
    <h1 style={{color:"#3498db",textTransform:"capitalize"}}>Contact Us</h1>
</div>
<div className="col-lg-6 order 1 order-lg-2 header_img">
    <img style={{height:"200px"}} src={Contacts} alt="header img" className="img-fluid animated"/>
</div>
</div>
</div>
</div>
</div>
     <div className="container">
     <div className="row">
      <div className="col-6 mx-auto">
        <form style={{margin:"5",px:"15%"}}>
  <div className="form-group">

    <label htmlFor="name">Name</label>
    <input type="text" name="name" onChange={inputv}  className="form-control" id="name" value={txt.name} placeholder="Enter Your Name"/>
<br/>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" onChange={inputv} className="form-control" id="name" value={txt.email} placeholder="Enter Your Email"/>
<br/>
    <label htmlFor="phonee">Phone Number</label>
    <input type="number" name="phone" onChange={inputv} className="form-control" id="name" value={txt.phone} placeholder="Enter Your Phone Number"/>
<br/>
    <label htmlFor="coment">Comment</label>
    <textarea type="text" name="coment" onChange={inputv} className="form-control" id="name" value={txt.coment} placeholder="Enter Any Comment or Suggestion"/>
<br/>
        <button onClick={text} className="btn btn-outline-primary">Submit</button><br/><br/>
  </div>
</form></div></div></div>
    </>);
}
export default Contact;