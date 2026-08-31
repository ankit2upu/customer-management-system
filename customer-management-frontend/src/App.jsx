import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Customers from "./pages/Customer"
import './App.css'

function App() {
 

  return (
<BrowserRouter>
   <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/dashboard" element={<Dashboard/>} /> 
    <Route path="/customers" element={<Customers/>}   />
    <Route path="/" element={<Navigate to="/login"/>} />

   </Routes>
</BrowserRouter>
  )
}

export default App
