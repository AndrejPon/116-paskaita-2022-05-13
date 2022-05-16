import React from 'react';
import Notification from './Notification';

export default {
  title: 'Notification',
  component: Notification,
};

export const Default = () => (
  <Notification
    handleClose={() => {
      //
    }}
  >
    lorem ipsum...
  </Notification>
);
