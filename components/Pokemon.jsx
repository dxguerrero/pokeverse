import { useEffect, useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { CurrentPokemonContext } from '../contexts/CurrentPokemonContext';

export const Pokemon = ({ filteredPokemon, pokemon }) => {
    const [pokemonData, setPokemonData] = useState({})
    const { setCurrentPokemon } = useContext(CurrentPokemonContext)

    async function fetchPokemonData() {
        try {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            setPokemonData(data);
        } catch (error) {
            console.log("There was an error fetching Pokemon data")
        }
    }

    const clickHandler = () => {
        setCurrentPokemon(pokemonData)
    }

    useEffect(() => {
        fetchPokemonData()
    }, [filteredPokemon])

    return (
        (pokemonData.types &&
            (<Card
                onClick={clickHandler}
                className='pokemon-container'
            >
                {pokemonData.sprites && (
                <div style={{ height: '100%' ,display: 'flex', alignItems: 'end', justifyContent: 'center'}}>
                    <Card.Img onClick={clickHandler} alt={pokemonData.name} src={pokemonData.sprites.front_default}></Card.Img>
                </div>)} 
            </Card>))
    )
}