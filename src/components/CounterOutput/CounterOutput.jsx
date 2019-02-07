import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';

import './CounterOutput.css';

const counterOutput = props => {
  const { value } = props;
  return (
    <div className="CounterOutput">
      <Router>
        <div>
          <Link to="/home">Home</Link>
          <Route exact path="/home" component={Home} />
        </div>
      </Router>
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
