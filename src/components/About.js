import React from 'react'
import './About.css'
import img2 from './Assets/main2.png'
import img3 from './Assets/image 2.png'
import img4 from './Assets/image 3.png'
import img5 from './Assets/image 4.png'
const About = () => {
  return (
    < >
        <div className='container' id='about'>
       
        <h1 className='heading'>About</h1>
      
        <img src={img2}></img>
        
        <div className='arrow'>
          <img src={img3}></img>
          <h2>Frontend Developer</h2>
         </div>
         <div className='content'>
        <p className='p1'>I’m a front-end developer with experience
           in building responsive and optimized sites</p>
        </div>
      
        <div className='server'>
        <img src={img4}></img>
        <h2 className='h2'>Backend Developer</h2>
        </div>
        <div className='content'>
        <p className='p2'>
        I have experience developing fast and
         optimised back-end systems and APIs
        </p>
        </div>
        //
        <div className='ui'>
            <img src={img5}></img>
            <h2 className='h3'>UI Designer</h2>
        </div>
        <div className='content'>
                <p className='p3'>
                I have designed multiple landing pages and
                have created design systems as well
                </p>
            </div>
        </div>


    </>
  )
}

export default About
