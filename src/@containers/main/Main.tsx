import * as React from 'react';

import * as styledComponents from '@styled';
import { Navigation } from '@components/navigation';

const { default: styled } = styledComponents;

const Wrapper = styled.div`
  width: 400px;
  height: 540px;
  position: relative;
`;

const Tabs = styled(Navigation)`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 50px;
`;

class Main extends React.Component {
  render() {
    const tabList = [{ title: 'Open Tabs' }, { title: 'Recently Closed' }];
    return (
      <Wrapper>
        Hello
        <Tabs list={tabList} />
      </Wrapper>
    );
  }
}

export default Main;
