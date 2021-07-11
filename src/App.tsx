import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Home } from './views/Home';
import { Team as TeamView } from './views/Team';
import { Player as PlayerView } from './views/Player';
import { Admin } from "./views/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <AmplifySignOut style={{ backgroundColor: "blue" }} />
        <Link to="/team/1">First team</Link>
        <Link to="/player/8d0ccd7b-64ac-4279-9f5d-d3ee4511bcab">
          First player
        </Link>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/team/:id" component={TeamView} />
      <Route path="/player/:id" component={PlayerView} />
    </Router>
  );
}

// export default App;
export default withAuthenticator(App);
