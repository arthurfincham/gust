import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App components render', () => {
  test('Welcome text', () => {
    render(<App />);
    expect(screen.getByText('React and Tailwind CSS')).toBeInTheDocument();
  });

  test('Navbar', () => {
    render(<App />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  test('App preview banner', () => {
    render(<App />);
    expect(screen.getByTestId('desktopAppBanner')).toBeInTheDocument();
  });
});
