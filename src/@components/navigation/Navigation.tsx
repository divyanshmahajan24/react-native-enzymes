import * as React from 'react';
import { Omit } from 'utility-types';

import * as styledComponents from '@styled';

type IDivProps = Omit<JSX.IntrinsicElements['div'], 'ref' | 'title'>;

const { default: styled } = styledComponents;

interface ITabProps extends IDivProps {
  title: string;
  icon?: string;
}

interface IProps {
  // Tabs to be rendered inside the Navigation
  list: ITabProps[];
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ededed;
`;

const Tab = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-right: 1px solid #ededed;
  }
`;

const TabTitle = styled.div``;

// const TabContent = styled.div``;

class Navigation extends React.Component<IProps, {}> {
  render() {
    const { list } = this.props;

    return (
      <Wrapper {...this.props}>
        {list.map((tab, index) => (
          <Tab key={index}>
            <TabTitle>{tab.title}</TabTitle>
          </Tab>
        ))}
      </Wrapper>
    );
  }
}

export default Navigation;
