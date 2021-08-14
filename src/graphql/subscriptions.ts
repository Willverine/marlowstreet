/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSeason = /* GraphQL */ `
  subscription OnCreateSeason {
    onCreateSeason {
      id
      name
      startDate
      endDate
      weeks {
        items {
          id
          day
          games {
            nextToken
          }
          seasonID
          season {
            id
            name
            startDate
            endDate
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSeason = /* GraphQL */ `
  subscription OnUpdateSeason {
    onUpdateSeason {
      id
      name
      startDate
      endDate
      weeks {
        items {
          id
          day
          games {
            nextToken
          }
          seasonID
          season {
            id
            name
            startDate
            endDate
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSeason = /* GraphQL */ `
  subscription OnDeleteSeason {
    onDeleteSeason {
      id
      name
      startDate
      endDate
      weeks {
        items {
          id
          day
          games {
            nextToken
          }
          seasonID
          season {
            id
            name
            startDate
            endDate
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWeek = /* GraphQL */ `
  subscription OnCreateWeek {
    onCreateWeek {
      id
      day
      games {
        items {
          id
          time
          team1 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team2 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team1Score
          team2Score
          team1SpiritScore
          team2SpiritScore
          team1mvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team2mvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          weekID
          week {
            id
            day
            seasonID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      seasonID
      season {
        id
        name
        startDate
        endDate
        weeks {
          items {
            id
            day
            seasonID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWeek = /* GraphQL */ `
  subscription OnUpdateWeek {
    onUpdateWeek {
      id
      day
      games {
        items {
          id
          time
          team1 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team2 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team1Score
          team2Score
          team1SpiritScore
          team2SpiritScore
          team1mvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team2mvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          weekID
          week {
            id
            day
            seasonID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      seasonID
      season {
        id
        name
        startDate
        endDate
        weeks {
          items {
            id
            day
            seasonID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWeek = /* GraphQL */ `
  subscription OnDeleteWeek {
    onDeleteWeek {
      id
      day
      games {
        items {
          id
          time
          team1 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team2 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team1Score
          team2Score
          team1SpiritScore
          team2SpiritScore
          team1mvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team2mvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          weekID
          week {
            id
            day
            seasonID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      seasonID
      season {
        id
        name
        startDate
        endDate
        weeks {
          items {
            id
            day
            seasonID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      time
      team1 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team2 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team1Score
      team2Score
      team1SpiritScore
      team2SpiritScore
      team1mvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team2mvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      weekID
      week {
        id
        day
        games {
          items {
            id
            time
            team1Score
            team2Score
            team1SpiritScore
            team2SpiritScore
            weekID
            createdAt
            updatedAt
          }
          nextToken
        }
        seasonID
        season {
          id
          name
          startDate
          endDate
          weeks {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      time
      team1 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team2 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team1Score
      team2Score
      team1SpiritScore
      team2SpiritScore
      team1mvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team2mvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      weekID
      week {
        id
        day
        games {
          items {
            id
            time
            team1Score
            team2Score
            team1SpiritScore
            team2SpiritScore
            weekID
            createdAt
            updatedAt
          }
          nextToken
        }
        seasonID
        season {
          id
          name
          startDate
          endDate
          weeks {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      time
      team1 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team2 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team1Score
      team2Score
      team1SpiritScore
      team2SpiritScore
      team1mvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team2mvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      weekID
      week {
        id
        day
        games {
          items {
            id
            time
            team1Score
            team2Score
            team1SpiritScore
            team2SpiritScore
            weekID
            createdAt
            updatedAt
          }
          nextToken
        }
        seasonID
        season {
          id
          name
          startDate
          endDate
          weeks {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      captain {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      colour
      name
      players {
        items {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      captain {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      colour
      name
      players {
        items {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      captain {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      colour
      name
      players {
        items {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      firstName
      lastName
      dob
      mobileNumber
      email
      teamID
      team {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      firstName
      lastName
      dob
      mobileNumber
      email
      teamID
      team {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      firstName
      lastName
      dob
      mobileNumber
      email
      teamID
      team {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
