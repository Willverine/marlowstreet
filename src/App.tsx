import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import { Home } from './views/Home';
import { Team as TeamView } from './views/Team/Team';
import { Player as PlayerView } from './views/Player/Player';
import { Game as GameView } from './views/Game/Game';
import { Admin } from './views/Admin';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

Auth.configure(awsConfig);

export const App = withAuthenticator(() => (
  <Router>
    <div className="App">
      <AmplifySignOut style={{ backgroundColor: 'blue' }} />
      <Link to="/team/1">First team</Link>
      <Link to="/player/8d0ccd7b-64ac-4279-9f5d-d3ee4511bcab">
        First player
      </Link>
    </div>
    <Route path="/" exact component={Home} />
    <Route path="/admin" exact component={Admin} />
    <Route path="/team/:id" component={TeamView} />
    <Route path="/player/:id" component={PlayerView} />
    <Route path="/game/:id" component={GameView} />
  </Router>
));

// eslint-disable-next-line import/no-default-export
export default App;
