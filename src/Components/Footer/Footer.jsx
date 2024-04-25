import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: smooth scrolling behavior
    });
  };

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>TownTrove</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        {/* Add onClick handler to scroll to top when "Contact" link is clicked */}
        <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;







// import React from 'react'
// import './Footer.css'
// import footer_logo from '../Assets/logo_big.png'
// import instagram_icon from '../Assets/instagram_icon.png'
// import pintester_icon from '../Assets/pintester_icon.png'
// import whatsapp_icon from '../Assets/whatsapp_icon.png'

// const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className="footer-logo">
//             <img src={footer_logo} alt="" />
//             <p>TownTrove</p>
//         </div>
//         <ul className="footer-links">
//             <li>Company</li>
//             <li>Products</li>
//             <li>Offices</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//         <div className="footer-social-icon">
//             <div className="footer-icons-container">
//                 <img src={instagram_icon} alt="" />
//             </div>
//             <div className="footer-icons-container">
//                 <img src={pintester_icon} alt="" />
//             </div>
//             <div className="footer-icons-container">
//                 <img src={whatsapp_icon} alt="" />
//             </div>
//         </div>
//         <div className="footer-copyright">
//             <hr />
//             <p>Copyright @ 2024 - All Rights Reserved</p>
//         </div>
//     </div>
//   )
// }

// export default Footer
