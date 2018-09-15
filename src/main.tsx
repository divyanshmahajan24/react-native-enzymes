import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import { configureStore } from 'app/store';
import { App } from '@containers/app';
import { ThemeProvider } from '@styled';
import theme, { globalCSS } from '@theme';

globalCSS();

// prepare store
const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
