import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the rising gurkhas header', () => {
    render(<App />);
    const headerElements = screen.getAllByText(/THE RISING GURKHAS/i);
    expect(headerElements.length).toBeGreaterThan(0);
  });
});
