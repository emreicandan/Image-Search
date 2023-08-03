import React from 'react'
import { useState } from 'react';

function SearchHeader({search}) {
const [valueInput , setValue] = useState('')
const handleSubmitForm = (event) =>{
    event.preventDefault();
    search(valueInput);
}
const handleChange=(event)=>{
    setValue(event.target.value)
}

  return (
    <div className='searchDiv' >
    <form onSubmit={handleSubmitForm} className='form' >
        <label> Ne aramak istersiniz? </label>
        <input value={valueInput} onChange={handleChange} />
    </form>
    </div>
  )
}

export default SearchHeader
