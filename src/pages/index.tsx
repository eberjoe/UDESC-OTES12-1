import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';

import { Home } from '../views/home';
import { WeHaveAProblem } from '../views/we-have-a-problem';
import { Results } from '../views/results';

const Root = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/home');
  }, [history]);

  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/we-have-a-problem">
        <WeHaveAProblem />
      </Route>
      <Route path="/results">
        <Results />
      </Route>
    </Switch>
  );
};

export default Root;
