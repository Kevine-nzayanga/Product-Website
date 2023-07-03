import React from "react";
import './style.css';
import { FaRegUserCircle } from 'react-icons/fa';


const Navbar = () => {
    return (
      <div className="navbar">
        <nav className="nav">
        <img src="https://res.cloudinary.com/dtu8pkzkp/image/upload/v1688357629/whitec-fotor-20230619193056_vwyuao.png" alt="Logo"/>
          <ul className="ul">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
               {/* <a href="/">Information</a>  */}
            </li>
            <li>
                <a href="/login"><FaRegUserCircle/></a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  
  export default Navbar;