import { render, screen } from '@testing-library/react';
import { Game, Player, Team } from '../../models';
import { GameDetails } from './Details';

test('renders the team details', () => {
  const player1: Player = {
    id: '12345',
    firstName: 'Tam',
    lastName: 'Jaxon',
    email: 'test@gmail.com',
    dob: '10-10-1990',
    mobileNumber: '0412312312',
  };

  const player2: Player = {
    id: '123456',
    firstName: 'Jez',
    lastName: 'Gumbo',
    email: 'jez@Gumbo.com',
    dob: '10-10-1990',
    mobileNumber: '0412312312',
  };

  const teamOne: Team = {
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
      player1,
      player2,
    ],
    id: '123abc',
  };
  const teamTwo: Team = {
    name: 'SomeOtherName',
    colour: 'blue',
    captain: {
      id: '12345',
      firstName: 'someone',
      lastName: 'else',
      email: 'hello@bananas.com',
      dob: '10-10-1990',
      mobileNumber: '0412312312',
    } as Player,
    players: [
      player1,
      player2,
    ],
    id: '123abc',
  };

  const gameMock: Game = {
    id: '12345',
    time: '2021-08-20T03:46:06.949Z',
    team1: teamOne,
    team2: teamTwo,
    team1Score: 10,
    team2Score: 8,
    team1SpiritScore: 1,
    team2SpiritScore: 2,
    team1mvp: player1,
    team2mvp: player2,
  };

  render(<GameDetails game={gameMock} />);
  const team1Name = screen.getByText(/Ronald McDonald Fun House/i);
  const team2Name = screen.getByText(/SomeOtherName/i);
  const team1Score = screen.getByText(/10/i);
  const team2Score = screen.getByText(/Team 2 Score:8/i);
  const team1SpiritScore = screen.getByText(/Team 1 Spirit score:1/i);
  const team2SpiritScore = screen.getByText(/Team 2 Spirit score:2/i);

  expect(team1Name).toBeInTheDocument();
  expect(team2Name).toBeInTheDocument();
  expect(team1Score).toBeInTheDocument();
  expect(team2Score).toBeInTheDocument();
  expect(team1SpiritScore).toBeInTheDocument();
  expect(team2SpiritScore).toBeInTheDocument();
});
