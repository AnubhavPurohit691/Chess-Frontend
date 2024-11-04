import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Game from "./pages/Game"


function App() {
 

  return (
    <div className="bg-slate-950 h-screen">
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<Game/>} />
        
      </Routes>
    </div>
  )
}

export default App
