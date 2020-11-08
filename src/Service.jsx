import React from "react";
import Card from "./Card";
import CardData from "./Carddata";
function Service(){
    return(<>
    <div className="my-5">
     <h1 style={{color:"#3498db"}} className="text-center"> Our Services </h1> 
     </div>
     <div className="container-fluid mb-5">
     <div className="row">
      <div className="col-10 mx-auto">
      <div className="container pl-4 pr-4">
 <div className="row gy-4">
  {CardData.map((cardval)=>{return( <Card key={cardval.id} location={cardval.watchl} title={cardval.title} imgsrc={cardval.imgsrc}/>)})}</div>
  </div> </div> </div> </div> 
    </>);
}
export default Service;