import styled from "@emotion/styled";

export const CityWrap = styled.div`
  padding: 32px 16px;

  h3 {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const CityImg = styled.img`
  width: 100%;
  height: 268px;
`;
