import * as React from 'react';

import * as styledComponents from '@styled';
import { Navigation } from '@components/navigation';
import theme from '@theme';

const { default: styled } = styledComponents;

interface IState {
  openTabs: Record<string, string>[] | null;
}

const Wrapper = styled.div`
  width: 400px;
  height: 540px;
  position: relative;
`;

const TabList = styled.div`
  height: calc(100% - 50px);
  overflow: auto;
  padding: 16px 8px;
`;

const ListItem = styled.div`
  padding: 8px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.lightGray};
  }
`;

const Icon = styled.div`
  margin-right: 16px;

  img {
    position: relative;
    float: left;
    width: 16px;
    height: 16px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const ListTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NavigationList = styled(Navigation)`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 50px;
`;

class Main extends React.Component<IState> {
  public constructor(props: any) {
    super(props);
  }

  public state: IState = {
    openTabs: null,
  };

  public drawCurrentTabs = () => {
    chrome.tabs.query({}, (tabs) => {
      this.setState({ openTabs: tabs });
    });
  };

  public componentDidMount() {
    this.drawCurrentTabs();
  }

  render() {
    const { openTabs } = this.state;
    const navigation = [{ title: 'Open Tabs' }, { title: 'Recently Closed' }];

    return (
      <Wrapper>
        <TabList>
          {!!openTabs &&
            openTabs.map((tab) => {
              return (
                <ListItem>
                  <Icon>
                    <img src={tab.favIconUrl} alt="" />
                  </Icon>
                  <ListTitle>{tab.title}</ListTitle>
                </ListItem>
              );
            })}
        </TabList>
        <NavigationList list={navigation} />
      </Wrapper>
    );
  }
}

export default Main;
