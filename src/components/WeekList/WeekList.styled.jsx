import styled from "@emotion/styled";

export const DaysList = styled.ul`
  width: 900px;
  display: flex;
  gap: 30px;

  li {
    flex-basis: calc(100% - 30px * 6 / 7);

    h3 {
      margin-bottom: 6px;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.2;
      text-align: center;
      color: ${({ theme }) => theme.colors.black};
    }

    h4 {
      margin-bottom: 6px;
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
