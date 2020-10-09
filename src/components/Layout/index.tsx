import React from 'react';

import { Container } from './styles';

import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
}

export default Layout;