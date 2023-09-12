import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Nf from "./Pages/Nf"
import RefHome from "./Pages/RefHome"
function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:referal" element={<RefHome />} />
    <Route path="*" element={<Nf />} />
  </Routes>
}
export default App
