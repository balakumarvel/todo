import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
import dataContext from './context/DataContext';

const AddItem = () => {

  const {newItem,setNewItem,handleSubmit} = useContext(dataContext)
    const inputRef=useRef()
  return (
    <div className='form-wrapper py-3'>
        
        <form style={{ width: '100%', maxWidth: '400px' }} onSubmit={handleSubmit}>
        <label htmlFor="AddItem" className='AddItem'>AddItem</label>
        <input 
        className='Add'
          id='AddItem'
          type="text" 
          placeholder='AddItem'
          ref={inputRef}
          autoFocus
          required
          style={{ width: '100%', boxSizing: 'border-box' }} 
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}
        />
         <button type="submit" className=" Add-button btn btn-outline-success btn-md" onClick={()=>inputRef.current.focus()}>
          <FaPlus />
        </button>
       
      </form>
       
       
    </div>
  );
};

export default AddItem;
