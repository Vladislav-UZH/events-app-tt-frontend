import { Button } from 'components/Button/Button';
import {
  Row,
  Field,
  FieldTitle,
  Table,
} from 'components/ListStyles/ListStyles.styled';
const EventsList = ({ keys, events, handleDelete }) => {
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
            {!!events.length &&
              events.map(({ _id, title, description, startDate, endDate }) => (
                <Row key={_id}>
                  <Field>{title}</Field>
                  <Field>{description}</Field>
                  <Field>{startDate}</Field>
                  <Field>{endDate}</Field>

                  <Field>
                    <Button title="X" onClick={() => handleDelete(_id)} />
                  </Field>
                </Row>
              ))}
          </tbody>
        </Table>
      </div>
      {!events.length && <h3>No content here!</h3>}
    </>
  );
};
export { EventsList };
