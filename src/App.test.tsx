import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the rising gurkhas header', () => {
  render(<App />);
  const headerElements = screen.getAllByText(/THE RISING GURKHAS/i);
  expect(headerElements.length).toBeGreaterThan(0);
});
