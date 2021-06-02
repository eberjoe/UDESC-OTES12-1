import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';

import { WeHaveAProblem } from '../views/we-have-a-problem';
import { Home } from '../views/home';

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
    </Switch>
  );
};

export default Root;
