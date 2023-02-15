import { Fragment } from "react";


function Main({name,city,Position}){
 
  return (
    <Fragment>
      <img src="https://happygift.lk/wp-content/uploads/2021/06/orji-1-1-scaled.jpg" alt="CardImage"/>
      <div>
        <h3>{name}</h3>
        <p><span>{city}</span><span>{Position}</span></p>
      </div>
    </Fragment>

  );
}
export default Main;