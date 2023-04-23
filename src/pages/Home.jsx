import styled from '@emotion/styled';
import { AuthorsList } from 'components/AuthorsList/AuthorsList';
import { Box } from 'components/Box/Box';
import { Panel } from 'components/Panel/Panel';
import { useAuth } from 'hooks';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  padding: 60px 0;
  background-color: #32343b;
`;
const Title = styled.h3`
  font-size: 32px;
  font-style: italic;
`;
const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <Box>
          <Panel
            title="Dashboard"
            filterOptions={[{ _id: 5458 }, { _id: 548 }]}
          />
          <AuthorsList />
        </Box>
      ) : (
        <Container>
          <Title>Welcome, my good Wayfarer 👋</Title>
          <p>Register or Login to create events.</p>
        </Container>
      )}
    </>
  );
};
export default Home;
