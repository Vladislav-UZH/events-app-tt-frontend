import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
const globalAnimEffect = 'cubic-bezier(.06,.57,.52,.97) 300ms';
const Table = styled.table`
  position: relative;
  min-width: 800px;
`;
const Row = styled.tr`
  background-color: #585a63;
`;
const FieldTitle = styled.th`
  padding: 10px;
`;
const Field = styled.td`
  text-align: center;
  padding: 10px;
`;
const StyledLink = styled(NavLink)`
  text-decoration: underline;
  transition: color ${globalAnimEffect};
  &:hover {
    color: #e2580a;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 20px;
`;
export { Row, Field, FieldTitle, Table, StyledLink, Container };
