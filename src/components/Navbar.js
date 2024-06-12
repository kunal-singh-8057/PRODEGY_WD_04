import React from 'react'
import './Navbar.css'
import im1 from './Assets/main.png'
const Navbar = () => {
  return (
   <>
    <nav>
      <div className='logo'><a>Portfolio</a></div>
      <ul>
        <li>
          <a href='#about'>About</a>
          <a href='#experience'>Experience</a>
          <a href='#contact'>Projects</a>
          <a href='#project'>Contact</a>
        </li>
      </ul>
    </nav>
    <div className='extra'>
    <h1 className='welcome'>Hi, I'm kunal</h1>
    <img src={im1} className='img1'></img>
    </div>
    <div className='box'>
    <p className='content1'>
      I’m a full-stack developer 
      with 5 years
   of   experience using React and NodeJS.
      Reach out if you’d like to learn more!
    </p>
    </div>
    <button className='btn1'>Contact</button>
   </>
  )
}

export default Navbar
