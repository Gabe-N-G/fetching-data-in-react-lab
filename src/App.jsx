import { useState, useEffect } from 'react'
import './App.css'
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import { index } from './services/starshipService';

// As a user, I should see a list of starship cards when the site loads. The list should also indicate the number of results that are being displayed currently.

// As a user, I should see the name, starship class, starship manufacturer, and starship model rendered in each starship card.

// As a user, I should see a search bar above the list of starships. I should be able to enter in the name of a starship into the search bar, and submit my query.

// As a user, when I submit a search, the starship results being displayed should update based on my query.


const App = () => {

  const [starships, addStarships] = useState([])

  useEffect(() =>{
    const fetchDefaultData = async () =>{
      const data = await index()
      console.log(data)
    };
    fetchDefaultData()
  },[])

  return (
    <>
      <StarshipSearch/>
      <StarshipList/>
    </>
  );
}

export default App