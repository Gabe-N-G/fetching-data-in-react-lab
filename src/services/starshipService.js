import { useEffect } from "react";

export {index, search}

const BASE_URL = `https://swapi.dev/api/starships`;

const index = async () =>{
            try {
                const res = await fetch(BASE_URL)
                const data = await res.json()
                const results = data.results
                console.log(results)
                return results
            } catch (err){
                console.log(err)
            }
        }

const search = async (ship) =>  {
    try {
        // console.log(ship)
        const queryString = `/?search=${ship}`
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json()
        const results = data.results
        console.log('Data', results)
        return results
    } catch (err){
        console.log(err)
    }
}

