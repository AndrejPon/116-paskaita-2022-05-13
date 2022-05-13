import React from 'react';
import Content from './Content';

export default {
  title: 'Content',
  component: Content,
};

export const Default = () => (
  <Content title='Page title' content='Some content' />
);
