import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';

const LoginForm = (props) => {
  const alkuarvot = {
    username: '',
    password: '',
  };

  const doLogin = () => {
    console.log('doLogin');
  };
  const {inputs, handleInputChange} = useForm(doLogin, alkuarvot);
  console.log(inputs);
  return (
    <form>
      <input
        placeholder="username"
        name="username"
        onChange={handleInputChange}
        value={inputs.username}
      />
      <input
        placeholder="password"
        name="password"
        type="password"
        onChange={handleInputChange}
        value={inputs.password}
      />
      <input type="submit" value="login" />
    </form>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
