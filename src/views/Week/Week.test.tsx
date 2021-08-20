import { render, screen } from '@testing-library/react';
import {
  Game, Player, Season, Team, Week,
} from '../../models';
import { WeekDetails } from './Details';

test('renders the team details', () => {
  const gameMock: Game = {
    id: '54321',
    time: '2021-08-20T03:46:06.949Z',
    team1: {
      name: 'firstTeam',
    } as Team,
    team2: {
      name: 'secondTeam',
    } as Team,
    team1Score: 10,
    team2Score: 8,
    team1SpiritScore: 1,
    team2SpiritScore: 2,
    team1mvp: {} as Player,
    team2mvp: {} as Player,
  };

  const weekMock: Week = {
    id: '12345',
    day: '10-10-1990',
    games: [gameMock],
    season: {
      id: 'the-season-id',
    } as Season,
  };

  render(<WeekDetails week={weekMock} />);
  const weeKID = screen.getByText(/12345/i);
  const gameID = screen.getByText(/54321/i);
  const team1 = screen.getByText(/firstTeam: 10/i);
  const team2 = screen.getByText(/secondTeam: 8/i);

  expect(weeKID).toBeInTheDocument();
  expect(gameID).toBeInTheDocument();
  expect(team1).toBeInTheDocument();
  expect(team2).toBeInTheDocument();
});
