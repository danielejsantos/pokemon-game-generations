import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 100px;
  align-items: center;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: auto;
  row-gap: 50px;
  column-gap: 40px;
  margin-top: 40px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 970px) {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 825px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 745px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 490px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }

  @media (max-width: 365px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;

export const PokemonButton = styled.button`
  cursor: pointer;
  outline: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  :hover {
    transform: scale(1.1);
  }
`;

export const PokeballImg = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
`;

export const PokemonName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
`;