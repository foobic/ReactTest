/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import './CounterControl.css';

const counterControl = props => {
  const { label, clicked } = props;
  return (
    <div className="CounterControl" onClick={clicked}>
      {label}
    </div>
  );
};

counterControl.propTypes = {
  label: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};
export default counterControl;
