import React from 'react'
import AdminLeft from './AdminLeft'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
 function AdminAddProduct() {
    const[foodname,setFoodName]=useState('');
    const[protein,setProtein]=useState('');
    const[carbogydrate,setCarbohydrate]=useState('');
    const[fat,setFat]=useState('');
    const[calcium,setCalcim]=useState('');
    const[iron,setIron]=useState('');
    const[fiber,setFiber]=useState('');
    const[energy,setEnergy]=useState('');
    const[vitaminA,setVitaminA]=useState('');
    const[vitaminB12,setVitaminB12]=useState('');
    const[vitaminC,setVitaminC]=useState('');
    const navigate=useNavigate();
    function handleForm(e){
        e.preventDefault(e);
        const formData={foodname,protein,carbogydrate,fat,energy,calcium,iron,fiber,vitaminA,vitaminB12,vitaminC};
        fetch('/api/food',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(formData)
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            if(data._id){
                navigate('/productmanage')
            }
        })
    }
  return (
    <>
     <section id="adminproduct">
      <div className="container-fluid">
        <div className="row">
          
            <AdminLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>Add Product</h2>
          {/* <Link><button className='btn btn-success form form-control'>Add Product</button></Link> */}
          <form method="post" onSubmit={(e)=>{handleForm(e)}}>
                <label className='form-label'>Food Name</label>
                <input type="text" name="" id="" className='form-control'
                value={foodname}
                onChange={(e)=>{setFoodName(e.target.value)}}/>
                <label className='form-label'>Protein</label>
                <input type="text" name="" id="" className='form-control'
                value={protein}
                onChange={(e)=>{setProtein(e.target.value)}}/>
                <label className='form-label'>Carbohydrate</label>
                <input type="text" name="" id="" className='form-control'
                value={carbogydrate}
                onChange={(e)=>{setCarbohydrate(e.target.value  )}}/>
                <label className='form-label'>Fat</label>
                <input type="text" name="" id="" className='form-control'
                value={fat}
                onChange={(e)=>{setFat(e.target.value  )}}/>
                <label className='form-label'>Calcium</label>
                <input type="text" name="" id="" className='form-control'
                value={calcium}
                onChange={(e)=>{setCalcim(e.target.value  )}}/>
                <label className='form-label'>Iron</label>
                <input type="text" name="" id="" className='form-control'
                value={iron}
                onChange={(e)=>{setIron(e.target.value  )}}/>
                <label className='form-label'>Fiber</label>
                <input type="text" name="" id="" className='form-control'
                value={fiber}
                onChange={(e)=>{setFiber(e.target.value  )}}/>
                <label className='form-label'>VitaminA</label>
                <input type="text" name="" id="" className='form-control'
                value={vitaminA}
                onChange={(e)=>{setVitaminA(e.target.value  )}}/>
                <label className='form-label'>VitaminB12</label>
                <input type="text" name="" id="" className='form-control'
                value={vitaminB12}
                onChange={(e)=>{setVitaminB12(e.target.value  )}}/>
                <label className='form-label'>VitaminC</label>
                <input type="text" name="" id="" className='form-control'
                value={vitaminC}
                onChange={(e)=>{setVitaminC(e.target.value  )}}/>
                <label className='form-label'>Energy</label>
                <input type="text" name="" id="" className='form-control'
                value={energy}
                onChange={(e)=>{setEnergy(e.target.value  )}}/>
                
                <button type="submit" className='btn btn-primary form-control mt-2'>Submit</button>
          </form>
          </div>
        </div>
      </div>
     </section>
   
    </>
  )
}

export default AdminAddProduct