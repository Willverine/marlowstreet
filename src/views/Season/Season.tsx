/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { fetchSeason } from '../../models/season';
import { Season as SeasonModel } from '../../models';
import { SeasonDetails } from './Details';
import { Season as SeasonDiv, Title } from './Season.styles';

type RouteParams = {
  id: string | undefined;
};

export const Season = ({ match }: RouteComponentProps<RouteParams>) => {
  const { id } = match.params;
  const [season, setSeason] = useState<SeasonModel>();

  useEffect(() => {
    if (!id) return;

    fetchSeason(id)
      .then((fetchedSeason) => setSeason(fetchedSeason))
      .catch((err) => console.error(err));
  }, [id]);

  if (!season) return <div>Loading your season</div>;

  return (
    <SeasonDiv>
      <Title>Season Page</Title>
      <SeasonDetails season={season} />
    </SeasonDiv>
  );
};
