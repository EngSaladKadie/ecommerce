import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magnam illo quaerat beatae repellat quisquam
                     accusantium aspernatur adipisci nobis quas dolores?</p>
                     <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        
                     </div>

            </div>
            <div className="footer-content-center">
                <h1>salad company</h1>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privecey Policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <li>+252 618520031</li>
                <li>contact@salad.com</li>
            </div>
        </div>
        <hr />
        <p className="copy-right">copyright 2025  salad.com All Right Reserved</p>
      
    </div>
  )
}

export default Footer
