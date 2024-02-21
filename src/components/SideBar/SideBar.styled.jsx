import styled from "@emotion/styled";

export const Day = styled.h3`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.2;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
export const Temp = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};

  span {
    position: absolute;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
  }
`;
export const Location = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const IconWrap = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img {
    display: block;
  }
`;
