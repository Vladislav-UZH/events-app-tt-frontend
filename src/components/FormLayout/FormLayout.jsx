const { Formik, Form } = require('formik');

const FormLayout = ({ initialValues, onSubmit, children }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>{children}</Form>
    </Formik>
  );
};
export { FormLayout };
