import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharactersContainer from '../../containers/CharactersContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={(routerProps) => <CharactersContainer {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
