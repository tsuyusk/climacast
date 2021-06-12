import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1120px;
  }

  @media (max-width: 360px) {
    > div {
      max-width: 288px;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    margin-left: 8px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 256px;
  height: 40px;
  padding: 8px 12px;

  background: #f5f5f5;
  border-radius: 12px;

  > input {
    border: 0;
    outline: 0;
    background: transparent;

    font-family: "Montserrat";
    font-size: 16px;
    width: 80%;
  }

  > button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  @media (max-width: 535px) {
    width: 226px;
    margin-left: 8px;
  }

  @media (max-width: 360px) {
    width: 124px;
  }
`;
