import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu,X,SunMoon, Sun, Moon} from 'lucide-react'

const Header = ({darkMode,setDarkMode}) => {
    const [showMenu,setShowMenu]=useState(false)
    ;
  return (
  <div>
    <div className={`${darkMode ? " bg-black text-white" : "bg-white text-black"} `}>
            <div className='flex justify-between p-4 pb-5 px-20 bg-pink-500'>
                <nav>
                    <a className='font-bold'>SM<span className={`${darkMode ? "text-black" : " text-white"}`}> .</span></a>
                </nav>
                <div className='  hidden lg:flex gap-8 text-xl '>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/Skills">Skills</Link>
                    <Link to="/Education">Education</Link>
                    <Link to="/Experience">Experience</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Resume">Resume</Link>
                    <button className='visible' onClick={()=>{setDarkMode(!darkMode)}} >
                        {
                            darkMode ? <Sun/> : <Moon/>
                        }
                        
                    </button>
                </div>
                <div className='lg:hidden flex'>
                    
                    <button className="lg:hidden" onClick={()=>{setShowMenu(prev=>!prev)}}>{showMenu? <X/> : <Menu className="lg:hidden" />}</button>
                </div>
                
            </div>
            {showMenu && <div className={`flex flex-col ${darkMode?"text-white":"text-black"} pl-6 pt-4 border-b-pink-600 border-2 border-t-0`}>
                    <a className='pb-4'>About</a>
                    <a className='pb-4'>Projects</a>
                    <a className='pb-4'>Contact</a>
            </div>}
        
        
    </div>
  </div>
        
    
    
  )
}

export default Header