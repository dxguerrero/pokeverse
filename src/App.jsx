import { useState, useEffect } from 'react';
import { Container, Form, Navbar } from 'react-bootstrap';
import './App.css';
import { PokemonList } from '../components/PokemonList';

const pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=151'

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch(pokeApi)
      .then((res) => res.json())
      .then((data) => {
        setAllPokemon(data.results);
        setFilteredPokemon(data.results);
      })
      .catch((error) => {
        console.error('Error fetching pokemon:', error);
      })
  }, [])


  const filterPokemon = () => {
    const searchTerm = search.toLowerCase();

    if (!searchTerm) {
      setFilteredPokemon(allPokemon);
      return
    }

    const filteredPokemon = allPokemon.filter((pokemon) => {
      const pokemonName = pokemon.name.toLowerCase();
      return pokemonName.includes(searchTerm);
    })

    setFilteredPokemon(filteredPokemon)
  }
  
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  useEffect(()=>{
    filterPokemon();
  }, [search])

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
          <Form.Control placeholder='Search..' onChange={handleSearchChange}/>
        </Form.Group>
      </Form>


      {filteredPokemon.length > 0 && <PokemonList filteredPokemon={filteredPokemon}/>}
    </>
  )
}

export default App
