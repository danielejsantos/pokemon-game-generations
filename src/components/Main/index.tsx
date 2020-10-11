import React, { useState, useEffect } from 'react';

import { Container, Wrapper, CardWrapper, StyledImg } from './styles';

import { generationsImage } from '../../helpers';
import { ArrayOfNameUrl, MainProps } from '../../types';
import { POKE_API } from '../../services/api';

const Main: React.FC<MainProps> = ({ setGenerationUrl }) => {
  const [generations, setGenerations] = useState<ArrayOfNameUrl[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await POKE_API.get("/generation");
      setGenerations(data.results);
    })();
  }, [setGenerations]);

  return (
    <Container>
      <Wrapper>
        {generations?.map((generation: ArrayOfNameUrl) => (
        <CardWrapper key={generation.name} onClick={() => setGenerationUrl(generation.url)}>
          <StyledImg src={generationsImage(generation.name)} alt={generation.name}/>
          <span>{generation.name}</span>
        </CardWrapper>
        ))}
      </Wrapper>
    </Container>
  );
}

export default Main;