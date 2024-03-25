import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

export const Pokemon = ({ allPokemon, pokemon }) => {
    const [pokemonData, setPokemonData] = useState({})

    async function fetchPokemonData() {
        try {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            setPokemonData(data);
        } catch (error) {
            console.log("There was an error fetching Pokemon data")
        }
    }

    useEffect(() => {
        fetchPokemonData()
    }, [allPokemon])

    return (
        (!pokemonData.types ? "Loading" :
            (<Card
                className={pokemonData.types[0].type.name}
                style={{
                    height: '425px',
                    width: '303px',
                    margin: '10px',
                    padding: '15px',
                    borderRadius: '20px'
                }}>
                <div style={{ display: 'flex', alignItems: 'start' }}>
                    <Card.Title style={{ fontSize: '16px', textTransform: 'capitalize' }}>{pokemonData.name}</Card.Title>
                </div>
                {pokemonData.sprites && (
                    <Card style={{ height: '100px', width: '90%', margin: 'auto', display: 'flex', alignItems: 'center', paddingBottom: '130px', border: 'solid 2.5px yellow', boxShadow: '5px 5px 8px #888888', backgroundImage: 'red' }}>
                        <Card.Img alt={pokemonData.name} src={pokemonData.sprites.front_default}></Card.Img>
                    </Card>)}
                <Card.Body>
                    {pokemonData.moves && <p>{pokemonData.moves[0].move.name}</p>}
                </Card.Body>
            </Card>))
    )
}