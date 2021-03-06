import React from 'react';

import { Container, Logo } from './styles';

import logoImg from '../../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logoImg} alt="Pokémon Generations" />
    </Container>
  );
}

export default Header;