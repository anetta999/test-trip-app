import styled from "@emotion/styled";

export const TimerWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  p {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const Number = styled.span`
  margin-bottom: 4px;
  font-weight: 900;
  font-size: 30px;
  line-height: 1.2;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Time = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;
