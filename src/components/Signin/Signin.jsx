import React from 'react';
import PropTypes from 'prop-types';

const Signin = ({ test }) => {
  return <div>Signin {test} </div>;
};

Signin.propTypes = {
  test: PropTypes.string,
};

export default Signin;
