import React from 'react';
import '../Pages/Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  return (
    <div className='landing_content'>
      <div className='landing_details'>

        {/* Travel Section */}
        <div className='Travel'>
          <div className='heading'>
            <h1>Travel</h1>
            <p>
              Discover unforgettable journeys with Dream Dictation. 
            </p>
            <div className='iconnn'>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className='servicees'>
          <h1>Services</h1>
          <ul>
            <li>About Us</li>
            <li>Destinations</li>
            <li>Services</li>
            <li>Our Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Instagram Section */}
        <div className='insta'>
          <h1>Instagram</h1>
          <ul>
            <li>Services</li>
            <li>Our Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className='ctn'>
          <h1>Contact Us</h1>
          <ul >
            <li style={{gap:"20px"}} ><FontAwesomeIcon icon={faEnvelope} /> info@dreamdictation.com</li>
            <li style={{gap:"20px"}}><FontAwesomeIcon icon={faPhone} /> +123 456 7890</li>
            <li style={{gap:"20px"}}><FontAwesomeIcon icon={faLocationDot} /> 123 Travel Lane, Wander City</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Landing;
