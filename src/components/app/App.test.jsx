import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('tests the behavior of App component', () => {
    render(<App/>);
    const display = screen.getByTestId('display');

    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: '#00FF00' } });
    fireEvent.change(input, { target: { value: '#0000FF' } });
    expect(display).toHaveStyle({ backgroundColor: '#0000FF' });

    const undo = screen.getByText('undo');
    fireEvent.click(undo);
    expect(display).toHaveStyle({ backgroundColor: '#00FF00' });

    const redo = screen.getByText('redo');
    fireEvent.click(redo);
    expect(display).toHaveStyle({ backgroundColor: '#0000FF' });

  });
});
