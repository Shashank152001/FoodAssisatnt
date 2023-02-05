import React from 'react'
import {Link} from 'react-router-dom'
function AdminLeft() {
  return (
    <>
    <div className='col-md-3 mt-3'>
        
        <Link to="/admindashboard"><button className='btn btn-primary mt-2 form-control'>Profile Page</button></Link><br />
        <Link to="/productmanage"><button className='btn btn-primary mt-2 form-control'> Food Page</button></Link><br />
        <Link to="/userpage"><button className='btn btn-primary mt-2 mb-2 form-control'> User Page</button></Link><br />
        
        
    </div>
    </>
  )
}

export default AdminLeft