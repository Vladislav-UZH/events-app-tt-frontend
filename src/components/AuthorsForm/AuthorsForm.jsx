import { Button } from 'components/Button/Button';
import { FormLayout } from 'components/FormLayout/FormLayout';
import { Field } from 'formik';

const AuthorsForm = ({ handleCreate }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };
  const handleSubmit = values => {
    handleCreate(values);
  };
  return (
    <FormLayout initialValues={initialValues} onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Field
          minLength="2"
          maxLength="30"
          name="firstName"
          required={true}
          placeholder="enter a first name"
        />
        <Field
          minLength="2"
          maxLength="30"
          name="lastName"
          required={true}
          placeholder="enter a last name"
        />
        <Field
          minLength="2"
          name="email"
          type="email"
          required={true}
          placeholder="enter an email"
        />
        <Field
          minLength="2"
          maxLength="15"
          required={true}
          name="phoneNumber"
          placeholder="enter a phone number"
        />
        <Button title="Save" type="submit" />
      </div>
    </FormLayout>
  );
};
export { AuthorsForm };
