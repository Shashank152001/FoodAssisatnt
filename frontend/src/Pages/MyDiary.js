import React from 'react'
import {LoginContext} from '../LoginContext'
import {useEffect,useContext,useState} from 'react'

import Footer from '../Components/Footer'
import Spinner from '../Components/Spinner'
import Sidebar from '../Components/Sidebar'
function MyDiary() {
const{userLoginName}=new useContext(LoginContext)
const[userdata,setUserData]=useState([])
const[showing,setShowing]=useState(true)
useEffect(()=>{
    fetch(`/api/mydiary/${userLoginName}`).then((res)=>{return res.json()}).then((data)=>{
        setShowing(false)
        console.log(data);
        setUserData(data)
    })
},[])
  return (
    <>
     <section id="myDiary">
      <div className="containers">
        <div className="row">
          
            <Sidebar/>
          
          <div className="diary-div">
          
                <h2 className='text-start fs-2 mt-3 ps-2 text-dark'>Welcome {userLoginName}</h2>
            
          
              {showing&&<Spinner/>}
              <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>FoodName</th>
                        <th>SearchDate</th>
                    </tr>
                </thead>
                
                    {userdata.map((result,index)=>(
                        <tbody key={result._id}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{result.foodname}</td>
                                <td>{result.searchDate}</td>
                            </tr>
                        </tbody>
                        
                      
                        
                    ))}
                    
                
              </table>

            </div>
          </div>
          </div>
        
     </section>
     <Footer/>
    </>
  )
}

export default MyDiary