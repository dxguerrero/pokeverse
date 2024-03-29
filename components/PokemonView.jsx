import { Card } from 'react-bootstrap';
import { CurrentPokemonContext } from '../contexts/CurrentPokemonContext';
import { useContext } from 'react';

export const PokemonView = () => {

    const { currentPokemon } = useContext(CurrentPokemonContext)

    return (
        <Card style={{position: 'fixed'}}>
            <Card.Title>Pokemon View</Card.Title>
            {currentPokemon && (<Card.Body>{currentPokemon.name}</Card.Body>)}
            {currentPokemon.sprites && (<Card.Img src={currentPokemon.sprites.other.showdown.front_default}/>)}
        </Card>
    )

}