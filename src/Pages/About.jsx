import React from 'react'
import ProfilePhoto from "../../src/assets/profile.png"

const About = ({darkMode}) => {
  return (
    <div className={`${darkMode? "bg-black text-white": "bg-white text-black" } min-h-screen`}>
      <div className='flex justify-center pt-6 text-5xl font-bold'>About</div>
      <div className=' grid grid-cols-2 m-10 gap-3 p-12'>
        <div >
            <p className='mb-16 text-lg font-semibold leading-8 text-justify'>
              This is where you can describe about yourself. The more you describe about yourself, the better it is!
            </p>
            <p className='text-lg font-semibold leading-8 text-justify'>
              Extra Information about you, like hobbies and your goals.
              Example Paragraph: I am passionate about my work. 
              Because I love what I do, 
              I have a steady source of motivation that drives me to do my best.
              In my last job, this passion led me to challenge myself daily and 
              learn new skills that helped me to do better work. For example, 
              I taught myself how to use Photoshop to improve the quality of our photos and graphics.
              I soon became the go-to person for any design needs.
            </p>
        </div>
        <div className='bg-blue-400 m-auto'>
          <img src={ProfilePhoto} alt=''/>
        </div>
    </div>
    </div>
    
  )
}

export default About