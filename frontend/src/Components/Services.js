import React from 'react'

function Services() {
  return (
   <section id="services">
    <div className="container-fluid">
        <div className="row mt-3">
        <h2 className='text-secondary text-center'>Services</h2>
            <div className="col-md-6">
            <img src="/images/nutrition.jpg" className='img-fluid mx-auto d-block w-80 h-80' alt="" />
            </div>
            <div className="col-md-6">
                <p className='fs-5 fw-bold'>Nutrition plays a great role in our daily life. The food or liquids affect our body and health because each food or liquid contain particular nutrition which is very necessary for our physical and mental growth. A particular level of any particular nutrition is essential for our body. So we should know that what food we have to take, how much and what type of nutrition contain a particular food.</p>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-md-6">
            
                <h3>Search Food Nutritants using Food Name</h3>
                <form method="post">
                    <input type="text" name="" id="" placeholder='Enter Food Name' className='form-control' disabled/>
                    <button type="submit" className='btn btn-success mt-2'>Search</button>
                </form>
            </div>
            <div className="col-md-6">
            
                <h3>Serach Food Nutrients using Image</h3>
                <form method="post">
                    <input type="file" name="" id="" placeholder='Upload Image of Food' className='form-control' disabled/>
                    <button type="submit" className='btn btn-success mt-2'>Search</button>
                </form>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Services