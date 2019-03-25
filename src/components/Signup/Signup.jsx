import React from 'react';
import PropTypes from 'prop-types';

const Singup = ({ test }) => {
  return (
    <div>
      Singup {test}
    </div>
  );
};

Singup.propTypes = {
  test: PropTypes.string,
};

export default Singup;
