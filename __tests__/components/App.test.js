import React from 'react';
import { render, screen } from '@testing-library/react';

test('hello jest', () => {
  render(<p>Hello Jest!</p>);
  expect(screen.getByText('Hello Jest!')).toBeInTheDocument();
});
