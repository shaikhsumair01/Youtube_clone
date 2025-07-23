import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from "../components/Home.jsx"
import VideoPage from '../components/VideoPage.jsx'
import Error from '../components/Error.jsx'
import Channel from '../components/Channel.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path ='/' element = {<App/>}>
        <Route index element = {<Home/>}/>
        <Route path="/VideoPage/:videoId" element = {<VideoPage/>}/>
        <Route path="/Channel" element = {<Channel/>}/>
        </Route>
        <Route path = "*" element = {<Error/>}/>
      </Routes>
    </HashRouter>
    
  </StrictMode>,
)
