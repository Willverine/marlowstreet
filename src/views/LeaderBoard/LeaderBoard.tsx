/* eslint-disable max-len */
/* eslint-disable no-console */
import {
  useEffect, useState,
} from 'react';
import { Game, Team, Week } from '../../models';
import { fetchSeasons } from '../../models/season';
import { fetchWeek } from '../../models/week';
import {
  Title,
} from './LeaderBoard.styles';

interface TeamRenderer {
  team: Team;
  wins: Game[];
  losses: Game[];
  draws: Game[];
}

export const LeaderBoard = () => {
  const [loading, setLoading] = useState(true);
  const [teamRender, setTeamRender] = useState<TeamRenderer[]>();

  useEffect(() => {
    fetchSeasons().then((seasonList) => {
      // fetch most recent season:
      seasonList.sort((season1, season2) => (season1.startDate < season2.startDate ? 1 : -1));

      if (seasonList.length <= 0 || !seasonList[0].weeks) {
        console.error('Season list returns no results');
        return;
      }

      // fetch all weeks in the current season
      const { weeks } = seasonList[0];

      if (!weeks || weeks.length <= 0) {
        console.error('No weeks returned');
        return;
      }

      const realWeeksList = weeks.map((week) => week && fetchWeek(week?.id)).filter((promise): promise is Promise<Week> => (!!promise));

      Promise.all(realWeeksList).then((realWeeks) => {
        // fetch all games in all the weeks
        const games = realWeeks.map((week) => (week?.games)).flat();

        // assume all weeks have the same teams:
        const teams = realWeeks[0] ? realWeeks[0].games?.map((game) => ([game?.team1, game?.team2])).flat() : [];
        const teamStats = teams?.map((team) => {
          const wins = games.filter((game): game is Game => {
            if (!game) return false;

            if (game?.team1?.id === team?.id && game?.team1Score > game?.team2Score) {
              return true;
            }

            if (game?.team2?.id === team?.id && game?.team2Score > game?.team1Score) {
              return true;
            }

            return false;
          });

          const losses = games.filter((game): game is Game => {
            if (!game) return false;

            if (game?.team1?.id === team?.id && game?.team1Score < game?.team2Score) {
              return true;
            }

            if (game?.team2?.id === team?.id && game?.team2Score < game?.team1Score) {
              return true;
            }

            return false;
          });

          const draws = games.filter((game): game is Game => {
            if (!game) return false;

            if (game?.team1?.id === team?.id && game?.team1Score === game?.team2Score) {
              return true;
            }

            if (game?.team2?.id === team?.id && game?.team2Score === game?.team1Score) {
              return true;
            }

            return false;
          });

          return {
            team,
            wins,
            losses,
            draws,
          };
        }).filter((team): team is TeamRenderer => (!!team.team));

        setTeamRender(teamStats);
        setLoading(false);
      });
    });
  }, []);

  if (loading) {
    return (
      <>
        Loading...
      </>
    );
  }

  return (
    <>
      <Title>Leader Board</Title>
      <p>Name : Wins : losses : draws</p>
      <ul>
        {teamRender?.map((team) => (
          <li>
            {team.team.name}
            {' '}
            {team.wins.length}
            {' '}
            {team.losses.length}
            {' '}
            {team.draws.length}
          </li>
        ))}
      </ul>
    </>
  );
};
