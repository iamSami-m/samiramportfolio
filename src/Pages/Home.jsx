import React from 'react'
import './Home.css'
import { Instagram,Linkedin,Github } from 'lucide-react'

const Home = ({darkMode}) => {
  return (
    <div className={`flex flex-col justify-center items-center min-h-screen ${darkMode? " bg-black text-white " : " bg-white text-black "}`}>
        <h1 className='text-7xl pb-4'>I Am Sami M</h1>
        <p className='text-l leading-9'>Frontend Developer</p>
        <p className='text-l leading-9'>UI/UX & Web Design</p>
        <p className='text-l leading-9'>Design → Code → Experience</p>
        <div className='flex gap-4 mt-2'> 
            <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                <a href="https://www.instagram.com/username/" target="_blank">
                    <Instagram/>
                </a>
            </div>
            <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                <a  href="https://www.linkedin.com/in/username/" target="_blank">
                    <Linkedin/>
                </a>
            </div>
            <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                <a href="https://github.com/username" target="_blank">
                    <Github/>
                </a>
            </div>
            
            
        </div>

            
            

      
        
       
        
    </div>
  )
}

export default Home