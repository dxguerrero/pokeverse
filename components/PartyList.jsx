import { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { PartyContext } from '../contexts/PartyContext';

export const PartyList  = () => {
    
    const {party, setParty} = useContext(PartyContext);
    return (
        <Card style={{height: '80vh', width: '100%', background: 'none', border: "none", backgroundColor: 'none'}}>
            <Card style={{borderRadius: '90px', backgroundColor: 'rgb(13, 105, 83)'}}>
                <Card.Img/>
                <Card.Title>Current Party</Card.Title>
                {party &&
                    party.map((pokemon) => (
                        <Card style={{backgroundColor: 'rgb(13, 105, 83)'}}>
                            <Card.Title>{pokemon.name}</Card.Title>
                        </Card>
                    ))
                }

            </Card>
            
        </Card>
    )
}