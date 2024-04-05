import { useState } from 'react';
import { Pokemon } from './Pokemon';
import { Pagination } from 'react-bootstrap';

export const PokemonList = ({ filteredPokemon, setfilteredPokemon }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25; // Adjust as needed
  
    const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
  
    const slicedPokemon = filteredPokemon.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setfilteredPokemon(slicedPokemon)
      };
  
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 10em))',
          placeItems: 'start',
          paddingLeft: '50px',
          marginRight: '0px',
          height: '90vh',
          overflowY: 'auto'
        }}
      >
        {filteredPokemon.map((pokemon, idx) => (
          <Pokemon key={idx} pokemon={pokemon} filteredPokemon={filteredPokemon} />
        ))}
      </div>
    );
  };