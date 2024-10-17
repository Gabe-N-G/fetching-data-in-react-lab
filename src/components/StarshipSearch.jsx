import React, { useState } from 'react'
// import { search } from '../services/starshipService'


const StarshipSearch = (props) => {

  const [formData, setFormData] = useState("")

  const handlesubmit = (e) =>{
    e.preventDefault()
    props.fetchData(formData.ship)//what do I pass here? formdata?
    setFormData('')
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handlesubmit}>
      <label htmlFor='ship'>Find a ship</label>
      <input
        type="string"
        id='ship'
        name='ship'
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default StarshipSearch