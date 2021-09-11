import { useEffect, useMemo, useState } from 'react';
import { Auth } from 'aws-amplify';
import { fetchTeams } from '../../models/team';
import { Player, Team } from '../../models';
import { Team as TeamDiv, Title } from '../Team/Team.styles';
import { fetchPlayer, updatePlayerMutation } from '../../models/player';
import { User } from '../Home';

export const JoinATeam = () => {
  const [teams, setTeams] = useState<Team[]>();
  const [player, setPlayer] = useState<Player>();

  useMemo(() => {
    Auth.currentUserInfo().then((authUser: User | undefined) => {
      if (!authUser) return;

      if (!authUser.username) return;

      fetchPlayer(authUser.username).then((fetchedPlayer) => {
        if (!fetchedPlayer) {
          return;
        }
        setPlayer(fetchedPlayer);
      });
    });
  }, []);

  const joinTeam = (teamId: string) => {
    if (!player) return;

    const newPlayer = { ...player };

    updatePlayerMutation(newPlayer, teamId);
  };

  useEffect(() => {
    fetchTeams().then((teamList) => setTeams(teamList));
  }, []);

  return (
    <TeamDiv>
      <Title>Join a Team!</Title>
      <p>This is a list of all the teams:</p>
      <ol>
        {teams?.map((team) => (
          <li key={team.id}>
            Team name:
            {team.name}
            +
            {team.id}
            <button type="button" onClick={() => joinTeam(team.id)}>Join this team</button>
          </li>
        ))}
      </ol>
    </TeamDiv>
  );
};
