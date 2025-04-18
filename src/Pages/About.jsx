import React from 'react';
import '../Pages/About.css';
import img4 from '../assets/4.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faStar,faShieldAlt } from '@fortawesome/free-solid-svg-icons';
const About = () => {

  const asure = [
    {
      img: faMagnifyingGlass,
      heading: "Transparent Search",
      des: "Easily compare options with clear pricing and honest reviews to make informed decisions."
    },
    {
      img: faStar,
      heading: "Top-rated Services",
      des: "We feature only the highest-rated professionals to ensure quality and reliability."
    },
    {
      img: faShieldAlt,
      heading: "Satisfaction Guarantee",
      des: "Your satisfaction is our priority—get support or a refund if expectations aren't met."
    }
  ];
  return (
    <div className='About_content'>
        <div className='About_content_left'>
            <div className='img_sec'>
            
            </div><img src={img4} className='img4'/>
            
        </div>
        <div className='About_content_right'>
            <p><span style={{color:"orange",fontSize:"40px"}}>way choose us?</span></p>
            <h1 style={{fontSize:"50px"}}>Plan your Trip with us</h1>
            <div className='conditions'>
          {asure.map((dta, index) => (
            <div className='assure_card' key={index}>
              <div className='imgsec'>
            <FontAwesomeIcon icon={dta.img} className='icon'/>
              </div>
            
              <div className='asure_condition'>
              <h4>{dta.heading}</h4>
              <h5>{dta.des}</h5>
              </div>
            </div>
          ))}
        </div>
        </div>
      
    </div>
  )
}

export default About
