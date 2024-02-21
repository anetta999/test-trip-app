import styled from "@emotion/styled";

export const CityList = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  li {
    cursor: pointer;
    border: 1px solid transparent;
    flex-basis: calc(100% - 24px / 2);
    transition: border ${({ theme }) => theme.transition.main};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const AddBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 268px;
  font-size: 16px;
  line-height: 1.25;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  transition: background-color ${({ theme }) => theme.transition.main};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const TripWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
`;
