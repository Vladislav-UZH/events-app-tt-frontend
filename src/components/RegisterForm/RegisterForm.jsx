import { useDispatch } from 'react-redux';
import { FormLayout } from '../FormLayout/FormLayout';
import { Field } from 'formik';
import { Button } from 'components/Button/Button';
import { register } from 'redux/auth/operations';
const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = ({ email, password }) => {
    dispatch(register({ email, password }));
  };
  return (
    <FormLayout initialValues={initialValues} onSubmit={onSubmit}>
      <Field type="email" placeholder="email" name="email" required={true} />
      <Field
        type="password"
        placeholder="password"
        name="password"
        minLength="8"
        required={true}
      />
      <Button title="Submit" type="submit" />
    </FormLayout>
  );
};
export { RegisterForm };
