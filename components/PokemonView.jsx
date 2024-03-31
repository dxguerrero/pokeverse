import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { CurrentPokemonContext } from '../contexts/CurrentPokemonContext';
import { PartyContext } from '../contexts/PartyContext';


export const PokemonView = () => {

    const { currentPokemon } = useContext(CurrentPokemonContext);
    const { party, setParty} = useContext(PartyContext);

    const addToParty = () => {
        console.log(party)
         if (currentPokemon && party.length < 6) {
            setParty([...party, currentPokemon])
            console.log(party.length)
            for (let i=0; i < party.length; i++) {
                console.log(party[i].name)
            }
        }
    }   

    return (
        <Card style={{position: 'fixed', height: '500px', width: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(13, 105, 83)'}}>
            <Card.Title>Pokemon View</Card.Title>
            {currentPokemon && (<Card.Body style={{paddingBottom: '-16px'}}>{currentPokemon.name}</Card.Body>)}
            {currentPokemon.sprites && (<Card.Img src={currentPokemon.sprites.other.showdown.front_default}  style={{height: '250px', width: '250px'}}/>)}
            <Button onClick={addToParty}>Add to Party</Button>
        </Card>
    )

}