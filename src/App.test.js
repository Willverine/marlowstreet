import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello', () => {
  render(<App />);
  const linkElement = screen.getByText(/player/i);
  expect(linkElement).toBeInTheDocument();
});
