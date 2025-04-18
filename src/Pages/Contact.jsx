import React from 'react';
import '../Pages/contact.css';
import img1 from '../assets/11.avif';

const Contact = () => {
  return (
    <div className='contact_content'>
         <div className='contact_left'>
         <p className='para'>Why Choose Us</p>
<h1>Discover the World with Dream Dictation</h1>
<p className='des'>
  At Dream Dictation, we turn your travel dreams into unforgettable adventures. Whether you're exploring new destinations or seeking hidden gems.
</p>
<button className='about_btn'> About Us</button>

          <div className='experience'>
            <div className='grid_heaader'>
              <h2>14</h2>
              <h2>320+</h2>
              <h3>67+</h3>
            </div>
            <div className='grid_valuees'>
              <p>years Experience</p>
              <p>Distention collaboration</p>
              <p>Satisfied Customer</p>
            </div>
          </div>
          </div>     
          <div className='contact_right'>
            <div className='im'>
            <img src={img1} className='img_right'/>
            </div>
            
            </div> 
    </div>
  )
}

export default Contact;
