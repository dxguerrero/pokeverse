import { useState } from 'react';
import { Card } from 'react-bootstrap';

export const PartyList  = () => {

    return (
        <Card style={{height: '80vh', width: '100%', background: 'none', border: "none", backgroundColor: 'none'}}>
            <Card style={{borderRadius: '90px'}}>
                <Card.Img/>
                <Card.Title>Current Party</Card.Title>
            </Card>
            
        </Card>
    )
}