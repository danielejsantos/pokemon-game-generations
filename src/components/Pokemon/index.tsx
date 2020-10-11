import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { PokemonProps } from '../../types';

import BackButton from '../BackButton';

import { Container, PokemonWrapper, PokedexImg, PokemonInfo, PokemonName, PokemonInfoText } from "./styles";

import pokedexImg from "../../assets/images/pokedex.png";

const Pokemon: React.FC<PokemonProps> = ({ pokemonUrl, setPokemonUrl }) => {
  const [pokeInfo, setPokeInfo] = useState<any>({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(pokemonUrl);
      setPokeInfo(data);
    })();
  }, [pokemonUrl]);

  return (
    <Container>
      <BackButton back={() => setPokemonUrl('')} />

      <PokemonWrapper>
        <PokedexImg src={pokedexImg} alt="Pokedex"/>
        <PokemonInfo>
          <PokemonName>
            {pokeInfo.name}
          </PokemonName>
            {pokeInfo.order && <PokemonInfoText><b>Number:</b> {pokeInfo.order}
          </PokemonInfoText>}
          <PokemonInfoText>
            <b>Color:</b> {pokeInfo.color?.name}
          </PokemonInfoText>
          <PokemonInfoText>
            <b>Habitat:</b> {pokeInfo.habitat?.name}
          </PokemonInfoText>
          <PokemonInfoText>
            <b>Shape:</b> {pokeInfo.shape?.name}
          </PokemonInfoText>
          {pokeInfo.is_legendary && <PokemonInfoText>
            It's a <em>legendary</em> pokemon!
          </PokemonInfoText>}
          {pokeInfo.is_mythical && <PokemonInfoText>
            It's a <em>mythical</em> pokemon!
          </PokemonInfoText>}
          {pokeInfo.is_baby && <PokemonInfoText>
            It's a <em>baby</em> pokemon! So cute s2
          </PokemonInfoText>}
        </PokemonInfo>
      </PokemonWrapper>
    </Container>
  );
}

export default Pokemon;