import { render, screen } from '@testing-library/react';
import { Season } from '../../models';
import { SeasonDetails } from './Details';

test('renders the season details', () => {
  const seasonMock: Season = {
    id: '123abc',
    name: 'Season1',
    startDate: '2021-06-21',
    endDate: '2021-06-20',
  };

  render(<SeasonDetails season={seasonMock} />);
  const seasonID = screen.getByText(/123abc/i);
  const seasonName = screen.getByText(/Season1/i);
  const seasonDate = screen.getByText(/2021-06-20/i);
  expect(seasonID).toBeInTheDocument();
  expect(seasonName).toBeInTheDocument();
  expect(seasonDate).toBeInTheDocument();
});
