import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

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
          display: flex;
          align-items: center;

          font-weight: 500;
          font-size: 32px;
          line-height: 39px;

          margin-left: 26px;
        }
      }
    }

    > main {
      display: flex;
      align-items: center;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        & + div {
          margin-left: 70px;
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
