import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 100px;
  align-items: center;
`;

export const PokemonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 810px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PokedexImg = styled.img`
  width: 450px;

  @media (max-width: 500px) {
    width: 350px;
  }

  @media (max-width: 370px) {
    width: 300px;
  }
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  @media (max-width: 810px) {
    margin-top: 15px;
    margin-left: 0;
  }
`;

export const PokemonName = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const PokemonInfoText = styled.p`
  font-size: 17px;
`;