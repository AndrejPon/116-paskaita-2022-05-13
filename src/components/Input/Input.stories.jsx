import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Text = () => (
  <Input label='Name' name='name' type='text' placeholder='Text...' />
);

export const Email = () => (
  <Input
    label='Email'
    name='email'
    type='email'
    placeholder='email@email.com'
  />
);

export const Number = () => (
  <Input label='Number' name='num' type='number' placeholder='123' />
);

export const Password = () => (
  <Input label='Password' name='pass' type='password' placeholder='Password' />
);
