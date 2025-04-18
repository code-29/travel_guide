import React, { useState } from 'react';
import '../Pages/Client.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/12.avif';
import img2 from '../assets/13.avif';
const client_det = [
  {
    img: img1,
    name: "Mark Peterson",
    company: "TechValid Inc.",
    feedback: "Working with this team was a game changer for our development process. They delivered on time, communicated effectively, and exceeded expectations."
  },
  {
    img: img2,
    name: "Elena Musk",
    company: "Brainrot Studios",
    feedback: "Their design sense and attention to detail truly brought our vision to life. Highly professional and creative throughout the project."
  },
  {
    img: img1,
    name: "Jason Lee",
    company: "PixelForge",
    feedback: "The collaboration was smooth and efficient. They understood our needs perfectly and delivered a top-notch product."
  },
  {
    img: img2,
    name: "Sophia Nguyen",
    company: "InnoWave Solutions",
    feedback: "I was impressed by their technical expertise and customer support. Looking forward to future projects together."
  }
];


const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(''); // 'left' or 'right'

  const prevClient = () => {
    setSlideDirection(''); // reset first
    setTimeout(() => {
      setSlideDirection('left');
      setCurrentIndex((prev) => (prev === 0 ? client_det.length - 1 : prev - 1));
    }, 10); // just enough delay to retrigger animation
  };
  const nextClient = () => {
    setSlideDirection('');
    setTimeout(() => {
      setSlideDirection('right');
      setCurrentIndex((prev) => (prev === client_det.length - 1 ? 0 : prev + 1));
    }, 10);
  };

  const currentClient = client_det[currentIndex];

  return (
    <div className='client_content'>
      <div className='client_para'>
        <p className='client_para1'>What our client says?</p>
        <h1 className='client_para2'>Client Testimonial</h1>
      </div>

      <div className={`client_side slide-${slideDirection}`}>
        <div className='imgg_sec'>
          <img src={currentClient.img} alt={`${currentClient.name}'s feedback`} />
        </div>

        <div className='client_card'>
          <div className='client_details'>
            <p style={{ fontWeight: "bold" }}>{currentClient.name}</p>
            <p style={{ color: "orange" }}>{currentClient.company}</p>
            <p>{currentClient.feedback}</p>
          </div>
        </div>
      </div>

      <div className='arrow'>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className='arroow' onClick={prevClient} />
        <FontAwesomeIcon icon={faArrowAltCircleRight} className='arroow' onClick={nextClient} />
      </div>
    </div>
  );
};

export default Client;
