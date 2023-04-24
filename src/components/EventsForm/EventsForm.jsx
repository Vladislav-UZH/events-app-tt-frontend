import { Button } from 'components/Button/Button';
import { FormLayout } from 'components/FormLayout/FormLayout';
import { Field } from 'formik';
const EventsForm = ({ handleCreate }) => {
  const initialValues = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  };
  // eslint-disable-next-line no-useless-escape
  const dateRegExp =
    /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

  const handleSubmit = values => {
    const startDateValue = new Date(values.startDate);
    const endDateValue = new Date(values.endDate);
    if (endDateValue < startDateValue) {
      alert('End date should be greater than or equal to start date.');
      return;
    }

    handleCreate(values);
  };
  return (
    <FormLayout initialValues={initialValues} onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Field
          minLength="2"
          maxLength="30"
          name="title"
          required={true}
          placeholder="enter a title"
        />
        <Field
          minLength="2"
          maxLength="100"
          as="textarea"
          name="description"
          required={true}
          placeholder="enter a description"
        />
        <Field
          name="startDate"
          type="date"
          pattern={dateRegExp}
          required={true}
        />
        <Field
          name="endDate"
          type="date"
          pattern={dateRegExp}
          required={true}
        />
        <Button title="Save" type="submit" />
      </div>
    </FormLayout>
  );
};
export { EventsForm };
