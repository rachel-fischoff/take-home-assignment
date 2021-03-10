import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders h1 element', () => {
  render(<App />);
  expect(screen.getByTestId('header')).toHaveTextContent('Career Lab | Take-Home Assignment');
});