import { Pokemon } from './Pokemon'

export const PokemonList = ({
    filteredPokemon
}) => {


    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {filteredPokemon.map((pokemon, idx) => {
                return <Pokemon key={idx} pokemon={pokemon} filteredPokemon={filteredPokemon}/>
            })}
        </div>
    )
}