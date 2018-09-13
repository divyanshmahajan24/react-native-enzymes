import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';

import { Main } from '@containers/main';

const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={Main} />
  </Switch>
));

export default App;
