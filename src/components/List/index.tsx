import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ArrayOfNameUrl, ListProps } from '../../types';

import { Container, ListWrapper, PokemonButton, PokeballImg, PokemonName } from './styles';

import BackButton from '../BackButton';

import pokeballImg from "../../assets/images/pokeball.png";

const List: React.FC<ListProps> = ({ generationUrl, setGenerationUrl, setPokemonUrl }) => {
  const [pokemons, setPokemons] = useState<ArrayOfNameUrl[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(generationUrl);
      setPokemons(data.pokemon_species);
    })();
  }, [generationUrl, setPokemons]);

  return (
    <Container>
      <BackButton back={() => setGenerationUrl('')} />
      <ListWrapper>
        {pokemons?.map((pokemon: ArrayOfNameUrl) => (
          <PokemonButton key={pokemon.name} onClick={() => setPokemonUrl(pokemon.url)}>
            <PokeballImg src={pokeballImg} alt="Pokeball"/>
            <PokemonName>{pokemon.name}</PokemonName>
          </PokemonButton>
        ))}
      </ListWrapper>
    </Container>
  )
};

export default List;