import { CenteredContainer } from 'components/ListStyles/ListStyles.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <CenteredContainer>
      <h2>Registration</h2>

      <RegisterForm />
    </CenteredContainer>
  );
};
export default Register;
