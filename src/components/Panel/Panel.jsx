import { Button } from 'components/Button/Button';
import Filter from 'components/Filter';
import { Container } from './Panel.styled';

const Panel = ({ title, filterOptions }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Button title="Add" />
      <Filter filterOptions={filterOptions} />
    </Container>
  );
};
export { Panel };
