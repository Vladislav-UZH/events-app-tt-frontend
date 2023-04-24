import { Button } from 'components/Button/Button';
import {
  Row,
  Field,
  FieldTitle,
  Table,
  StyledLink,
} from 'components/ListStyles/ListStyles.styled';

const AuthorsList = ({ keys, authors, handleDelete }) => {
  return (
    <>
      <div style={{ overflowY: 'scroll', height: 400 }}>
        <Table>
          <thead>
            <Row>
              {keys.map(key => (
                <FieldTitle key={key}>{key}</FieldTitle>
              ))}
            </Row>
          </thead>
          <tbody>
            {!!authors.length &&
              authors.map(
                ({
                  _id,
                  firstName,
                  lastName,
                  email,
                  phoneNumber,
                  totalEvents,
                  nextEventStartDate,
                }) => (
                  <Row key={_id}>
                    <Field>
                      <StyledLink to={`/profile/${_id}`}>
                        {firstName} {lastName}
                      </StyledLink>
                    </Field>
                    <Field>{email}</Field>
                    <Field>{phoneNumber}</Field>
                    <Field>{totalEvents}</Field>
                    <Field>{nextEventStartDate}</Field>
                    <Field>
                      <Button title="X" onClick={() => handleDelete(_id)} />
                    </Field>
                  </Row>
                )
              )}
          </tbody>
        </Table>
      </div>
      {!authors.length && (
        <h3 style={{ position: 'absolute', top: 300, left: 100 }}>
          No content here!
        </h3>
      )}
    </>
  );
};
export { AuthorsList };
