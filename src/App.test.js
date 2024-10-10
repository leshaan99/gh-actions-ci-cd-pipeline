import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Counter heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Counter App/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders initial count value as 0', () => {
  render(<App />);
  const countElement = screen.getByTestId('count-value');
  expect(countElement).toHaveTextContent('0');
});

test('increments count when Increment button is clicked', () => {
  render(<App />);
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId('count-value');
  expect(countElement).toHaveTextContent('1');
});

test('decrements count when Decrement button is clicked', () => {
  render(<App />);
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId('count-value');
  expect(countElement).toHaveTextContent('-1');
});

test('decrement button is disabled at 0', () => {
  render(<App />);
  const decrementButton = screen.getByText(/Decrement/i);
  expect(decrementButton).toBeDisabled();
});
