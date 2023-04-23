import { Navigation } from '../Navigation/Navigation';
import { Header, Container } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Container>
        <h1>Events App</h1>
        <Navigation />
      </Container>
    </Header>
  );
};

export { AppBar };
