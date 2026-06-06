import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Short from './Components/Short'
import Qrcode from './Components/Qrcode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/short" element={<Short/>}/>
        <Route path="/qr" element={<Qrcode/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
