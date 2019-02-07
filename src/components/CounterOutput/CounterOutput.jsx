import React from 'react';
import PropTypes from 'prop-types';

import './CounterOutput.css';

const counterOutput = props => {
  const { value } = props;
  return (
    <div className="CounterOutput">
      <p>
        Current Counter:
        {value}
      </p>
    </div>
  );
};

counterOutput.propTypes = {
  value: PropTypes.string.isRequired,
};
export default counterOutput;
