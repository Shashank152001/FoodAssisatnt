import React from 'react'

import AdminLeft from './AdminLeft'
import {useEffect,useState} from 'react'
import Usertable from '../pages/Usertable'
function Userpage() {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        fetch('/api/').then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            setUsers(data)
    })
    },[])
  return (
    <>
     <section id="adminproduct">
      <div className="container-fluid">
        <div className="row">
          
            <AdminLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>User Management</h2>
          
          <table className='table table-hover'>
            <thead>
            <tr>
            <th>Sr No.</th>
                <th>UserName</th>
                <th>Email</th>
                
            </tr>
            </thead>
            
            {users.map((result,index)=>(
                <Usertable key={result._id} user={result} i={index}/>
            ))}
            
          </table>
          </div>
        </div>
      </div>
     </section>
   
    </>
  )
}

export default Userpage