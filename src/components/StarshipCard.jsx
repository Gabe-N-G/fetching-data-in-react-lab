import React from 'react'

manufacturer: "Corellian Engineering Corporation"
model: "CR90 corvette"
name: "CR90 corvette"
starshipClass: "corvette"

const StarshipCard = ({ship}) => {
  return (
    <>
      <div>
      <h3>Name: {ship.name} </h3>
        <p>Model: {ship.model}</p>
        <p>Class: {ship.starshipClass}</p>
        <p>Manufacturer: {ship.manufacturer}</p>
      </div>
    </>
  )
}

export default StarshipCard