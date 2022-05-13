import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders and matches snapshot successfully', () => {
    const view = render(<Button>text</Button>);
    expect(view).toMatchSnapshot();
  });

  it('executes function onclick successfully', () => {
    const mockfn = jest.fn();
    render(<Button handleClick={mockfn}>text</Button>);
    fireEvent(screen.getByText('text'));

    expect(mockfn).toBeCalled();
  });
});
