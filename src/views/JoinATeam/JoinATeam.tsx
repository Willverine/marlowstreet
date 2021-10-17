import { useEffect, useMemo, useState } from 'react';
import { fetchTeams } from '../../models/team';
import { Player, Team } from '../../models';
import { Team as TeamDiv, Title } from '../Team/Team.styles';
import {
  addPlayerToTeam, getCurrentUserPlayer,
} from '../../models/player';

export const JoinATeam = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [player, setPlayer] = useState<Player>();

  useMemo(() => {
    getCurrentUserPlayer().then((fetchedPlayer) => setPlayer(fetchedPlayer));
  }, []);

  const joinTeam = (teamId: string) => {
    if (!player) return;

    addPlayerToTeam(player.id, teamId).then(() => {
      window.location.href = `/team/${teamId}`;
    });
  };

  useEffect(() => {
    fetchTeams().then((teamList) => setTeams(teamList));
  }, []);

  return (
    <TeamDiv>
      <Title>Join a Team!</Title>
      <p>This is a list of all the teams:</p>
      <ol>
        {teams.length <= 0 ? <>Loading ...</> : teams?.map((team) => (
          <li key={team.id}>
            Team name:
            {team.name}
            +
            {team.id}
            <button type="button" onClick={() => joinTeam(team.id)}>
              Join this team
            </button>
          </li>
        ))}
      </ol>
    </TeamDiv>
  );
};
