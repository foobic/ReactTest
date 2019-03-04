import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ test }) => {
  return (
    <div>
      Home page.
      {test}
    </div>
  );
};

Home.propTypes = {
  test: PropTypes.string,
};

export default Home;
