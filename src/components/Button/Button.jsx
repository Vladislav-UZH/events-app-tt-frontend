import { StyledButton } from './Button.styled';
const Button = ({ title, type = 'button', onClick, chidlren }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {title} {chidlren}
    </StyledButton>
  );
};
export { Button };
