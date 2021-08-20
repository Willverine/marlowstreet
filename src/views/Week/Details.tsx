import { Week } from '../../models';
import { Id, Details } from './Week.styles';

interface Props {
  week: Week
}

export const WeekDetails = ({ week }: Props) => (
  <>
    <Id>
      ID:
      {' '}
      {week.id}
    </Id>
    <Details>
      Day:
      {' '}
      {week.day}
    </Details>
    <Details>
      Season ID:
      {' '}
      {week.season?.id}
    </Details>
    Games:
    {' '}
    <ol>
      {week.games?.map((game) => (
        <li key={game?.id}>
          <a href={`/game/${game?.id}`}>
            Game ID:
            {' '}
            {game?.id}
          </a>
          <p>
            {game?.team1.name}
            :
            {' '}
            {game?.team1Score}
          </p>
          <p>
            {game?.team2.name}
            :
            {' '}
            {game?.team2Score}
          </p>
        </li>
      ))}
    </ol>
  </>
);
