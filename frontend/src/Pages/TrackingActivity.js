import React from 'react'
import Footer from '../Components/Footer'

import {useState} from 'react'
import Sidebar from '../Components/Sidebar'
function TrackingActivity() {
  const[initialDate,setInitialDate]=useState('')
  const[finalDate,setFinalDate]=useState('')
  function handleForm(e){
    e.preventDefault();
    const daterecord={initialDate,finalDate};
    console.log(daterecord)
    fetch('/api/trackdata',{
      method:'POST',
      headers:{ "Content-Type": "application/json" },
      body:JSON.stringify(daterecord)
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
    })
  }
  return (
    <>
    <div className='parent-div'>
        <div className='sidebar-div'>
          <Sidebar />
        </div>
        <div className='content-div'>
          <div className='title'>
            <h2 className='text-center mt-3 ms-3 p-3'>Nutrients Tracking</h2>
          </div>
          <div className='form-div'>
            <form method="post" className='d-flex' onSubmit={(e) => { handleForm(e) }}>

              <div className="col-md-6 me-5">
                <label htmlFor="" className='form-label fs-5 fw-bold'>Enter the Initial Date</label>
                <input type="date" name="" id="" className='form-control'
                  value={initialDate}
                  onChange={(e) => { setInitialDate(e.target.value) }}
                  placeholder='Initial Date' />
              </div>
              <div className="col-md-6">
                <label htmlFor="" className='form-label fs-5 fw-bold'>Enter the Final Date</label>
                <input type="date" name="" id="" placeholder='Final date' className='form-control'
                  value={finalDate}
                  onChange={(e) => { setFinalDate(e.target.value) }} />
              </div>
              <div className="col-md-6">
                <button type="submit" className='btn btn-outline-success ms-3 mt-4'>See Result</button>
              </div>
            </form>
          </div>
        </div>
      </div>
     <Footer/>
    </>
  )
}

export default TrackingActivity