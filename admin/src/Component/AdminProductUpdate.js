import React from 'react'
import AdminLeft from './AdminLeft'
import {useParams,useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'
function AdminProductUpdate() {
    const{id}=useParams()
    const navigate=useNavigate()
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
    
    useEffect(()=>{
        fetch(`/api/showsingleproduct/${id}`).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            setFoodName(data.foodname)
            setProtein(data.protein)
            setCarbohydrate(data.carbohydrate)
            setFat(data.fat)
            setCalcim(data.calcium)
            setIron(data.iron)
            setVitaminA(data.vitaminA)
            setVitaminB12(data.vitaminB12)
            setVitaminC(data.vitaminC)
            setFiber(data.fiber)
            setEnergy(data.energy)
        })
    },[])
    function handleForm(e){
      e.preventDefault();
      const formData={foodname,protein,carbogydrate,fat,calcium,iron,fiber,energy,vitaminA,vitaminB12,vitaminC}
      fetch(`/api/${id}`,{
        method:'PUT',
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify(formData)
      }).then((res)=>{return res.json()}).then((data)=>{
        if(data.message){
          navigate('/productmanage')
        }
      })
    }
  return (
    <>
    <section id="admindashborad">
      <div className="container-fluid">
        <div className="row">
          
            <AdminLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>Product Update</h2>
          <form method="post" onSubmit={(e)=>{handleForm(e)}}>
            <label htmlFor="" className='form-label'>Food Name</label>
            <input type="text" name="" id=""
            value={foodname}
            onChange={(e)=>{setFoodName(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>Protein</label>
            <input type="text" name="" id="" value={protein}
            onChange={(e)=>{setProtein(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>Carbohydrate</label>
            <input type="text" name="" id="" value={carbogydrate}
            onChange={(e)=>{setCarbohydrate(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>Fat</label>
            <input type="text" name="" id="" value={fat}
            onChange={(e)=>{setFat(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>Energy</label>
            <input type="text" name="" id="" value={energy}
            onChange={(e)=>{setEnergy(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>Calcium</label>
            <input type="text" name="" id="" value={calcium}
            onChange={(e)=>{setCalcim(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>Iron</label>
            <input type="text" name="" id="" value={iron}
            onChange={(e)=>{setIron(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>Fiber</label>
            <input type="text" name="" id="" value={fiber}
            onChange={(e)=>{setFiber(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>VitaminA</label>
            <input type="text" name="" id="" value={vitaminA}
            onChange={(e)=>{setVitaminA(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>VitaminB12</label>
            <input type="text" name="" id="" value={vitaminB12}
            onChange={(e)=>{setVitaminB12(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>VitaminC</label>
            <input type="text" name="" id="" value={vitaminC}
            onChange={(e)=>{setVitaminC(e.target.value)}}
            className='form-control'/>
            
            <button type="submit" className='btn btn-success mt-2 form-control'>Submit</button>
          </form>
          </div>
        </div>
      </div>
     </section>
   
    </>
  )
}

export default AdminProductUpdate