import { render, screen } from '@testing-library/react';
import { Player } from '../../models';
import { PlayerDetails } from './Details';

test('renders the player details', () => {
  const playerMock: Player = {
    firstName: 'bob',
    lastName: 'jones',
    dob: new Date().toDateString(),
    id: '123abc',
    email: '123@asdf.com',
    mobileNumber: '0412312312',
  };

  render(<PlayerDetails player={playerMock} />);
  const linkElement = screen.getByText(/bob jones/i);
  expect(linkElement).toBeInTheDocument();
});
