import styled from "@emotion/styled";
import { CgSearch } from "react-icons/cg";

export const StyledInput = styled.input`
  width: 300px;
  height: 44px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 6px;
  border: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  line-height: 1.25;
  outline: transparent;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  &:focus {
    color: ${({ theme }) => theme.colors.white};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

export const SearchIcon = styled(CgSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
