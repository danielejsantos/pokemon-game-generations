import styled from 'styled-components';

export const BackButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  border-radius: 16px;
  padding-bottom: 3px;
  background-color: transparent;
  border: 2px solid #f00000;
  color: #f00000;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
  outline: 0;

  :hover,
  :focus {
    background-color: #f00000;
    color: #fff;
    border: 2px solid transparent;
  }
`;