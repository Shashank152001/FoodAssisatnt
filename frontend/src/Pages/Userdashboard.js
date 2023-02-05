import React from 'react'
import Footer from '../Components/Footer'
import {LoginContext} from '../LoginContext'

import {useContext} from 'react'
import Sidebar from '../Components/Sidebar'


// import Homepage from './Homepage'

function Userdashboard() {
  const { userLoginName} = useContext(LoginContext)
  
  return (
    <>
     <section id="userdashborad">
      <div className="containers">
      
          
            <Sidebar/>
          
          
          
          <h2 className='text-start fs-2 mt-3 text-dark'>Welcome {userLoginName}</h2>
          
          
        
      </div>
     </section>
     <Footer/>
    </>
  )
}

export default Userdashboard