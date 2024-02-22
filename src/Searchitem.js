import React, { useContext } from 'react'
import dataContext from './context/DataContext'

const Searchitem = () => {
  const {search,setSearch} = useContext(dataContext)
  return (
    <div className='search-wrapper '>
<form className='searchForm' onSubmit={(e)=>e.preventDefault()} >
 
        <label htmlFor="search" className='searchItem'>search</label>
    <input 
    className='search'
    id='search'
    type="text" 
    placeholder='Search'
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />

 
   
</form>

    </div>
  )
}

export default Searchitem