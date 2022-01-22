import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

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

  // test('clears if a correct name is entered', () => {
  //   const { input } = setup();
  //   fireEvent.change(input, { target: { value: 'France' } });
  //   expect(input.value).toBe('');
  // });

  // test('changes the color of the svg path', () => {
  //   const { input } = setup();
  //   const spainPath = screen.getByTitle('Spain');
  //   fireEvent.change(input, { target: { value: 'Spain' } });
  //   expect(spainPath.style.fill).toEqual('#FA8F02');
  // });
});
