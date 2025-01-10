<<<<<<< HEAD
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
             <div className="footer-content-left">
                <img width="150px" src={assets.logo} alt="" /> 
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At totam quas magni velit eveniet alias autem delectus cumque officiis commodi, consequatur modi possimus quos similique sit praesentium ducimus vel accusantium.</p>
                <div className="footer-social-icons">
                  <a href="https://www.linkedin.com/in/arif-ali-647001247/"><img src={assets.facebook_icon} alt="" /></a> 
                  <a href="https://www.linkedin.com/in/arif-ali-647001247/"><img src={assets.twitter_icon} alt="" /></a> 
                  <a href="https://www.linkedin.com/in/arif-ali-647001247/"><img src={assets.linkedin_icon} alt="" /></a>  
                </div>
             </div>
             <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Privacy policy</li>
                 </ul>
              </div>
             <div className="footer-content-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>+91-9891087069</li>
                    <li>arifali7862001@gmail.com</li>
                  </ul>
             </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All right Reserved.</p>
    </div>
  )
}

export default Footer
=======
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
             <div className="footer-content-left">
                <img src={assets.logo} alt="" /> 
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At totam quas magni velit eveniet alias autem delectus cumque officiis commodi, consequatur modi possimus quos similique sit praesentium ducimus vel accusantium.</p>
                <div className="footer-social-icons">
                   <img src={assets.facebook_icon} alt="" />
                   <img src={assets.twitter_icon} alt="" />
                   <img src={assets.linkedin_icon} alt="" />
                </div>
             </div>
             <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Privacy policy</li>
                 </ul>
              </div>
             <div className="footer-content-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>+91-9891087069</li>
                    <li>arifali7862001@gmail.com</li>
                  </ul>
             </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All right Reserved.</p>
    </div>
  )
}

export default Footer
>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
