 import React from './Navbar'; 
 import'./Navbar.css';
 import {Link} from "react-router-dom";
 
 
 function Navbar(){
    return(
        <div className='navbar1'>
            <Link to="/"><img className="aiti-logo" src="images/love.png" alt='logo'/></Link>
            <ul className='tags'>
             <li><Link to="/">Project </Link></li>
             <li><Link to="news">Classes</Link></li>
             <li><Link to="contact">Community</Link></li>
             <li><Link to="about">About</Link></li>
            </ul>
             <div className='button'>
            <button className="Create" > Create Project</button>
            {/* <Link to="/create"><button></button></Link> */}
            <button className="login">Login Page</button>
            </div> 
            
            {/* <button>Add </button> */}
        </div>     
   );

}
export default Navbar;
