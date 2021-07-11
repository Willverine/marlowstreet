import { render, screen } from '@testing-library/react';
import { Player } from './Player';

test('renders hello', () => {
  render(<Player match={{ params: { id: '' } }} />);
  const linkElement = screen.getByText(/player/i);
  expect(linkElement).toBeInTheDocument();
});
