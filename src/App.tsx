import Chats from '../components/Chats'
import './App.css'
import LandingPage from '../components/LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingChats from '../components/LandingChats';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/chat" element={<LandingChats />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
