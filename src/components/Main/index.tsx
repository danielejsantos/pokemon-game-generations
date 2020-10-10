import React from 'react';

import { Container, Wrapper, CardWrapper, StyledImg } from './styles';

import generationOneImg from "../../assets/images/generation-one.jpg";
import generationTwoImg from "../../assets/images/generation-two.png";
import generationThreeImg from "../../assets/images/generation-three.jpg";
import generationFourImg from "../../assets/images/generation-four.jpg";
import generationFiveImg from "../../assets/images/generation-five.jpg";
import generationSixImg from "../../assets/images/generation-six.png";
import generationSevenImg from "../../assets/images/generation-seven.png";
import generationEightImg from "../../assets/images/generation-eight.jpg";

const Main: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <CardWrapper>
          <StyledImg src={generationOneImg} alt="Generation One"/>
          <span>GENERATION I</span>
          <span>Pokémons: 151</span>
        </CardWrapper>
        <CardWrapper>
          <StyledImg src={generationTwoImg} alt="Generation Two" />
            <span>GENERATION II</span>
            <span>Pokémons: 251</span>
        </CardWrapper>
        <CardWrapper>
          <StyledImg src={generationThreeImg} alt="Generation Three" />
          <span>GENERATION III</span>
          <span>Pokémons: 386</span>
        </CardWrapper>
        <CardWrapper>
          <StyledImg src={generationFourImg} alt="Generation Four" />
          <span>GENERATION IV</span>
          <span>Pokémons: 493</span>
        </CardWrapper>
        <CardWrapper>
          <StyledImg src={generationFiveImg} alt="Generation Five" />
          <span>GENERATION V</span>
          <span>Pokémons: 649</span>
        </CardWrapper>
        <CardWrapper>
          <StyledImg src={generationSixImg} alt="Generation Six" />
          <span>GENERATION VI</span>
          <span>Pokémons: 721</span>
        </CardWrapper>
        <CardWrapper>
          <StyledImg src={generationSevenImg} alt="Generation Seven" />
          <span>GENERATION VII</span>
          <span>Pokémons: 809</span>
        </CardWrapper>
        <CardWrapper>
          <StyledImg src={generationEightImg} alt="Generation Eight" />
          <span>GENERATION VIII</span>
          <span>Pokémons: 896</span>
        </CardWrapper>
      </Wrapper>
    </Container>
  );
}

export default Main;