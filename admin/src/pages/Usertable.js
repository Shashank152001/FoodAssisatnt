import React from 'react'

function Usertable(props) {
    const{user,i}=props
  return (
    <>
    <tbody>
    <tr>
      <td>{i+1}</td>
        <td>{user.username}</td>
        <td>{user.email} </td>
        
        
    </tr>
    </tbody>
    
    </>
  )
}

export default Usertable