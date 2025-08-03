import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from "../components/Pages/Home.jsx"
import Authenticate from "../components/Pages/Authenticate.jsx"
import VideoPage from '../components/Pages/VideoPage.jsx'
import Error from '../components/Pages/Error.jsx'
import Channel from '../components/Pages/Channel.jsx'
import Search from '../components/Pages/Search.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path ='/' element = {<App/>}>
        <Route index element = {<Home/>}/>
        <Route path="/VideoPage/:videoId" element = {<VideoPage/>}/>
        <Route path="/Channel" element = {<Channel/>}/>
        <Route path="/Search/:searchId" element = {<Search/>}/>
        </Route>
          <Route path='/Auth' element = {<Authenticate/>}/>
        <Route path = "*" element = {<Error/>}/>
      </Routes>
    </HashRouter>
    
  </StrictMode>,
)
