import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { GetSeasonQuery, GetSeasonQueryVariables } from '../../API';
import { callGraphQL } from '../../graphql/callGraphQl';
import { getSeason } from '../../graphql/queries';
import { mapGetSeasonQuery } from '../../models/season';
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
    async function fetchData() {
      const apiData = await callGraphQL<GetSeasonQuery>(getSeason, {
        variables: {
          id,
        } as GetSeasonQueryVariables,
      });

      const fetchSeason = mapGetSeasonQuery(apiData);

      if (!fetchSeason) return;

      setSeason(fetchSeason);
    }

    fetchData();
  }, [id]);

  if (!season) return <div>Loading your season</div>;

  return (
    <SeasonDiv>
      <Title>Season Page</Title>
      <SeasonDetails season={season} />
    </SeasonDiv>
  );
};
