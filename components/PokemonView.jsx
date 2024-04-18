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
          if (data.flavor_text_entries) {
            setDescription(getDescription(data.flavor_text_entries));
          } else {
            setDescription('');
          }
        } catch (error) {
          console.error("There was an error fetching species data", error);
        }
      }
    };

    const height = currentPokemon.height ? currentPokemon.height : 0;
    const imageSize = Math.min(height * 5, 40);
  
    useEffect(() => {
      if (currentPokemon.name) {
        fetchSpeciesData();
      }
    }, [currentPokemon]);

    const titleCaseName = currentPokemon?.name?.replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
      

    return (
        <Card className='view-container' style={{height: '100%', width: '400px', backgroundColor: 'rgb(0,0,0,0.2)', overflow: 'scroll'}}>
            <Card className='white-text'style={{marginTop:'50px', minHeight: '40%', position: 'fixed', width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(0,0,0,0.5)'}}>
                <Card.Title>Pokemon View</Card.Title>
                {currentPokemon && (
                    <Card.Body style={{paddingBottom: '', display: 'flex', alignItems: 'start', flexDirection: 'column', width: '90%'}}>
                        <p>Name: {titleCaseName}</p>
                        <p>Height: {currentPokemon.height ? `${currentPokemon.height / 10}m`  : ''} </p>
                        <p>Weight: {currentPokemon.weight ? `${currentPokemon.weight / 10}kg` : ''}</p>
                        <p>Description: {description}</p>
                    </Card.Body>
                )}
                {currentPokemon.sprites && (<Card.Img src={currentPokemon.sprites.other.showdown.front_default}  style={{height: `${imageSize}%`, width: `${imageSize}%`}} />)}
                <Button onClick={addToParty} disabled={!currentPokemon.name || party.length == 6}>Add to Party</Button>
            </Card>
        </Card>
    )

};
