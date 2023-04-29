import React from 'react'
import { Form } from 'react-bootstrap'

const FilterMovie = ({setInputSearch,InputSearch}) => {
  return (
    <div style={{marginBottom:"3%"}}>
    
    <Form.Control type="text" placeholder="Movie title" 
    onChange={(e)=> setInputSearch(e.target.value)} value={InputSearch}/>
    
    
    </div>
  )
}

export default FilterMovie
