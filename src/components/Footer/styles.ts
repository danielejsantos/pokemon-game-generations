import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: #e9e3e9;
  bottom: 0;

  > span {
    color: #696669;
    font-size: 13px;
  }

  @media (min-height: 890px) {
    position: fixed;
  }
`;