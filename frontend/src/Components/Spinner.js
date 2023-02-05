import React from 'react'
import loader from './loader.gif'

function Spinner() {
  return (
    <div className='text-center fs-1'>
        <img src={loader} alt="loading" />
    </div>
  )
}

export default Spinner