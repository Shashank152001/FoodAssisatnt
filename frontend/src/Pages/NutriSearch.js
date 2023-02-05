import React from 'react'
import Footer from '../Components/Footer'

import {LoginContext} from '../LoginContext'
import {useState,useEffect,useContext} from 'react'
import Spinner from '../Components/Spinner'
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Components/Sidebar'
function NutriSearch() {
  const{userLoginName}=useContext(LoginContext)
  const[foodname,setFoodName]=useState('')
  const[food,setFood]=useState('')
  const[message,setMessage]=useState('')
  const[showdata,setShowdata]=useState(false)
  const[nodata,setNodata]=useState(false)
  const[load,setLoad]=useState(false)

  function handleform(e){
    setLoad(true)
    
    e.preventDefault();
    let foodName=foodname.toLowerCase();
    console.log(foodName)
    const formData=foodName
    // console.log(formData);
    fetch('/api/foodsearch',{
      method:'POST',
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({formData})
    }).then((res)=>{return res.json()}).then((data)=>{
      // console.log(data);
      // setFood(data)
      // setMessage(data.message)
      // console.log(data.message);
      
      if(data._id){
        setLoad(false)
        console.log(data)
        setNodata(false)
        setShowdata(true)
        setMessage('')
        
        setFood(data)
      }else{
        setLoad(false)
        setMessage("Data not found")
        setNodata(true)
        setShowdata(false)
      }
      
    })
  }
  function saveDate(){
    // alert('You Serach has been Saved')
    let result=window.confirm('Have you intake this food')
    if(result===true){
    toast.success('Search Save', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    fetch(`/api/diaryData/${userLoginName}`,{
      method:'POST',
      headers:{ "Content-Type": "application/json" },
      body:JSON.stringify(food)
    })
  }
  }
  useEffect(()=>{
    // fetch('/api/foodsearch')
    // .then((res)=>{return res.json()})
    // .then((data)=>{console.log(data)
    //     setFood(data)
    //     console.log(food)
    // })
},[])
  
  return (
    <>
     
     
     <div className='parent-div'>
        <div className='sidebar-div'>
          <Sidebar />
        </div>
        <div className='content-div'>
          <div className='title'>
            <h2 className='text-center mt-3 ms-3 p-3'>Search To know the nurtients</h2>
          </div>
          <div className="contents-div container-fluid">
            <div className='row'>
              <div className='col-md-6'>
                <img src="/images/food1.jpg" alt="" className='img-fluid mx-auto d-block' />
              </div>
              <div className='col-md-6'>
                <p className='fs-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor, sed earum perferendis itaque vero ab rem molestiae! Architecto, id ducimus. Consectetur laborum quisquam consequuntur quia possimus sapiente ratione nulla?</p>
              </div>
            </div>
            {/* <div className="col-md-6">
              <img src="/images/food1.jpg" alt="" className='img-fluid mx-auto d-block' />
            </div> */}
            {/* <div className='img-div'>
            
          </div> */}
            {/* <div className='col-md-6'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor, sed earum perferendis itaque vero ab rem molestiae! Architecto, id ducimus. Consectetur laborum quisquam consequuntur quia possimus sapiente ratione nulla?</p>
            </div> */}
          </div>
          <div className="content-search container-fluid">
            <div className='row'>
              <div className="col-md-6">
                {message}
                <form className='d-flex flex-column' method="post" onSubmit={(e) => { handleform(e) }}>
                  <div className='row'>
                    <div className='col-md-12'>
                      <label htmlFor="" className='form-label text-dark mt-3 fs-5'>Search Nutrients By FoodName</label>
                      <input type="text" name="" id="" placeholder='Food Name'
                        value={foodname}
                        onChange={(e) => { setFoodName(e.target.value) }}
                        className='form-control' />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <button style={{ 'width': '30%' }} className='btn btn-success mt-2 mb-2' type='submit'>Search</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <form className='d-flex flex-column' method="post">
                  <div className="row">
                    <div className="col-md-12">
                    <label htmlFor="" className='text-dark form-label mt-3 fs-5'>Search Nutrition Using Image</label>
                     <input type="file" name="" id="" className='form-control'/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    <button style={{ 'width': '30%' }} type="submit" className='btn btn-success mt-2'>Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
          
        <div className="show-content">
        <>
              {load&&<Spinner/>}
              {showdata&&<table className='table table-hover mt-2'>
                <thead>
                <tr>
                  <th>Nutritent</th>
                  <th>Value</th>
                </tr>
                </thead>
               <tbody>
               <tr>
                  <th>Foodname</th>
                  <td>{food.foodname}</td>
                </tr>
                <tr>
                  <th>Protein</th>
                  <td>{food.protein} g</td>
                </tr>
                <tr>
                  <th>Fat</th>
                  <td>{food.fat} g</td>
                </tr>
                <tr>
                  <th>Carbodydrate</th>
                  <td>{food.carbohydrate} g</td>
                </tr>
                <tr>
                  <th>VitaminA</th>
                  <td>{food.vitaminA} ug</td>
                </tr>
                <tr>
                  <th>VitaminB-12</th>
                  <td>{food.vitaminB12} ug</td>
                </tr>
                <tr>
                  <th>VitaminC</th>
                  <td>{food.vitaminC} ug</td>
                </tr>
                <tr>
                  <th>Calcium</th>
                  <td>{food.calcium} mg</td>
                </tr>
                <tr>
                  <th>Iron</th>
                  <td>{food.iron} mg</td>
                </tr>
                <tr>
                  <th>Fiber</th>
                  <td>{food.fiber} g</td>
                </tr>
                <tr>
                  <th>Energy</th>
                  <td>{food.energy} kJ</td>
                </tr>
                <tr>
                  <th>Action</th>
                  <td><button className='btn btn-success' onClick={saveDate}>Save</button></td>
                </tr>
               </tbody>
                
              </table>}
              {nodata&&<table className='table table-hover'>
                <thead>
                <tr>
                  <th>No Record </th>
                </tr>
                </thead>
                
              </table>}
              
              </>
        </div>
        </div>
        
        
      </div>
      <Footer/>
    </>
  )
}

export default NutriSearch
          // <section id="nutrisearch">
          //  <div className="containers">
          //    <div className="row">
          //    <Sidebar/>
          //      <div className="col-md-10">
          //        <h2 className='text-center text-dark mt-2'>Search To know the nurtients</h2>
                 
          //          <div className="row">
                   
          //            <div className="col-md-4">
          //            <img src="/images/food1.jpg" className='img-fluid mx-auto d-block w-90 h-100' alt="" />
          //            </div>
                     
          //            <div className="col-md-5">
          //              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor, sed earum perferendis itaque vero ab rem molestiae! Architecto, id ducimus. Consectetur laborum quisquam consequuntur quia possimus sapiente ratione nulla?</p>
          //            </div>
          //          </div>
          //          <br />
          //            <br />
          //          <div className="row">
          //            <div className="col-md-4">
          //              {message}
          //              <form method="post" onSubmit={(e)=>{handleform(e)}}>
          //              <label htmlFor="" className='form-label text-secondary'>Search Nutrients By Name</label>
          //              <input type="text" name="" id="" placeholder='Food Name' 
          //              value={foodname}
          //              onChange={(e)=>{setFoodName(e.target.value)}}
          //              className='form-control'/>
          //              <button className='btn btn-success mt-2 mb-2' type='submit'>Search</button>
          //              </form>
                       
          //            </div>
          //            <div className="col-md-4">
          //              <form method="post">
          //              <label htmlFor="" className='text-secondary form-label'>Search Nutrition Using Image</label>
          //              <input type="file" name="" id="" className='form-control'/>
          //              <button type="submit" className='btn btn-success mt-2 mb-2'>Search</button>
          //              </form>
                       
          //            </div>
          //          </div>
          //          <>
          //          {load&&<Spinner/>}
          //          {showdata&&<table className='table table-hover mt-2'>
          //            <thead>
          //            <tr>
          //              <th>Nutritent</th>
          //              <th>Value</th>
          //            </tr>
          //            </thead>
          //           <tbody>
          //           <tr>
          //              <th>Foodname</th>
          //              <td>{food.foodname}</td>
          //            </tr>
          //            <tr>
          //              <th>Protein</th>
          //              <td>{food.protein} g</td>
          //            </tr>
          //            <tr>
          //              <th>Fat</th>
          //              <td>{food.fat} g</td>
          //            </tr>
          //            <tr>
          //              <th>Carbodydrate</th>
          //              <td>{food.carbohydrate} g</td>
          //            </tr>
          //            <tr>
          //              <th>VitaminA</th>
          //              <td>{food.vitaminA} ug</td>
          //            </tr>
          //            <tr>
          //              <th>VitaminB-12</th>
          //              <td>{food.vitaminB12} ug</td>
          //            </tr>
          //            <tr>
          //              <th>VitaminC</th>
          //              <td>{food.vitaminC} ug</td>
          //            </tr>
          //            <tr>
          //              <th>Calcium</th>
          //              <td>{food.calcium} mg</td>
          //            </tr>
          //            <tr>
          //              <th>Iron</th>
          //              <td>{food.iron} mg</td>
          //            </tr>
          //            <tr>
          //              <th>Fiber</th>
          //              <td>{food.fiber} g</td>
          //            </tr>
          //            <tr>
          //              <th>Energy</th>
          //              <td>{food.energy} kJ</td>
          //            </tr>
          //            <tr>
          //              <th>Action</th>
          //              <td><button className='btn btn-success' onClick={saveDate}>Save</button></td>
          //            </tr>
          //           </tbody>
                     
          //          </table>}
          //          {nodata&&<table className='table table-hover'>
          //            <thead>
          //            <tr>
          //              <th>No Record </th>
          //            </tr>
          //            </thead>
                     
          //          </table>}
                   
          //          </>
          //      </div>
     
          //    </div>
          //  </div>
          // </section>