import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  margin: 50px 0;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 50px;
`;

export const CardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 200px;
  height: 260px;
  border-radius: 10px;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
  text-decoration: none;

  :hover {
    transform: scale(1.1);
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const StyledImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 8px;
  margin-bottom: 10px;
`;