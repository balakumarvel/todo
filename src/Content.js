import React, { useContext } from 'react'
import { MdDangerous } from "react-icons/md";
import dataContext from './context/DataContext';

const Content = ({items,}) => {

  const {handleCheck,handleDelete}=useContext(dataContext)
 
  return (
    <div className='content py-5'>
      {(items.length)?(

      <ul className='my-list '>
       {items.map((item)=>(
        <li key={item.id} className='list-group-item d-flex align-items-center justify-content-between  p-2 pb-2 border-bottom '>
          <input
          
           type="checkbox" 
           checked={item.checked}
           onChange={()=>handleCheck(item.id)}
           />
           <label className='ms-2 mb-0' style={(item.checked)? {textDecoration:"line-through"}:null }>{item.item}</label>
           <button type="button" className=" myButton btn btn-outline-danger btn-sm" onClick={()=>handleDelete(item.id)}> <MdDangerous /></button>
        </li>
       ))}
      </ul>
      ):(<p className='para' >your list is empty</p> )}
    </div>
  )
}

export default Content