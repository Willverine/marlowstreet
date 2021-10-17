import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { fetchWeek } from '../../models/week';
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
    if (!id) return;

    // eslint-disable-next-line no-console
    fetchWeek(id).then((fetchedWeek) => setWeek(fetchedWeek)).catch((err) => console.error(err));
  }, [id]);

  if (!week) return <div>Loading your week</div>;

  return (
    <WeekDiv>
      <Title>Week Page</Title>
      <WeekDetails week={week} />
    </WeekDiv>
  );
};
