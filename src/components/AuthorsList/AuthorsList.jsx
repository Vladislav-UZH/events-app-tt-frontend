import { Button } from 'components/Button/Button';
import { getAllAuthors } from 'helpers/fetchApi';
import { useEffect, useState } from 'react';
import { Row, Field, FieldTitle, Table } from './AuthorsList.styled';

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const resp = await getAllAuthors();
        setAuthors(resp.data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  const handleDelete = id => {
    const updatedCollection = authors.filter(({ _id }) => id !== _id);
    setAuthors(updatedCollection);
  };
  // console.log(authors[0]);
  const keys = [
    'Username',
    'Email',
    'Phone',
    'Total events',
    'Next event date',
    'Delete',
  ];
  return (
    <Table>
      <thead>
        <Row>
          {keys.map(key => (
            <FieldTitle key={key}>{key}</FieldTitle>
          ))}
        </Row>
      </thead>
      <tbody>
        {authors.length ? (
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
              <>
                <Row key={_id}>
                  <Field>
                    {firstName} {lastName}
                  </Field>
                  <Field>{email}</Field>
                  <Field>{phoneNumber}</Field>
                  <Field>{totalEvents}</Field>
                  <Field>{nextEventStartDate}</Field>
                  <Button title="X" onClick={() => handleDelete(_id)} />
                </Row>
              </>
            )
          )
        ) : (
          <p>No content here!</p>
        )}
      </tbody>
    </Table>
  );
};
export { AuthorsList };
