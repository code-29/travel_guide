import React from 'react';
import '../Pages/Home.css';
import img1 from '../assets/1.avif';
import img2 from'../assets/2.avif';
import img3 from '../assets/3.avif';
import flight from '../assets/flight.avif';
// import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const locationData = {
    location: "Chennai",
    date: "28 March Fri",
    Price: "Rs. 78,000"
  };

  return (
    <div className='home_content'>
      <div className='home_content_right'>
      <div className='home_para'>
        <p className='home_para1'>Let’s Create Memorable Journey</p>
        <p className='home_para2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic aliquid facilis error, sed dignissimos quibusdam soluta.
        </p>
      </div>

      <div className='location-grid'>
      <div className='card'>
      <div className='grid-header'>
          <h3>Location <FontAwesomeIcon icon={faAngleDown} style={{position:"relative",top:"2px"}}/></h3>
          <h3>Date<FontAwesomeIcon icon={faAngleDown} style={{position:"relative",top:"2px",left:"10px"}}/></h3>
          <h3>Price<FontAwesomeIcon icon={faAngleDown} style={{position:"relative",top:"2px",left:"10px"}}/>
          </h3>
          <div className='sc'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search_icon' />
          </div>
        
          
          
        
        </div>
        <div className='grid-values'>
         
          <p>{locationData.location}</p>
          <p>{locationData.date}</p>
          <p>{locationData.Price}</p>
        </div>
      </div>
      
      </div>
      </div>
     <div className='home_content_left'>
      <div className='img_side'>
      <img src={img3}/>
      <img src={img2}/>
      </div>
      <div className='img_side2'>
        <img src={flight} className='flight'/>
      <img src={img1} className='scene'/>
      </div>
  
     </div>
    </div>
  );
};

export default Home;
