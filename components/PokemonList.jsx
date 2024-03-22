import { Pokemon } from './Pokemon'

export const PokemonList = ({
    allPokemon
}) => {


    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {allPokemon.map((pokemon, idx) => {
                return <Pokemon key={idx} pokemon={pokemon} allPokemon={{allPokemon}}/>
            })}
        </div>
    )
}