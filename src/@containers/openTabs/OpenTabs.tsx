import * as React from 'react';

import * as styledComponents from '@styled';
import { Navigation } from '@components/navigation';
import theme from '@theme';

const { default: styled } = styledComponents;

type ITab = chrome.tabs.Tab[];

interface IState {
  openTabs: ITab;
  filteredTabList: ITab;
}

const Wrapper = styled.div`
  width: 400px;
  height: 540px;
  position: relative;
`;

const TabList = styled.div`
  height: calc(100% - 90px);
  overflow: auto;
  padding: 8px;
`;

const ListItem = styled.div`
  padding: 10px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.lightGray};
  }
`;

const Icon = styled.div`
  margin-right: 16px;

  span {
    height: 16px;
    width: 16px;
    background-color: ${theme.colors.lightGray};
    border: 1px solid ${theme.colors.darkGray};
    border-radius: 3px;
    display: inline-block;
    position: relative;
    top: 3px;
  }

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
  background: ${theme.colors.white};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 12px;
  border: none;
  border-bottom: 1px solid ${theme.colors.gray}
  font-size: 16px;

  :focus {
    outline: 0;
  }
`;

class OpenTabs extends React.Component<{}, IState> {
  public constructor(props: any) {
    super(props);
  }

  public state: IState = {
    openTabs: [],
    filteredTabList: [],
  };

  public drawCurrentTabs = () => {
    chrome.tabs.query({}, (tabs) => {
      this.setState({ openTabs: tabs, filteredTabList: tabs }, () => {
        console.log(this.state.openTabs);
      });
    });
  };

  public componentDidMount() {
    this.drawCurrentTabs();
  }

  private switchTabs(id: number) {
    chrome.tabs.get(id, function(tab) {
      chrome.windows.getCurrent({}, (window) => {
        if (tab.windowId === window.id) {
          chrome.tabs.update(tab.id!, { selected: true });
        } else {
          chrome.windows.update(tab.windowId, { focused: true }, () => {
            chrome.tabs.update(tab.id!, { selected: true });
          });
        }
      });
    });
  }

  private filterTabList = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const tabList = this.state.openTabs;

    const filteredList = tabList.filter((tab) => {
      return !!tab.title && tab.title.toLowerCase().search(value.toLowerCase()) !== -1;
    });

    this.setState({ filteredTabList: filteredList });
  };

  render() {
    const { filteredTabList } = this.state;
    const navigation = [
      { title: 'Open Tabs', link: '/' },
      { title: 'Recently Closed', link: '/recently-closed' },
    ];

    return (
      <Wrapper>
        <Input
          type="text"
          placeholder="Search"
          autoFocus
          onChange={(event) => this.filterTabList(event)}
        />
        <TabList>
          {!!filteredTabList &&
            filteredTabList.map((tab) => {
              return (
                <ListItem onClick={() => this.switchTabs(tab.id!)}>
                  <Icon>
                    {tab.favIconUrl === '' ? <span /> : <img src={tab.favIconUrl} alt="" />}
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

export default OpenTabs;
