import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Season {
  readonly id: string;
  readonly name: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly weeks?: (Week | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Season>);
  static copyOf(source: Season, mutator: (draft: MutableModel<Season>) => MutableModel<Season> | void): Season;
}

export declare class Week {
  readonly id: string;
  readonly day: string;
  readonly games?: (Game | null)[];
  readonly season?: Season;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Week>);
  static copyOf(source: Week, mutator: (draft: MutableModel<Week>) => MutableModel<Week> | void): Week;
}

export declare class Game {
  readonly id: string;
  readonly time: string;
  readonly team1: Team;
  readonly team2: Team;
  readonly team1Score: number;
  readonly team2Score: number;
  readonly team1SpiritScore: number;
  readonly team2SpiritScore: number;
  readonly team1mvp?: Player;
  readonly team2mvp?: Player;
  readonly week?: Week;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Game>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}

export declare class Team {
  readonly id: string;
  readonly captain?: Player;
  readonly colour: string;
  readonly name: string;
  readonly players?: (Player | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Team>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

export declare class Player {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly dob: string;
  readonly mobileNumber: string;
  readonly email: string;
  readonly team?: Team;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Player>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}