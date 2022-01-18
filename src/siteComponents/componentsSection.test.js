import Components from './Components';
import { render, screen, fireEvent, createEvent } from '@testing-library/react';

describe('Components section', () => {
  test('Welcome text', () => {
    render(<Components />);
    expect(screen.getByText('Horizontal Progress')).toBeInTheDocument();
  });

  test('section links render', () => {
    render(<Components />);
    expect(screen.getByTestId('Progress')).toBeInTheDocument();
    expect(screen.getByTestId('DataDisplay')).toBeInTheDocument();
  });

  test('section renders on click', () => {
    render(<Components />);
    const toggle = screen.getByTestId('DataDisplay');
    const myEvent = createEvent.click(toggle, { button: 0 });
    fireEvent(toggle, myEvent);
    expect(toggle.style.color).toEqual('rgb(80, 70, 229)');
    expect(screen.getByText('Data Display x3')).toBeInTheDocument();
    expect(screen.queryAllByText('Horizontal Progress')).toHaveLength(0);
  });
});
