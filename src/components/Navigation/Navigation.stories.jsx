import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
};

export const Default = () => (
  <Navigation
    links={[
      { title: 'Login', link: '/' },
      { title: 'Register', link: '/' },
    ]}
  />
);
