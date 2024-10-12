import {BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar/NavBar.jsx"
import Home from "./Components/Home.jsx"
import Login from "./Components/Login.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
