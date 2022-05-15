import React from 'react';

const Spacing = ({ padding, margin, children }) => {
  return <div style={{ padding, margin }}>{children}</div>;
};

export default Spacing;
