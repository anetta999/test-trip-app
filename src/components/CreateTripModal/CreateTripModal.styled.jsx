import styled from "@emotion/styled";
import { Form, ErrorMessage } from "formik";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  z-index: 1200;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  button {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;

    svg {
      width: 20px;
      height: 20px;
      fill: ${({ theme }) => theme.colors.lightGrey};
    }

    &:is(:hover, :focus) svg {
      fill: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
  }

  input {
    height: 44px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 40px;
    padding-right: 40px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    line-height: 1.25;
    outline: transparent;

    &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }

  ul {
    margin-top: 100px;
    padding-top: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const FormOption = styled.option`
  display: inline-flex;
  width: 600px;
  height: 272px;
  font-size: 18px;
  padding: 14px 8px 14px 18px;
  justify-content: flex-end;
  align-items: flex-start;
  flex-shrink: 0;
  border: 1px solid ${({ theme }) => theme.colors.black};

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;

export const FormBtn = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 8px 10px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  transition: color, background-color ${({ theme }) => theme.transition.main};

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CancelBtn = styled(FormBtn)`
  padding: 8px 12px;
`;

export const StyledErrorMsg = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
`;
