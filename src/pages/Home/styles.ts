import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding-top: 65px;
  background: radial-gradient(
    73.73% 73.73% at 50.73% 26.27%,
    #f0f0f0 0%,
    #ffffff 100%
  );

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    width: 100%;
    max-width: 1120px;

    > header {
      display: flex;
      flex-direction: column;
      align-items: center;

      > div {
        display: flex;
        align-items: baseline;

        > h1 {
          display: flex;
          align-items: center;

          font-weight: 600;
          font-size: 84px;
          line-height: 102px;
        }

        > span {
          position: relative;

          display: flex;
          align-items: flex-end;
          width: 100%;

          overflow: hidden;
          transition: width 0.2s ease;

          font-weight: 500;
          font-size: 32px;
          line-height: 39px;

          margin-left: 26px;

          > img {
            width: 32px;
            height: 32px;
            margin-left: 8px;
          }
        }
      }
    }

    > main {
      display: flex;
      align-items: center;

      > div {
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.3s ease;

        &:hover,
        &:focus {
          transform: translateY(-24%);
        }

        & + div {
          margin-left: 70px;
        }
      }
    }
  }

  @media (max-width: 535px) {
    > div {
      > header {
        > div {
          flex-direction: column;
          align-items: center;
          margin-bottom: 70px;
        }
      }

      > main {
        display: grid;
        grid-template-columns: repeat(2, 60px);
        grid-auto-rows: 60px;
        column-gap: 70px;
        row-gap: 30px;

        > div + div {
          margin-left: 0;
        }
      }
    }
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
