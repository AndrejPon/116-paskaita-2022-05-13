import styled from 'styled-components';

export const InputControl = styled.div``;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 0.125rem solid rgb(0, 0, 0);
  box-sizing: border-box;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  width: 100%;
  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  :focus {
    border-color: rgba(0, 0, 0, 0.5);
    transition: border-color 1s;
    outline: 0;
  }
`;
