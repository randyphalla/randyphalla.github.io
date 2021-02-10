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
  title?: string;
  role?: string;
  url?: string;
  startedDate?: string;
  endedDate?: string;
  isWorkExperience?: boolean;
  onWorkExperience?: () => void;
  onEducationExperience?: () => void;
}

const List: FC<ListProps> = (props: ListProps) => {
  const trackGA = (cat: string, action: string, label: string, value: any) => trackCustomEvent({category: cat, action: action, label: label, value: value});
  const trackWorkExperiencesLink = (id: number) => trackGA('Work Experiences - Links', 'Click', 'Work Experience', id);
  const trackEducationLink = (id: number) => trackGA('Educations - Links', 'Click', 'Education', id);

  return (
    <WorkEducationSection>
      <Hidden>{props.hiddenText}</Hidden>
      <Container>
        <DefaultTitle>
          <DefaultTitleSpan>{props.title}</DefaultTitleSpan>
        </DefaultTitle>
        <WorkEducationList>
          {props.items && props.items.map((item, index) =>
            <ListItem
              key={index}
              {...item}
              onWorkExperience={() => trackWorkExperiencesLink(index)}
              onEducationExperience={() => trackEducationLink(index)}
            />
          )}
        </WorkEducationList>
      </Container>
    </WorkEducationSection>
  )
};

const ListItem: FC<ListItemProps> = (props: ListItemProps) => {
  return (
    <WorkEducationListItem>
      <WorkEducationCompanyName>
        {props.title} -<WorkEducationDateStarted> {props.startedDate} - {props.endedDate}</WorkEducationDateStarted>
      </WorkEducationCompanyName>
      <WorkEducationRole>{props.role}</WorkEducationRole>
      {
        props.isWorkExperience ? (
          <WorkEducationLink
            href={props.url}
            aria-label={`Go to ${props.title}`}
            title={`Go to ${props.title}`}
            onClick={props.onWorkExperience}
            rel="noopener"
            >
            {props.url}
          </WorkEducationLink>
        ) : (
          <WorkEducationLink
            href={props.url}
            aria-label={`Go to ${props.title}`}
            title={`Go to ${props.title}`}
            onClick={props.onEducationExperience}
            rel="noopener"
          >
            {props.url}
          </WorkEducationLink>
        )
      }
    </WorkEducationListItem>
  )
};

List.defaultProps = {
  hiddenText: 'List Section',
  title: 'List'
}

export { ListItem, List };
export default List;
