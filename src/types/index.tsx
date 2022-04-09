type SkillsProps = {
  name: string;
}

type ExperiencesProps = {
  title: string;
  role: string;
  url?: string;
  startedDate: string;
  endedDate: string;
}

type EducationsProps = {
  title: string;
  role: string;
  url?: string;
  startedDate: string;
  endedDate: string;
}

type HobbiesProps = {
  name: string;
}

type ProjectsProps = {
  id: number;
  title: string;
  description: string;
  poster: string;
}

type SoftwaresProps = {
  name: string;
}

type HardwaresProps = {
  title: string;
  name: string;
}

type OthersProps = {
  title: string;
  name: string;
}

export {
  SkillsProps,
  ExperiencesProps,
  EducationsProps,
  HobbiesProps,
  ProjectsProps,
  SoftwaresProps,
  HardwaresProps,
  OthersProps,
};
