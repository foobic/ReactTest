import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

const Loader = props => {
  const { active } = props;

  return <LoadingOverlay active={active} spinner text="Loading..." />;
};

export default Loader;
