import React, { useRef } from 'react';
import '../Pages/Packages.css';
import img1 from '../assets/5.avif';
import img2 from '../assets/7.avif';
import img3 from '../assets/8.avif';
import img4 from '../assets/9.avif';
import img5 from '../assets/10.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faUserGroup,
  faLocation,
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';

const Packages = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -630, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 630, behavior: 'smooth' });
  };

  const package_details = [
    {
      img: img1,
      name: "Bhutan",
      price: "Rs.12000",
      days: "4 days",
      user: "20+",
      location: "India"
    },
    {
      img: img2,
      name: "Dubai",
      price: "Rs.24000",
      days: "8 days",
      user: "10+",
      location: "UAE"
    },
    {
      img: img3,
      name: "Nicobar Island",
      price: "Rs.34000",
      days: "7 days",
      user: "12+",
      location: "India"
    },
    {
      img: img4,
      name: "Andaman",
      price: "Rs.30000",
      days: "6 days",
      user: "15+",
      location: "India"
    },
    {
      img: img5,
      name: "Lakshadweep",
      price: "Rs.28000",
      days: "5 days",
      user: "18+",
      location: "India"
    },
  ];

  return (
    <div className='packages_content'>
      <div className='packages_condition'>
        <p style={{ fontSize: "50px" }}>Famous Destination</p>
        <h1>Our Popular Destinations</h1>
      </div>

      <div className='packages_wrapper'>
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className='arrow_icon'
          onClick={scrollLeft}
        />

        <div className='packages' ref={scrollRef}>
          {package_details.map((data, index) => (
            <div className='packages_card' key={index}>
              <img src={data.img} className='card_img' alt={data.name} />
              <div className='package_des'>
                <p style={{ fontWeight: "bold" }}>{data.name}</p>
                <p style={{gap:"10px"}}>
                  <span style={{ color: "orange" }}>{data.price}</span> per person
                </p>
                <div className='package_details'>
                  <p style={{gap:"10px"}}><FontAwesomeIcon icon={faClock} /> {data.days}</p>
                  <p style={{gap:"10px"}}><FontAwesomeIcon icon={faUserGroup} /> {data.user}</p>
                  <p style={{gap:"10px"}}><FontAwesomeIcon icon={faLocation} /> {data.location}</p>
                </div>
              </div>
            </div>
          ))}
          
       
        </div>
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className='arrow_icon'
          onClick={scrollRight}
        />

      </div>
    </div>
  );
};

export default Packages;
