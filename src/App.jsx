import { useState, useEffect } from 'react';
import { Card, Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import './App.css';
import { PokemonList } from '../components/PokemonList';
import { PartyList } from '../components/PartyList'
import { PokemonView } from '../components/PokemonView';
import { CurrentPokemonContext } from '../contexts/CurrentPokemonContext';
import { PartyContext } from '../contexts/PartyContext';
const pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=151'

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [search, setSearch] = useState('')
  const [currentPokemon, setCurrentPokemon] = useState({})
  const [party, setParty] = useState([])

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
    <PartyContext.Provider value={{party, setParty}}>
      <div style={{display: 'flex', justifyContent: "center", alignItems:'flex-start'}}>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
          <Container style={{display: 'flex', justifyContent: 'start', marginLeft: '1em'}}>
            <Navbar.Brand>Pokeverse</Navbar.Brand>
          </Container>
        </Navbar>
        <CurrentPokemonContext.Provider value={{currentPokemon, setCurrentPokemon}}>
          <Col xs={12} md={4} lg={4} style={{marginTop: '100px', marginLeft: '-400px'}}>
            <Row>
              <PartyList/>
            </Row>
          </Col>
          <Col xs={4} md={6} lg={8} style={{marginTop: '100px'}}>
            <Row>
              <Form style={{width: '20%', margin: 'auto'}}>
                <Form.Group>
                  <Form.Control placeholder='Search..' onChange={handleSearchChange}/>
                </Form.Group>
              </Form>
            </Row>
            <Row>
              {filteredPokemon.length > 0 && <PokemonList filteredPokemon={filteredPokemon} setFilteredPokemon={setFilteredPokemon}/>}
            </Row>
          </Col>
            <Row>

            </Row>
          <Col xs={4} md={6} lg={5} style={{marginTop: '20px', marginLeft: '30px', marginRight: '3px'}}>
            <PokemonView/>
          </Col>
        </CurrentPokemonContext.Provider>
      </div>
    </PartyContext.Provider>
  )
}

export default App
