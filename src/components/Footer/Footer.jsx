import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="w3-animate-zoom flexColStart f-left">
                <img src='./mlogo.jpeg' alt='' width={120}/>
                <span className="secondaryText">
                        Our vision is to make all people <br/>
                        get the best service from us.
                </span>
                <span className="secondaryText">Copyright © 2023 Miracle Ms Trading Plc </span>
            </div>


            <div className="w3-animate-zoom flexColStart f-center">
            <span className='primaryText'>Contact</span> 
            <div className="ab">
            <a href="#" class="fa fa-phone">  <span>+251955994663</span> </a>
            <a href="#" class="fa fa-map-marker"> <span>Jemo 1, Ruth Building 4th Floor Office Number 19, Addis Ababa</span> </a>
            <a href="#" class="fa fa-envelope"> <span>miraclems2023@gmail.com</span>  </a>
            </div>
            </div>


            <div className="w3-animate-zoom flexColStart f-right">
                <div className=" primaryText  f-menu">
                <span className='primaryText'> Follow us</span>
                </div>
                <div className="a">
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-linkedin"></a>
                </div>
            </div>

      
        </div>
   </section>
  )
}

export default Footer