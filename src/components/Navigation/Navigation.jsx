import { Button } from 'components/Button/Button';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Nav, StyledLink } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const handleClick = () => [dispatch(logOut())];
  return (
    <Nav>
      {isLoggedIn ? (
        <>
          <StyledLink to="/">Home</StyledLink>
          <Button title="Logout" onClick={handleClick} />
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
