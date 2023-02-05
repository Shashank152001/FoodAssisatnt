import React from 'react'
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AdminLoginContext} from './AdminLoginContext'
import AdminAddProduct from './Component/AdminAddProduct';
import Admindashboard from './Component/Admindashboard';
import AdminHeader from './Component/AdminHeader';
import AdminLogin from './Component/Adminlogin';
import AdminProducts from './Component/AdminProducts';
import AdminProductUpdate from './Component/AdminProductUpdate';
import Userpage from './Component/Userpage';
function App() {
  const [adminLoginName, setadminLoginName] = useState(localStorage.getItem('adminLoginName'))
  const [adminLoginStatus, setadminLoginStatus] = useState(localStorage.getItem('adminLoginStatus'))
  return (
    <Router>
      <AdminLoginContext.Provider value={{adminLoginName, setadminLoginName,adminLoginStatus,setadminLoginStatus}}>
        <AdminHeader/>
      <Routes>
    
    <Route element={<AdminLogin/>} path="/"></Route>
    <Route element={<Admindashboard/>} path="/admindashboard"></Route>
    <Route element={<AdminProducts/>} path="/productmanage"></Route>
    <Route element={<AdminAddProduct/>} path="/adminaddproduct"></Route>
    <Route element={<AdminProductUpdate/>} path="/productupdate/:id"></Route>
    <Route element={<Userpage/>} path='/userpage'></Route>
    
    
     </Routes>
    </AdminLoginContext.Provider>
    </Router>
    
  )
}

export default App