import { useDispatch } from 'react-redux';
import { FormLayout } from '../FormLayout/FormLayout';
import { Field } from 'formik';
import { Button } from 'components/Button/Button';
import { login } from 'redux/auth/operations';
const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = ({ email, password }) => {
    dispatch(login({ email, password }));
  };
  return (
    <FormLayout initialValues={initialValues} onSubmit={onSubmit}>
      <Field type="email" placeholder="email" name="email" />
      <Field type="password" placeholder="password" name="password" />
      <Button title="Submit" type="submit" />
    </FormLayout>
  );
};
export { LoginForm };
