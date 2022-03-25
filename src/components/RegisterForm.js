import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';

const RegisterForm = (props) => {
  const alkuarvot = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const doRegister = () => {
    console.log('doRegister');
  };

  const {inputs, handleInputChange} = useForm(doRegister, alkuarvot);
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
      <input
        placeholder="email"
        name="email"
        type="email"
        onChange={handleInputChange}
        value={inputs.email}
      />
      <input
        placeholder="full name"
        name="full_name"
        onChange={handleInputChange}
        value={inputs.full_name}
      />
      <input type="submit" value="register" />
    </form>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
