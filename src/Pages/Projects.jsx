import React from 'react'
import { Link } from 'react-router-dom'
import apadanaProject from '../../src/assets/cables-1241670.jpg'

const Projects = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3 m-8 gap-2'>
        <div className='card border-2'>
          <a > 
            <img src={apadanaProject} alt=''></img>
          </a>
          <h1 className='text-lg font-bold flex justify-center py-2'>Project Name</h1>
          <ul className='p-4'>
            <li>option1</li>
            <li>option2</li>
            <li>option3</li>
          </ul>
          <div className=' flex justify-center items-center  flex-col p-4 lg:flex-row'>
            <Link to="https://github.com/iamSami-m/apadananet" target='_blank' className='pr-4'><button className='border-2 cursor-pointer border-pink-500 py-2 m-2 px-4 rounded-2xl'>GitHub</button></Link>
            <Link to="https://apadananet.netlify.app/" target='_blank'><button className='border-2 cursor-pointer border-pink-500 py-2 px-4 rounded-2xl'>Live</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects