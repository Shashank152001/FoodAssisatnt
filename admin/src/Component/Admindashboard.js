import React from 'react'
import {useContext} from 'react'
import {AdminLoginContext} from '../AdminLoginContext'
import AdminLeft from './AdminLeft'
function Admindashboard() {
    const{adminLoginName}=useContext(AdminLoginContext)
  return (
    <>
     <section id="admindashborad">
      <div className="container-fluid">
        <div className="row">
          
            <AdminLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>Welcome {adminLoginName}</h2>
          </div>
        </div>
      </div>
     </section>
   
    </>
  )
}

export default Admindashboard