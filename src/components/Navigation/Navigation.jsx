import { Button } from 'components/Button/Button';
import { useAuth } from 'hooks';
import { Nav, StyledLink } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      {isLoggedIn ? (
        <>
          <StyledLink to="/">Home</StyledLink>
          <Button title="Logout" />
        </>
      ) : (
        <>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/reg">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </>
      )}
    </Nav>
  );
};

export { Navigation };
