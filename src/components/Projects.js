import React from 'react'
import './Project.css'
import img64 from './Assets/cool.png'

function Projects() {
  return (
    <div className='project' id='project'>

      <h1 className='view'>Projects</h1>

      <div className='black'>
      <img src={img64} className='i'></img>
      <h1 className='h'>Project1</h1>
      <p className='paar'>
      This is a project made to
       learn the latest languages
       by building an app.
      </p>
      <button className='btn'>Demo</button>
      <button className='btn'>Code</button>
      </div>

     
      <div className='black'>
      <img src={img64} className='i'></img>
      <h1 className='h'>Project1</h1>
      <p className='paar'>
      This is a project made to
       learn the latest languages
       by building an app.
      </p>
      <button className='btn'>Demo</button>
      <button className='btn'>Code</button>
      </div>


     
      <div className='black'>
      <img src={img64} className='i'></img>
      <h1 className='h'>Project1</h1>
      <p className='paar'>
      This is a project made to
       learn the latest languages
       by building an app.
      </p>
      <button className='btn'>Demo</button>
      <button className='btn'>Code</button>
      </div>

    </div>
  )
}

export default Projects

