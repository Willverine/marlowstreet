import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import {
  AmplifySignOut, AmplifyAuthenticator, AmplifyAuthContainer, AmplifySignUp,
} from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import { v4 } from 'uuid';
import { Home } from './views/Home';
import { Team as TeamView } from './views/Team/Team';
import { Player as PlayerView } from './views/Player/Player';
import { Game as GameView } from './views/Game/Game';
import { Week as WeekView } from './views/Week/Week';
import { Season as SeasonView } from './views/Season/Season';
import { Admin } from './views/Admin';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

Auth.configure(awsConfig);

const randomUUID = v4();

export const App = () => (
  <AmplifyAuthContainer>
    <AmplifyAuthenticator usernameAlias="email">
      <Router>
        <div className="App">
          <AmplifySignOut style={{ backgroundColor: 'blue' }} />
          <Link to="/team/1">First team</Link>
          <Link to="/player/8d0ccd7b-64ac-4279-9f5d-d3ee4511bcab">
            First player
          </Link>
        </div>
        <Route path="/admin" exact component={Admin} />
        <Route path="/" exact component={Home} />
        <Route path="/team/:id" component={TeamView} />
        <Route path="/player/:id" component={PlayerView} />
        <Route path="/game/:id" component={GameView} />
        <Route path="/week/:id" component={WeekView} />
        <Route path="/season/:id" component={SeasonView} />
      </Router>
      <AmplifySignUp
        slot="sign-up"
        headerText="Sign up to Marlow Street Ultimate"
        usernameAlias="email"
        formFields={[
          {
            type: 'email',
            label: 'Your Email',
            placeholder: 'E.g elon@musk.com',
            required: true,
          },
          {
            type: 'password',
            label: 'Your Password',
            placeholder: 'YourPassword',
            inputProps: { required: true, autocomplete: 'new-password' },
            required: true,
          },
          {
            type: 'given_name',
            label: 'Your First Name',
            placeholder: 'Elon',
            required: true,
          },
          {
            type: 'family_name',
            label: 'Your Last Name',
            placeholder: 'Musk',
            required: true,
          },
          {
            type: 'phone_number',
            label: 'Your Mobile Number',
            placeholder: '1300655506',
            required: true,
          },
          {
            type: 'birthdate',
            label: 'You date of birth',
            placeholder: '10/10/1990',
            required: true,
          },
          {
            type: 'preferred_username',
            label: '',
            placeholder: '',
            value: randomUUID,
            disabled: true,
            inputProps: {
              id: 'randomID',
            },
          },
        ]}
      />
    </AmplifyAuthenticator>
  </AmplifyAuthContainer>
);

// eslint-disable-next-line import/no-default-export
export default App;
