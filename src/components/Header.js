import React from 'react'
import Navbar from './Navbar';
const Header = () => {
    return (
        <div className="banner">
             <Navbar/>
           <div className="banner_content">
               <div className="container">
                   <div className="container_text">
                        <h3>Pizza Delivery</h3>
                        <h1>MAESTRO PIZINNI</h1>
                        <p>
                        This is the normal family, and it has two sister families so far, Alternates and Subrayada.
                        </p>
                        <div className="banner_btn">
                            <a href="" className="btn btn_smart">DELIVERY NOw</a>

                        </div>
                    </div>  
                  
               </div>

           </div>
        </div>
    )
}

export default Header;
