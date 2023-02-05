import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import Header from "./Components/Header";
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import MyDiary from './Pages/MyDiary';
import NutriSearch from './Pages/NutriSearch';
import Registration from './Components/Registration';
import Servicess from './Components/Servicess';
import TrackingActivity from './Pages/TrackingActivity';
import Userdashboard from './Pages/Userdashboard';


import { LoginContext } from './LoginContext'



function App() {
  const [userLoginName, setuserLoginName] = useState(localStorage.getItem('userLoginName'))
  const [userLoginStatus, setuserLoginStatus] = useState(localStorage.getItem('userLoginStatus'))

  return (
    <>
    <Router>
      <LoginContext.Provider value={{ userLoginName, setuserLoginName, userLoginStatus, setuserLoginStatus }}>
        <Header />
        
        <Routes>
          <Route element={<Homepage />} path="/"></Route>
          <Route element={<AboutUs/>} path='/aboutus'></Route>
          <Route element={<Servicess/>} path='/services'></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Registration />} path="/reg"></Route>
          
          <Route element={<Userdashboard/>} path='/userdashboard'></Route>
          <Route element={<NutriSearch/>} path='/nutrisearch'></Route>
          <Route element={<TrackingActivity/>} path='/trackingactivity'></Route>
          
          <Route element={<MyDiary/>} path='/mydiary'></Route>
          </Routes>
       
          
  
      </LoginContext.Provider>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;