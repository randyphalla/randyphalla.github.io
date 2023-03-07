import React, { FC } from 'react';
import { Hidden, Container } from '../../theme/global.style';
import { MySkillsSection, DefaultTitle, DefaultTitleSpan, MySkillsList, MySkilsListItem } from '../../theme/index.style';

type DotListProps = {
  hiddenText?: string;
  title?: string;
  items?: string[];
}

const DotList: FC<DotListProps> = (props: DotListProps) => {
  const { hiddenText, title, items } = props;

  return (
    <MySkillsSection>
      <Hidden>{hiddenText}</Hidden>
      <Container>
        <DefaultTitle dot>
          <DefaultTitleSpan>{title}</DefaultTitleSpan>
        </DefaultTitle>
        <MySkillsList>
          {items && items.map((item, index) => <MySkilsListItem key={index}>{item}</MySkilsListItem>)}
        </MySkillsList>
      </Container>
    </MySkillsSection>
  )
};

DotList.defaultProps = {
  hiddenText: 'Dot List Hidden Text',
  title: 'Dot List Title'
}

export { DotList };
export default DotList;
