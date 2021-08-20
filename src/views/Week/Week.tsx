import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { GetWeekQuery, GetWeekQueryVariables } from '../../API';
import { callGraphQL } from '../../graphql/callGraphQl';
import { getWeek } from '../../graphql/queries';
import { mapGetWeekQuery } from '../../models/week';
import { Week as WeekModel } from '../../models';
import { WeekDetails } from './Details';
import { Week as WeekDiv, Title } from './Week.styles';

type RouteParams = {
  id: string | undefined;
};

export const Week = ({ match }: RouteComponentProps<RouteParams>) => {
  const { id } = match.params;
  const [week, setWeek] = useState<WeekModel>();

  useEffect(() => {
    async function fetchData() {
      const apiData = await callGraphQL<GetWeekQuery>(getWeek, {
        variables: {
          id,
        } as GetWeekQueryVariables,
      });

      const fetchTeam = mapGetWeekQuery(apiData);

      if (!fetchTeam) return;

      setWeek(fetchTeam);
    }

    fetchData();
  }, [id]);

  if (!week) return <div>Loading your week</div>;

  return (
    <WeekDiv>
      <Title>Week Page</Title>
      <WeekDetails week={week} />
    </WeekDiv>
  );
};
