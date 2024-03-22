import { useState, useEffect } from 'react';
import { Container, Form, Navbar } from 'react-bootstrap';
import './App.css';
import { PokemonList } from '../components/PokemonList';

const pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=151'

function App() {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(()=>{
    fetch(pokeApi)
      .then((res) => res.json())
      .then((data) => {
        setAllPokemon(data.results);
      })
  }, [])


  

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
        <Container style={{display: 'flex', justifyContent: 'start', marginLeft: '1em'}}>
          <Navbar.Brand>Pokeverse</Navbar.Brand>
        </Container>
      </Navbar>


      <Form style={{width: '20%', margin: 'auto'}}>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control placeholder='Search..'/>
        </Form.Group>
      </Form>

      <PokemonList allPokemon={allPokemon}/>
    </>
  )
}

export default App
