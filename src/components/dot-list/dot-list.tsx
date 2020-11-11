import React, { FC } from 'react';
import { Hidden, Container } from '../../theme/global.style';
import { MySkillsSection, DefaultTitle, DefaultTitleSpan, MySkillsList, MySkilsListItem } from '../../theme/index.style';

type DotListProps = {
  hiddenText?: string;
  title?: string;
  items?: DotListItemProps[];
}

type DotListItemProps = {
  name?: string;
}

const DotList: FC<DotListProps> = (props: DotListProps) => {
  return (
    <MySkillsSection>
      <Hidden>{props.hiddenText}</Hidden>
      <Container>
        <DefaultTitle dot>
          <DefaultTitleSpan>{props.title}</DefaultTitleSpan>
        </DefaultTitle>
        <MySkillsList>
          {props.items && props.items.map((item, index) => <DotListItem key={index} {...item} />)}
        </MySkillsList>
      </Container>
    </MySkillsSection>
  )
};

const DotListItem: FC<DotListItemProps> = (props: DotListItemProps) => {
  return (
    <MySkilsListItem>{props.name}</MySkilsListItem>
  )
};

DotList.defaultProps = {
  hiddenText: 'Dot List Hidden Text',
  title: 'Dot List Title'
}

DotListItem.defaultProps = {
  name: 'Dot List Item Name'
}

export { DotListItem, DotList };
export default DotList;
