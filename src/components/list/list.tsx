import React, { FC } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { Hidden, Container } from '../../theme/global.style';
import { WorkEducationSection, DefaultTitle, DefaultTitleSpan, WorkEducationList, WorkEducationListItem, WorkEducationCompanyName, WorkEducationDateStarted, WorkEducationRole, WorkEducationLink } from '../../theme/index.style';

type ListProps = {
  hiddenText?: string;
  title?: string;
  items?: ListItemProps[];
}

type ListItemProps = {
  company?: string;
  role?: string;
  url?: string;
  startedDate?: string;
  endedDate?: string;
  onClick?: () => void;
}

const List: FC<ListProps> = (props: ListProps) => {
  const { hiddenText, title, items } = props;
  const trackGA = (cat: string, action: string, label: string, value: any) => trackCustomEvent({category: cat, action: action, label: label, value: value});

  return (
    <WorkEducationSection>
      <Hidden>{hiddenText}</Hidden>
      <Container>
        <DefaultTitle>
          <DefaultTitleSpan>{title}</DefaultTitleSpan>
        </DefaultTitle>
        <WorkEducationList>
          {items && items.map((item, index) =>
            <ListItem
              key={index}
              {...item}
              onClick={() => trackGA('Home - Work Experiences', 'Click', `${item.url}`, index)}
            />
          )}
        </WorkEducationList>
      </Container>
    </WorkEducationSection>
  )
};

const ListItem: FC<ListItemProps> = (props: ListItemProps) => {
  const { company, role, url, startedDate, endedDate, onClick } = props;
  return (
    <WorkEducationListItem>
      <WorkEducationCompanyName>
        {company} -<WorkEducationDateStarted> {startedDate} - {endedDate}</WorkEducationDateStarted>
      </WorkEducationCompanyName>
      <WorkEducationRole>{role}</WorkEducationRole>
      {url && (
        <WorkEducationLink
          href={url}
          aria-label={`Go to ${company}`}
          title={`Go to ${company}`}
          onClick={onClick}
          rel="noopener"
          target="_blank"
        >
          {url}
        </WorkEducationLink>
      )}
    </WorkEducationListItem>
  )
};

List.defaultProps = {
  hiddenText: 'List Section',
  title: 'List'
}

export { ListItem, List };
export default List;
