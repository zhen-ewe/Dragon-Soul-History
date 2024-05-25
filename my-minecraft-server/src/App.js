import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ServerStatus from './components/ServerStatus';
import DiscordLogin from './components/DiscordLogin';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/server-status" component={ServerStatus} />
          <Route path="/discord-login" component={DiscordLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
