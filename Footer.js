import React from "react";
import'./Footer.css';
import {Link} from "react-router-dom";


function Footer (){
    return(
    <div className="foot">
        <nav className="footer">

            <div>
            <Link to="/"><img className="aiti-logo"src="images/love.png"alt='logo'/></Link>

            <ul className="links">
             <li><Link to="#">Courses</Link></li>
             <li><Link to="#">Careers</Link></li>
             <li><Link to="#">FAQs</Link></li>
             <li><Link to="#">Contac Us</Link></li>
            </ul>
            </div>
            <div className="details">
                <p>Sackey Akumia st,
                    <br/>Accra,Ghana</p><br/>
                    0244024038 <br/>
                    (Admission in progress)
            </div>

        
        </nav>
    </div>

    );
}
export default Footer;