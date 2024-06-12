import React from 'react'
import './Contact.css'
import img121 from './Assets/image 12.png'
import img122 from './Assets/image 13.png'
import img125 from './Assets/image 14.png'
const Contact = () => {
  return (
    <>
        <div className='console' id='contact'>
        <div className='source'>
        <h1 className='mainhead'>Contact</h1>
        <h3 className='minhead'>Feel Free to reach me out</h3>
        </div>

        <div className='due'>
        <img src={img121} className='img24'></img>
         <h4 className='a1'>myemail@email.com</h4>
        </div>
        <div>
        <img src={img122} className='img25'></img>
       <h4 className='a2'>linkedin.com/myname</h4>
       </div>

        <div>
        <img src={img125} className='img26'></img>
        <h4 className='a3'>github.com/myname</h4>
        </div>
        
        </div>
    </>
  )
}

export default Contact
