import styled from "@emotion/styled";

export const DaysList = styled.ul`
  display: flex;
  gap: 24px;

  li {
    flex-basis: calc(100% - 24px * 6 / 7);

    h3 {
      margin-bottom: 4px;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.2;
      text-align: center;
      color: ${({ theme }) => theme.colors.black};
    }

    h4 {
      margin-bottom: 4px;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      color: ${({ theme }) => theme.colors.grey};
    }

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 1.2;
      text-align: center;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
