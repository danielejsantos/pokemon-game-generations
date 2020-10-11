import React, { useState } from 'react';

import { Container } from './styles';

import Header from '../Header';
import Main from '../Main';
import List from '../List';
import Pokemon from '../Pokemon';
import Footer from '../Footer';

const Layout: React.FC = () => {
  const [generationUrl, setGenerationUrl] = useState('');
  const [pokemonUrl, setPokemonUrl] = useState('');

  return (
    <Container>
      <Header />
      {!generationUrl && <Main setGenerationUrl={setGenerationUrl} />}
      {(generationUrl && !pokemonUrl) && <List generationUrl={generationUrl} setGenerationUrl={setGenerationUrl} setPokemonUrl={setPokemonUrl} />}
      {(generationUrl && pokemonUrl) && <Pokemon pokemonUrl={pokemonUrl} setPokemonUrl={setPokemonUrl} />}
      <Footer />
    </Container>
  );
}

export default Layout;