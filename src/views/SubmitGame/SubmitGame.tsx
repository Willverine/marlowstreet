/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-console */
import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import { UpdateGameInput } from '../../API';
import { Team, Player, Game } from '../../models';
import { updateGameMutation } from '../../models/game';
import { getCurrentUserPlayer } from '../../models/player';
import { fetchSeasons } from '../../models/season';
import { fetchTeam } from '../../models/team';
import { fetchWeek } from '../../models/week';
import {
  Form, Label, ScoreInput, ScoreSelect, Select, SubmitButton, TextArea, Title,
} from './SubmitGame.styles';

export const SubmitGame = () => {
  const team1Score = useRef<HTMLInputElement>(null);
  const team2Score = useRef<HTMLInputElement>(null);
  const team1SpiritScore = useRef<HTMLSelectElement>(null);
  const team2SpiritScore = useRef<HTMLSelectElement>(null);
  const team1SpiritComments = useRef<HTMLInputElement>(null);
  const team2SpiritComments = useRef<HTMLInputElement>(null);
  const team1FemaleMvp = useRef<HTMLSelectElement>(null);
  const team1MaleMvp = useRef<HTMLSelectElement>(null);
  const team2FemaleMvp = useRef<HTMLSelectElement>(null);
  const team2MaleMvp = useRef<HTMLSelectElement>(null);
  const [player, setPlayer] = useState<Player>();
  const [game, setGame] = useState<Game>();
  const [team1, setTeam1] = useState<Team>();
  const [team2, setTeam2] = useState<Team>();

  useMemo(() => {
    getCurrentUserPlayer().then((fetchedPlayer) => {
      setPlayer(fetchedPlayer);
    });
  }, []);

  useEffect(() => {
    if (!player) return;

    fetchSeasons().then((seasonList) => {
      // fetch most recent season:
      seasonList.sort((season1, season2) => (season1.startDate < season2.startDate ? 1 : -1));

      if (seasonList.length <= 0 || !seasonList[0].weeks) {
        console.error('Season list returns no results');
        return;
      }
      // fetch most recent weeks
      const thisSeasonsWeeks = seasonList[0].weeks;

      if (thisSeasonsWeeks?.length <= 0) {
        console.error('Season week is empty');
        return;
      }

      thisSeasonsWeeks?.sort((week1, week2) => ((week1?.day || 1) > (week2?.day || 0) ? 1 : -1));
      // get the CURRENT week (assume rostering didn't create the following week game yet)
      const thisWeek = thisSeasonsWeeks[0]; // a reducer could do this

      if (!thisWeek) {
        console.error('No weeks were returned');
        return;
      }

      // assume rostering created the games for this week already
      fetchWeek(thisWeek?.id).then((week) => {
        const thisGame = week?.games?.find(
          (fetchedGame) => fetchedGame?.team1?.id === player?.team?.id
            || fetchedGame?.team2.id === player?.team?.id,
        );

        if (!thisGame) {
          console.error(
            'No game exists for this week, or the user has no team.',
          );
          console.error(thisWeek?.id);
          console.error(player?.team?.id);
          return;
        }

        fetchTeam(thisGame.team1.id).then((res) => setTeam1(res));
        fetchTeam(thisGame.team2.id).then((res) => setTeam2(res));

        // at this point thisGame should be the game to submit scores for.
        setGame(thisGame);
      }).catch((err) => console.log(err));
    });
  }, [player]);

  const submitGame = () => {
    if (!game) { return; }
    if (!player) { return; }

    if (game.team1.id === player.team?.id) {
      const thisGame: UpdateGameInput = {
        id: game.id,
        time: game.time,
        gameTeam1Id: team1?.id || null,
        team1Score: parseInt(team1Score?.current?.value || '0', 10),
        team1SpiritScore: parseInt(team1SpiritScore?.current?.value || '0', 10),
        team1SpiritComments: team1SpiritComments?.current?.value || '',
        gameTeam1FemaleMvpId: team1?.players?.find((teamPlayer) => teamPlayer?.id === team1FemaleMvp?.current?.value || '')?.id || null,
        gameTeam1MaleMvpId: team1?.players?.find((teamPlayer) => teamPlayer?.id === team1MaleMvp?.current?.value || '')?.id || null,
        gameTeam2Id: team2?.id || null,
        team2Score: parseInt(team2Score?.current?.value || '0', 10),
        team2SpiritScore: parseInt(team2SpiritScore?.current?.value || '0', 10),
        team2SpiritComments: team2SpiritComments?.current?.value || '',
        gameTeam2FemaleMvpId: team2?.players?.find((teamPlayer) => teamPlayer?.id === team2FemaleMvp?.current?.value || '')?.id || null,
        gameTeam2MaleMvpId: team2?.players?.find((teamPlayer) => teamPlayer?.id === team2MaleMvp?.current?.value || '')?.id || null,
      };

      updateGameMutation(thisGame).then((res) => console.log(res)).catch((err) => console.error(err));
    }
  };

  if (!game || !team1 || !team2) {
    return (
      <>
        Loading...
      </>
    );
  }

  if (!player?.team) {
    return (
      <div>
        You have not joined a team yet, please do so here:
        <a href="/join-a-team">Find and join a team</a>
      </div>
    );
  }

  return (
    <>
      <Form>
        <Title>Game submission form</Title>
        <Label aria-label="team1Score">
          {team1.name}
          &apos;s score:
        </Label>
        <ScoreInput id="team1Score" type="number" placeholder="Number of points scored" ref={team1Score} defaultValue={game.team1Score || 0} />
        <Label aria-label="team2Score">
          {team2.name}
          &apos;s score:
        </Label>
        <ScoreInput id="team2Score" type="number" placeholder="Number of points scored" ref={team2Score} defaultValue={game.team2Score || 0} />
        <Label aria-label="team1FemaleMVP">
          {team1.name}
          &apos;s female MVP
        </Label>
        <Select id="team1FemaleMVP" ref={team1FemaleMvp} defaultValue={game?.team1FemaleMvp?.id || 'none'}>
          <option value="none" disabled>-</option>
          {team1.players?.map((team1Player) => (
            <option key={team1Player?.id} value={team1Player?.id}>
              {team1Player?.firstName}
              {' '}
              {team1Player?.lastName}
            </option>
          ))}
        </Select>
        <Label aria-label="team1MaleMVP">
          {team1.name}
          &apos;s male MVP
        </Label>
        <Select id="team1MaleMVP" ref={team1MaleMvp} defaultValue={game?.team1MaleMvp?.id || 'none'}>
          <option value="none" disabled>-</option>
          {team1.players?.map((team1Player) => (
            <option key={team1Player?.id} value={team1Player?.id}>
              {team1Player?.firstName}
              {' '}
              {team1Player?.lastName}
            </option>
          ))}
        </Select>
        <Label aria-label="team2FemaleMVP">
          {team2.name}
          &apos;s female MVP
        </Label>
        <Select id="team2FemaleMVP" ref={team2FemaleMvp} defaultValue={game?.team2FemaleMvp?.id || 'none'}>
          <option value="none" disabled>-</option>
          {team2.players?.map((team2Player) => (
            <option key={team2Player?.id} value={team2Player?.id}>
              {team2Player?.firstName}
              {' '}
              {team2Player?.lastName}
            </option>
          ))}
        </Select>
        <Label aria-label="team2MaleMVP">
          {team2.name}
          &apos;s male MVP
        </Label>
        <Select id="team2MaleMVP" ref={team2MaleMvp} defaultValue={game?.team2MaleMvp?.id || 'none'}>
          <option value="none" disabled>-</option>
          {team2.players?.map((team2Player) => (
            <option key={team2Player?.id} value={team2Player?.id}>
              {team2Player?.firstName}
              {' '}
              {team2Player?.lastName}
            </option>
          ))}
        </Select>
        <Label aria-label="team1SpiritScore">
          {team1.name}
          &apos;s spirit score
        </Label>
        <ScoreSelect id="team1SpiritScore" ref={team1SpiritScore} defaultValue={game?.team1SpiritScore || 3}>
          <option value="none" disabled>-</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </ScoreSelect>
        {/* <ScoreInput id="team1SpiritScore" type="number" placeholder="3" ref={team1SpiritScore} defaultValue={game?.team1SpiritScore} min="1" max="5" /> */}
        <Label aria-label="team2SpiritScore">
          {team2.name}
          &apos;s spirit score
        </Label>
        {/* <ScoreInput id="team2SpiritScore" type="number" placeholder="3" ref={team2SpiritScore} defaultValue={game?.team2SpiritScore} min="1" max="5" /> */}
        <ScoreSelect id="team2SpiritScore" ref={team2SpiritScore} defaultValue={game?.team2SpiritScore || 3}>
          <option value="none" disabled>-</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </ScoreSelect>
        <Label aria-label="team1SpiritComments">
          {team1.name}
          &apos;s spirit comments
        </Label>
        <TextArea id="team1SpiritComments" type="text" placeholder="Any additional comments" defaultValue={game?.team1SpiritComments} ref={team1SpiritComments} maxLength={250} />
        <Label aria-label="team2SpiritComments">
          {team2.name}
          &apos;s spirit comments
        </Label>
        <TextArea id="team2SpiritComments" type="text" placeholder="Any additional comments" defaultValue={game?.team2SpiritComments} ref={team2SpiritComments} maxLength={250} />
        <SubmitButton type="button" onClick={submitGame} value="Submit Game Score Report">
          Submit Game Score Report
        </SubmitButton>
      </Form>
    </>
  );
};
