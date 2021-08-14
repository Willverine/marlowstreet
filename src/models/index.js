// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const {
  Season, Week, Game, Team, Player,
} = initSchema(schema);

export {
  Season,
  Week,
  Game,
  Team,
  Player,
};
