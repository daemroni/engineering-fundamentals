import Counter from "../Counter";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Counter Component', () => {
  test('renders with initial count of 0', () => {
    render(<Counter />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('count is 0');
  });

  test('increments count when button is clicked', () => {
    render(<Counter />);
    
    const button = screen.getByRole('button');
    
    // Initial state
    expect(button).toHaveTextContent('count is 0');
    
    // Click once
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
    
    // Click again
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });

  test('increments count multiple times correctly', () => {
    render(<Counter />);
    
    const button = screen.getByRole('button');
    
    // Click 5 times
    for (let i = 0; i < 5; i++) {
      fireEvent.click(button);
    }
    
    expect(button).toHaveTextContent('count is 5');
  });

  test('has correct CSS class on container', () => {
    render(<Counter />);
    
    const container = screen.getByRole('button').parentElement;
    expect(container).toHaveClass('card');
  });
});