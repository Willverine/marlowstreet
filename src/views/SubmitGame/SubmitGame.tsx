/* eslint-disable max-len */
/* eslint-disable no-console */
import { useMemo, useRef, useState } from 'react';
import { Player, Game } from '../../models';
import { getCurrentUserPlayer } from '../../models/player';
import { fetchSeasons } from '../../models/season';

export const SubmitGame = () => {
  const team1Score = useRef<HTMLInputElement>(null);
  const team1SpiritScore = useRef<HTMLInputElement>(null);
  const team1SpiritComments = useRef<HTMLInputElement>(null);
  const team1FemaleMvp = useRef<HTMLInputElement>(null);
  const team1MaleMvp = useRef<HTMLInputElement>(null);
  const team2FemaleMvp = useRef<HTMLInputElement>(null);
  const team2MaleMvp = useRef<HTMLInputElement>(null);
  const [player, setPlayer] = useState<Player>();
  const [game, setGame] = useState<Game>();

  useMemo(() => {
    getCurrentUserPlayer().then((fetchedPlayer) => setPlayer(fetchedPlayer));
    fetchSeasons().then((seasonList) => {
      // fetch most recent season:
      seasonList.sort((season1, season2) => (season1.startDate > season2.startDate ? 1 : -1));

      if (seasonList.length <= 0 || !seasonList[0].weeks) return;
      // fetch most recent weeks
      const thisSeasonsWeeks = seasonList[0].weeks;

      if (thisSeasonsWeeks?.length <= 0) return;

      thisSeasonsWeeks?.sort((week1, week2) => ((week1?.day || 1) > (week2?.day || 0) ? 1 : -1));
      // get the CURRENT week (assume rostering didn't create the following week game yet)
      const thisWeek = thisSeasonsWeeks[0];

      // assume rostering created the games for this week already
      const thisGame = thisWeek?.games?.find(
        (fetchedGame) => fetchedGame?.team1?.id === player?.team?.id
          || fetchedGame?.team2.id === player?.team?.id,
      );

      if (!thisGame) {
        console.error('this should never happen. Looks like no game exists for this week, or the user has no team.');
        console.error(thisWeek?.id);
        console.error(player?.id);
        return;
      }

      // at this point thisGame should be the game to submit scores for.
      setGame(thisGame);
    });
  }, []);

  const submitGame = () => {
    if (!game) { return; }
    if (!player) { return; }

    if (game.team1.id === player.team?.id) {
      // let thisGame: Game = {
      //   ...game,
      //   team1Score: parseInt(team1Score?.current?.value || '0', 10),
      //   team1SpiritScore: parseInt(team1SpiritScore?.current?.value || '0', 10),
      //   team1SpiritComments: team1SpiritComments?.current?.value || '',
      //   team2FemaleMvp: game.team2?.players.find((teamPlayer) => teamPlayer?.id === team1FemaleMvp?.current?.value || ''),
      //   team2MaleMvp: team1MaleMvp?.current?.value || '',
      // };
    }
  };

  if (!player?.team) {
    return (
      <div>
        select your team:
        team
      </div>
    );
  }

  return (
    <>
      <form>
        <input type="text" placeholder="Your Teams Score" ref={team1Score} />
        <input type="text" placeholder="Your Teams Score" ref={team1SpiritScore} />
        <input type="text" placeholder="Your Teams Score" ref={team1SpiritComments} />
        <input type="option" placeholder="Your Teams Score" ref={team1FemaleMvp} />
        <input type="text" placeholder="Your Teams Score" ref={team1MaleMvp} />
        <input type="text" placeholder="Your Teams Score" ref={team2FemaleMvp} />
        <input type="text" placeholder="Your Teams Score" ref={team2MaleMvp} />
      </form>
    </>
  );
};
