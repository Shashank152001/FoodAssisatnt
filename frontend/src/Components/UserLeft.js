import React from 'react'
import {Link} from 'react-router-dom'
function UserLeft() {
  return (
    <>
    
    <div className='col-md-3 mt-3'>
        
        <Link to="/profile"><button className='btn btn-primary mt-2 form-control'>Profile Page</button></Link><br />
        <Link to="/nutrisearch"><button className='btn btn-primary mt-2 form-control'>Search Page</button></Link><br />
        <Link to="/trackingactivity"><button className='btn btn-primary mt-2 form-control'>Tracking Page</button></Link><br />
        <Link to="/mydiary"><button className='btn btn-primary mt-2 form-control mb-2'>Diary</button></Link>
    </div>
    </>
  )
}

export default UserLeft