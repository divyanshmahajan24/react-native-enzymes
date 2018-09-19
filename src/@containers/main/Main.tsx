import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import * as styledComponents from '@styled';
import { Navigation } from '@components/navigation';
import theme from '@theme';
import { OpenTabs } from '@containers/openTabs';
import { RecentlyClosed } from '@containers/recentlyClosed';

const { default: styled } = styledComponents;

const Wrapper = styled.div`
  width: 400px;
  height: 540px;
  position: relative;
`;

const NavigationList = styled(Navigation)`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 50px;
  background: ${theme.colors.white};
  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;

class Main extends React.Component<any> {
  render() {
    const navigation = [
      { title: 'Open Tabs', link: '/open-tabs' },
      { title: 'Recently Closed', link: '/recently-closed' },
    ];

    return (
      <Router>
        <Wrapper>
          <Redirect to="/open-tabs" />
          <Route path="/open-tabs" component={OpenTabs} />
          <Route path="/recently-closed" component={RecentlyClosed} />
          <NavigationList list={navigation} />
        </Wrapper>
      </Router>
    );
  }
}

export default Main;
