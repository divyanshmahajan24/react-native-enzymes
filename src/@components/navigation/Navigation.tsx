import * as React from 'react';
import { Omit } from 'utility-types';
import { NavLink } from 'react-router-dom';

import * as styledComponents from '@styled';
import theme from '@theme';

type IDivProps = Omit<JSX.IntrinsicElements['div'], 'ref' | 'title'>;

const { default: styled } = styledComponents;

interface ITabProps extends IDivProps {
  title: string;
  link: string;
  icon?: string;
}

interface IProps {
  // Tabs to be rendered inside the Navigation
  list: ITabProps[];
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${theme.colors.gray};
`;

const LinkItem = styled(NavLink)`
  padding: 16px 0;
  width: 100%;
  justify-content: center;
  display: flex;
  text-decoration: none;
  color: ${theme.colors.neutral};
  font-weight: ${theme.weights[1]}

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Tab = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:first-child {
    border-right: 1px solid ${theme.colors.gray};
  }
`;

const TabTitle = styled.div``;

class Navigation extends React.Component<IProps, {}> {
  render() {
    const { list } = this.props;

    return (
      <Wrapper {...this.props}>
        {list.map((tab, index) => (
          <Tab key={index}>
            <TabTitle>
              <LinkItem to={tab.link} activeStyle={{ color: theme.colors.primary }}>
                {tab.title}
              </LinkItem>
            </TabTitle>
          </Tab>
        ))}
      </Wrapper>
    );
  }
}

export default Navigation;
