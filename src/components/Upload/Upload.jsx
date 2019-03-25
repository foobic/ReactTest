import React from 'react';
import PropTypes from 'prop-types';

const Upload = ({ test }) => {
  return (
    <div>
      Upload {test}
    </div>
  );
};

Upload.propTypes = {
  test: PropTypes.string,
};

export default Upload;
