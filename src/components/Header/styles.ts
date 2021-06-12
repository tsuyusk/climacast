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

  > a {
    display: flex;
    align-items: center;
    transition: transform 0.2s ease;

    text-decoration: none;
    color: #333;

    > span {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      margin-left: 8px;
    }
  }

  &:hover {
    > a {
      transform: rotate(1deg) translateX(5px);
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  width: 256px;
  height: 40px;
  padding: 8px 12px;

  background: #f5f5f5;
  border-radius: 12px;

  > input {
    border: 0;
    outline: 0;
    background: transparent;
    z-index: 1;

    color: #333;
    transition: color 0.2s ease;
    font-family: "Montserrat";
    font-size: 16px;
    width: 80%;
  }

  > button {
    border: 0;
    background: transparent;
    cursor: pointer;
    z-index: 1;

    > svg {
      color: #333;
    }
  }

  &::after {
    content: "";

    position: absolute;
    height: 40px;
    width: 100%;
    top: 0;
    left: -100%;
    transition: left 0.2s ease;
    background: #333;
    pointer-events: none;
  }

  &:hover,
  &:focus-within {
    > input {
      color: #f5f5f5;
    }

    > button {
      > svg {
        color: #f5f5f5;
      }
    }

    &::after {
      left: 0%;
    }
  }

  @media (max-width: 535px) {
    width: 226px;
    margin-left: 8px;
  }

  @media (max-width: 360px) {
    width: 124px;
  }
`;
