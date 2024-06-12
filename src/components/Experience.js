import React from 'react'
import img6 from './Assets/image 5.png'
import img7 from './Assets/image 6.png'
import img8 from './Assets/image 7.png'
import img9 from './Assets/image 8.png'
import img10 from './Assets/image 9.png'
import img11 from './Assets/image 10.png'
import img12 from './Assets/image 11.png'
import img13 from './Assets/image 15.png'
import img14 from './Assets/image 16.png'
import img15  from './Assets/image 17.png'
import './Experience.css'
const Experience = () => {
  return (
    <>

        <div className='conatiner' id='experience'>
       
            <h1 className='heading'>Experience</h1>
            <div className='icons1'>
            <img src={img6} className='img'></img>
            <img src={img7} className='img'></img>
            <img src={img8} className='img'></img>
            </div>
            <div className='icons2'>
            <img src={img9} className='img'></img>
            <img src={img10} className='img'></img>
            <img src={img11} className='img'></img>
            </div>
            <div className='icons3'>
            <img src={img12} className='img'></img>
            </div>
            <div className='minheading1'>
            <h3 className='html'>HTML</h3>
            <h3 className='css'>CSS</h3>
            <h3 className='react'>REACT</h3>
            </div>
            <div className='minheading2'>
            <h3 className='node'>Nodejs</h3>
            <h3 className='graph'>GraphQl</h3>
            <h3 className='db'>MongoDB</h3>
            </div>
            <div className='minheading3'>
            <h3 className='fig'>Figma</h3>
            </div>

            <div className='container2'>
            <div className='div1'>
                <img src={img13}></img>
                <h1>SDE Intern,Netflix</h1>
                <div className='con'>
                <p >
                .Worked on component library
                .Helped create UI components
                </p>
                </div>
            </div>
            <div className='div2'>
                <img src={img14}></img>
                <h1>UI Designer,Microsoft</h1>
                <div className='con'>
                <p >
                .Worked on Windows 11
                .Designed the control panel
                </p>
                </div>
            </div>
            <div className='div3'>
                <img src={img15}></img>
                <h1>Software Enginner,Google</h1>
                <div className='con'>
                <p >
                .Worked on Google Maps
                .Reduced load times by 50%
                </p>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Experience
