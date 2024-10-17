import React from 'react'
import StarshipCard from './StarshipCard'

const StarshipList = (props) => {
  return (
    
        props.starships.map( ship => (
          <ul>
            <li><StarshipCard ship={ship} /></li>
          </ul>
        ))
    
  )
}

export default StarshipList