import { Season } from '../../models';
import { Id, Details } from './Season.styles';

interface Props {
  season: Season
}

export const SeasonDetails = ({ season }: Props) => (
  <>
    <Id>
      ID:
      {' '}
      {season.id}
    </Id>
    <Details>
      Name:
      {' '}
      {season.name}
    </Details>
    <Details>
      start Date:
      {' '}
      {season.startDate}
    </Details>
    <Details>
      end Date:
      {' '}
      {season.endDate}
    </Details>
    <ol>
      {season.weeks?.map((week) => (
        <li key={week?.id}>
          <a href={`/week/${week?.id}`}>
            WeekID:
            {' '}
            {week?.id}
          </a>
          <br />
          Date:
          {' '}
          {new Date(week?.day || '').toLocaleDateString()}
        </li>
      ))}
    </ol>
  </>
);
