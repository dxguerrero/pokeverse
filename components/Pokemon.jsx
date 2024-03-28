import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

export const Pokemon = ({ filteredPokemon, pokemon }) => {
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
    }, [filteredPokemon])

    return (
        (pokemonData.types &&
            (<Card
                className={pokemonData.types[0].type.name}
                style={{
                    height: '425px',
                    width: '303px',
                    margin: '10px',
                    padding: '15px',
                    borderRadius: '20px'
                }}>
                <div style={{ display: 'flex', alignItems: 'start', marginLeft: '15px', marginTop: '5px'}}>
                    <Card.Title style={{ fontSize: '16px', textTransform: 'capitalize' }}>{pokemonData.name}</Card.Title>
                </div>
                {pokemonData.sprites && (
                    <Card className={pokemonData.types[0].type.name + "-image"} style={{ height: '170px', width: '84%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', paddingBottom: '130px'}}>
                        <Card.Img alt={pokemonData.name} src={pokemonData.sprites.front_default} style={{height:'180px', width: '180px'}}></Card.Img>
                    </Card>)}
            </Card>))
    )
}