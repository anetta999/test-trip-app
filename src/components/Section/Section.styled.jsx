import styled from "@emotion/styled";

export const BaseSection = styled.section`
  padding-top: 50px;
  padding-bottom: 150px;
`;

export const MainContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 auto;
  max-width: 1440px;
  padding-left: 24px;
  padding-right: 24px;

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 400px;
    padding-top: 250px;
    padding-bottom: 400px;
    background-color: ${({ theme }) => theme.colors.black};
  }

  main {
    flex-grow: 1;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 50px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};

  span {
    font-weight: 600;
  }
`;

export const SecondaryTitle = styled.h2`
  margin-bottom: 50px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;
