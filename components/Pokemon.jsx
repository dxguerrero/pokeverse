import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

export const Pokemon = ({pokemon}) => {
    const [pokemonData, setPokemonData] = useState({})

    useEffect(() => {
        fetch(pokemon.url)
            .then((res) => res.json())
            .then((data) => setPokemonData(data))
    }, [])

    return (
        <Card style={{
            height: '250px',
            width: '200px',
            margin: '10px'
            }}>
           <Card.Title>{pokemonData.name}</Card.Title> 
        </Card>
    )
}