import React from 'react'
import {Link} from 'react-router-dom'
function Producttable(props) {
    const{product,i}=props
  return (
    <>
    <tbody>
    <tr>
      <td>{i+1}</td>
        <td>{product.foodname}</td>
        <td>{product.protein} g</td>
        <td>{product.carbohydrate} g</td>
        <td>{product.fat} g</td>
        <td>{product.energy} kJ</td>
        <td>{product.calcium} mg</td>
        <td>{product.iron} mg</td>
        <td>{product.fiber} g</td>
        <td>{product.vitaminA} ug</td>
        <td>{product.vitaminB12} ug</td>
        <td>{product.vitaminC} ug</td>
        <td><Link to={`/productupdate/${product._id}`}><button className='btn btn-warning'>Update</button></Link></td>
    </tr>
    </tbody>
    
    </>
  )
}

export default Producttable