import { useContext, useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { CurrentPokemonContext } from '../contexts/CurrentPokemonContext';
import { PartyContext } from '../contexts/PartyContext';


export const PokemonView = () => {
    const { currentPokemon } = useContext(CurrentPokemonContext);
    const { party, setParty } = useContext(PartyContext);
    const [speciesData, setSpeciesData] = useState({});
    const [description, setDescription] = useState('');
  
    const addToParty = () => {
      if (currentPokemon && party.length < 6) {
        setParty([...party, currentPokemon]);
      }
    };
  
    const getDescription = (entries) => {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].language.name === 'en') {
          return entries[i].flavor_text;
        }
      }
      return '';
    };
  
    async function fetchSpeciesData() {
      if (!speciesData.name || speciesData.name !== currentPokemon.name) {
        try {
          const res = await fetch(currentPokemon.species.url);
          const data = await res.json();
          setSpeciesData(data);
        } catch (error) {
          console.error("There was an error fetching species data", error);
        }
      }
    };
  
    useEffect(() => {
      if (currentPokemon.name) {
        fetchSpeciesData();
        if (speciesData.flavor_text_entries) {
          setDescription(getDescription(speciesData.flavor_text_entries));
        } else {
          setDescription('');
        }
      }
    }, [currentPokemon]);
    

    return (
        <Card style={{height: '100%', width: '400px', backgroundColor: 'rgb(0,0,0,0.2)'}}>
            <Card className='white-text'style={{marginTop:'50px', height: '500px', position: 'fixed', width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(0,0,0,0.5)'}}>
                <Card.Title>Pokemon View</Card.Title>
                {currentPokemon && (
                    <Card.Body style={{paddingBottom: '', display: 'flex', alignItems: 'start', flexDirection: 'column', width: '90%'}}>
                        <p>Name: {currentPokemon.name}</p>
                        <p>Height: {currentPokemon.height ? `${currentPokemon.height / 10}m`  : ''} </p>
                        <p>Weight: {currentPokemon.weight ? `${currentPokemon.weight / 10}kg` : ''}</p>
                        <p>Description: {description && description}</p>
                    </Card.Body>
                )}
                {currentPokemon.sprites && (<Card.Img src={currentPokemon.sprites.other.showdown.front_default}  style={{height: `${currentPokemon.height > 10 ? '50%' : '35%'}`, width: `${currentPokemon.height > 10 ? '50%' : '35%'}`}}/>)}
                <Button onClick={addToParty} disabled={!currentPokemon.name || party.length == 6}>Add to Party</Button>
            </Card>
        </Card>
    )

};