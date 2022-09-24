import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import VideoPage from './pages/VideoPage'

const App = () => {
  return (
    < >
      <Router>
      
                    <Navbar/>

                    <Routes> 
                          
                           <Route  path='/' element={<Home/> } />
                            <Route path='video/:videID' element={<VideoPage/>} />
 
                                
                    </Routes>

                    

                          
                    <Footer/>

     </Router>

    </>
  )
}

export default App