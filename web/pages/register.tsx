import InputGroup from '../components/inputs/input-group/InputGroup';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Register: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Create an Account</h2>
      <p className="mb-40">This is an example page.</p>
      <InputGroup
        label="Email"
        isRequired
        fieldProps={{
          type: 'email',
          placeholder: 'Enter your email',
        }}
      />
      <InputGroup
        label="Password"
        isRequired
        fieldProps={{
          type: 'password',
          placeholder: 'Enter your Password',
        }}
      />
    </section>
  );
};

export default Register;

Register.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
