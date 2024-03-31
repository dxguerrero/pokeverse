import { Pokemon } from './Pokemon'

export const PokemonList = ({
    filteredPokemon
}) => {


    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 10em))', placeItems: 'start', paddingLeft: '50px', marginRight: '0px'}}>
            {filteredPokemon.map((pokemon, idx) => {
                return <Pokemon key={idx} pokemon={pokemon} filteredPokemon={filteredPokemon}/>
            })}
        </div>
    )
}