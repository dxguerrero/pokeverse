import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { CurrentPokemonContext } from '../contexts/CurrentPokemonContext';
import { PartyContext } from '../contexts/PartyContext';


export const PokemonView = () => {

    const { currentPokemon } = useContext(CurrentPokemonContext);
    const { party, setParty} = useContext(PartyContext);

    const addToParty = () => {
         if (currentPokemon && party.length < 6) {
            setParty([...party, currentPokemon])
        }
    }   

    return (
        <Card style={{height: '100vh', width: '100vw', backgroundColor: 'rgb(0,0,0,0.2)'}}>
            <Card className='white-text'style={{marginTop:'50px', height: '700px', position: 'fixed', width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(0,0,0,0.5)'}}>
                <Card.Title>Pokemon View</Card.Title>
                {currentPokemon && (<Card.Body style={{paddingBottom: '-16px'}}>{currentPokemon.name}</Card.Body>)}
                {currentPokemon.sprites && (<Card.Img src={currentPokemon.sprites.other.showdown.front_default}  style={{height: '250px', width: '250px'}}/>)}
                <Button onClick={addToParty}>Add to Party</Button>
            </Card>
        </Card>
    )

}