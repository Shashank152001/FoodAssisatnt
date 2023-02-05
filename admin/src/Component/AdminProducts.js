import React from 'react'
import {Link} from 'react-router-dom'
import AdminLeft from './AdminLeft'
import {useEffect,useState} from 'react'
import Producttable from '../pages/Producttable'
function AdminProducts() {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch('/api/food').then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            setProducts(data)
    })
    },[])
  return (
    <>
     <section id="adminproduct">
      <div className="container-fluid">
        <div className="row">
          
            <AdminLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>Food Management</h2>
          <Link to='/adminaddproduct'><button className='btn btn-success form form-control'>Add Food</button></Link>
          <table className='table table-hover'>
            <thead>
            <tr>
            <th>Sr No.</th>
                <th>Food Name</th>
                <th>Protein</th>
                <th>Carbohydrate</th>
                <th>Fat</th>
                <th>Energy</th>
                <th>Calcium</th>
                <th>Iron</th>
                <th>Fiber</th>
                <th>VitaminA</th>
                <th>VitaminB12</th>
                <th>VitaminC</th>
                <th>Action</th>
            </tr>
            </thead>
            
            {products.map((result,index)=>(
                <Producttable key={result._id} product={result} i={index}/>
            ))}
            
          </table>
          </div>
        </div>
      </div>
     </section>
   
    </>
  )
}

export default AdminProducts