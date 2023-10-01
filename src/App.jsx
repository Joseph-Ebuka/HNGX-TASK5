import React from 'react'
import { Extension } from './views'
import VideoPage from './components/VideoPage'
import {  Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    
    <div>
      <Routes>
        <Route path='/video/:videoUrl' element={<VideoPage/>}/>
      </Routes>
      <Extension/>
      {/* <VideoPage/> */}
    </div>
  )
}

export default App