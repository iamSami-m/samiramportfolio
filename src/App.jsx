import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Layout/Header'
import About from './Pages/About'
import Education from './Pages/Education'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'
import Home from './Pages/Home'


function App() {
  const [darkMode,setDarkMode]=useState(false)

  return (
   <div className='min-h-screen'>
      <BrowserRouter>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Routes>
          <Route path='/' element={<Home darkMode={darkMode} />}/>
          <Route path='/about' element={<About darkMode={darkMode}/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/education' element={<Education darkMode={darkMode}/>}/>
          <Route path='/experience' element={<Experience darkMode={darkMode}/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/resume' element={<Resume/>}/>

        </Routes>
      </BrowserRouter>
    
   </div>
      
  )
}

export default App
