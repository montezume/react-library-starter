import React from 'react';
import { render } from 'react-testing-library';
import Button from './Button';

describe('Button', () => {
  it('should pass `children`', () => {
    const { getByText } = render(<Button>Submit</Button>);
    const button = getByText('Submit');
    expect(button).toBeInTheDocument();
  });
  it('should have default type `submit`', () => {
    const { getByText } = render(<Button>Submit</Button>);
    const button = getByText('Submit');
    expect(button).toHaveAttribute('type', 'button');
  });
  it('should trigger passed onClick when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Submit</Button>);
    const button = getByText('Submit');
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
