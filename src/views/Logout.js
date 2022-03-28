import {Navigate} from 'react-router-dom';

const Logout = (props) => {
  localStorage.clear();
  return <Navigate to="/" />;
};

Logout.propTypes = {};

export default Logout;
