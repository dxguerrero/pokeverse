import { useContext, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { PartyContext } from '../contexts/PartyContext';

export const PartyList  = () => {
    
    const {party, setParty} = useContext(PartyContext);
    return (
        <Card style={{height: '80vh', width: '100%', background: 'none', border: "none", backgroundColor: 'none', overflow: 'hidden'}}>

                <Card style={{borderRadius: '90px', backgroundColor: 'rgb(14, 122, 97)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Col>
                        <Row style={{marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Card.Img/>
                            <Card.Title>Current Party</Card.Title>
                        </Row>
                    </Col>
                </Card>
                <Col style={{marginTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
                    {party &&
                        party.map((pokemon) => (
                            <Card style={{backgroundColor: 'rgb(14, 122, 97)', margin: '5px'}}>
                                <Card.Title>{pokemon.name}</Card.Title>
                            </Card>
                        ))
                    }
                </Col>
                    
                

        </Card>
    )
}