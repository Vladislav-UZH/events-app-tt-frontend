import styled from '@emotion/styled';
const animationFunc = `cubic-bezier(.17,.67,.28,.85) 300ms`;

const StyledButton = styled.button`
  padding: 5px 20px;
  min-width: 60px;
  border: none;
  border-radius: 4px;
  background-color: #e2580a;
  color: inherit;
  transition: background-color ${animationFunc}, outline ${animationFunc},
    color ${animationFunc};
  &:hover {
    outline: 1px solid #e2580a;
    background-color: transparent;
    color: #e2580a;
  }
  &:active {
    background-color: #e2580a;
    color: inherit;
  }
`;
export { StyledButton };
