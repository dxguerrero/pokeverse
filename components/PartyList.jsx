import { useContext, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { PartyContext } from '../contexts/PartyContext';

export const PartyList  = () => {
    
    const {party, setParty} = useContext(PartyContext);

    const removeFromParty = (partyIndex) => {
        setParty((prevParty) => prevParty.filter((_, i) => i !== partyIndex));
    };

    return (
        <Card style={{height: '80vh', width: '100%', background: 'none', border: "none", backgroundColor: 'none', overflow: 'hidden'}}>

                <Card style={{borderRadius: '90px', backgroundColor: 'rgb(14, 122, 97)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Col>
                        <Row style={{marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Card.Img/>
                            <Card.Title className='white-text'>Current Party</Card.Title>
                        </Row>
                    </Col>
                </Card>
                <Col style={{marginTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
                    {party &&
                        party.map((pokemon, index) => (
                            <Card key={index} style={{backgroundColor: 'rgb(14, 122, 97)', margin: '5px', height: '150px'}}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Card.Title className='white-text'>{pokemon.name}</Card.Title>
                                        </Col>
                                        <Col style={{display: 'flex', justifyContent: 'start'}}>
                                            <Card.Body><img src={pokemon.sprites.other.showdown.front_default}/></Card.Body>
                                        </Col>
                                        <Col>
                                            <Button onClick={() => removeFromParty(index)}>Remove From party</Button>
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