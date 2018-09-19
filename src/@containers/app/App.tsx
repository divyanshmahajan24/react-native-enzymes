import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { Main } from '@containers/main';

const App = hot(module)(() => (
  <Router>
    <Route path="/" component={Main} />
  </Router>
));

export default App;
