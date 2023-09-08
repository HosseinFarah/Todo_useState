import { useContext, useState } from "react";
import { favName } from "../App";
export const Footer = () => {
const {name,setName}=useContext(favName)
const [fav,setFav]= useState("")
const getFavname = ()=>{
  setName(fav)
}
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <input type="text" onChange={(e)=>{setFav(e.target.value)}}/>
          <button onClick={getFavname}>Set</button>
          <h5>{name}</h5>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              FINLAND
              <br />
              TAMPERE
              <br />
              Email: h.farah61@gmail.com
            </address>
          </div>
          <div className="col-md-4">

            {/* Hossein Farahkordmahaleh */}
            
          </div>
        </div>
      </div>
    </footer>
  );
};
