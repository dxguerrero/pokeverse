import { useContext, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { PartyContext } from '../contexts/PartyContext';

export const PartyList  = () => {
    
    const {party, setParty} = useContext(PartyContext);

    const removeFromParty = (partyIndex) => {
        setParty((prevParty) => prevParty.filter((_, i) => i !== partyIndex));
    };

    return (
        <Card style={{height: '100%', width: '100%', background: 'none', border: "none", backgroundColor: 'none', overflow: 'hidden'}}>
                <Card style={{borderRadius: '90px', backgroundColor: 'rgb(14, 122, 97)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Col style={{width: '100%'}}>
                        <Row style={{marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                            <Card.Title className='white-text' style={{width: '100%'}}>Current Party</Card.Title>
                        </Row>
                    </Col>
                </Card>
                <Col style={{marginTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
                    {party &&
                        party.map((pokemon, index) => (
                            <Card key={index} style={{backgroundColor: 'rgb(14, 122, 97)', margin: '5px', height: '25%', width: '100%', padding: '4px 4px'}}>
                                <Container>
                                    <Row>
                                        <Col style={{width: '75%'}}>
                                            <Row style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                                                <div style={{display: 'inline-block', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(10, 76, 61)', width: '60%', height: '50%', borderRadius: '50px'}}>
                                                    <h1 className='white-text' style={{fontSize:'22px'}}>Lv. 100</h1>
                                                </div>
                                                <Button variant='danger' style={{borderRadius: '100px', width: '30px', height: '30px'}} onClick={() => removeFromParty(index)}>X</Button>
                                            </Row>
                                            <Row>
                                            <Card.Title className='white-text'>{pokemon.name}</Card.Title>
                                            </Row>
                                        </Col>
                                        <Col style={{display: 'flex', justifyContent: 'end', flexDirection: 'row', width: '50%'}}>
                                                <img src={pokemon.sprites.other.showdown.front_default} style={{height: `${pokemon.height > 10 ? '100%' : '75%'}`, width: `${pokemon.height > 10 ? '50%' : '37.5%'}`}}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        ))
                    }
                </Col>
        </Card>
    )
}