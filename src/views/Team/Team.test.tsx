import { render, screen } from '@testing-library/react';
import { Player, Team } from '../../models';
import { TeamDetails } from './Details';

test('renders the team details', () => {
  const teamMock: Team = {
    name: 'Ronald McDonald Fun House',
    colour: 'red',
    captain: {
      id: '12345',
      firstName: 'Grimace',
      lastName: 'McDonaldland',
      email: 'Grimace@McDonaldland.com',
      dob: '10-10-1990',
      mobileNumber: '0412312312',
    } as Player,
    players: [
      {
        id: '12345',
        firstName: 'Tam',
        lastName: 'Jaxon',
        email: 'test@gmail.com',
        dob: '10-10-1990',
        mobileNumber: '0412312312',
      } as Player,
      {
        id: '123456',
        firstName: 'Jez',
        lastName: 'Gumbo',
        email: 'jez@Gumbo.com',
        dob: '10-10-1990',
        mobileNumber: '0412312312',
      } as Player,
    ],
    id: '123abc',
  };

  render(<TeamDetails team={teamMock} />);
  const linkElement = screen.getByText(/Ronald McDonald Fun House/i);
  const linkElement2 = screen.getByText(/Grimace McDonald/i); // captain
  const linkElement3 = screen.getByText(/Tam Jaxon/i); // can list players:
  const linkElement4 = screen.getByText(/Jez Gumbo/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
  expect(linkElement4).toBeInTheDocument();
});
