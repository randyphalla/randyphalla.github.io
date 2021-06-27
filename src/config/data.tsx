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

export const Skills: SkillsProps[] = [
  {
    name: 'HTML5',
  },
  {
    name: 'CSS3 (SCSS)',
  },
  {
    name: 'Bootstrap (3/4)',
  },
  {
    name: 'Tailwind CSS',
  },
  {
    name: 'Responsive Web Design',
  },
  {
    name: 'JavaScript (ES5/6+)',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'jQuery',
  },
  {
    name: 'Angular (2-11+)',
  },
  {
    name: 'Ionic',
  },
  {
    name: 'ReactJS (GatsbyJS)',
  },
  {
    name: 'React Native',
  },
  {
    name: 'Storybook',
  },
  {
    name: 'Firebase',
  },
  {
    name: 'PHP'
  },
  {
    name: 'MySQL'
  },
  {
    name: 'Git (Sourcetree & GitHub)',
  },
  {
    name: 'Sketch',
  },
  {
    name: 'Adobe (Photoshop, Illustrator and XD)',
  }
];

export const Experiences: ExperiencesProps[] = [
  {
    title: 'Devlift Media',
    role: 'Web Developer',
    startedDate: 'Dec 2016',
    endedDate: 'Present',
    url: 'https://www.devlift.com',
  },
  {
    title: 'BuzzPR',
    role: 'Graphic Design Intern',
    startedDate: 'Aug 2016',
    endedDate: 'Sept 2016',
    url: 'https://www.buzzpr.ca',
  }
];

export const Educations: EducationsProps[] = [
  {
    title: 'Fanshawe College',
    role: 'Interactive Media Specialist',
    startedDate: 'Sept 2015',
    endedDate: 'Apr 2016',
    // url: 'https://www.fanshawec.ca/programs/ims1-interactive-media-specialist/next'
  },
  {
    title: 'Fanshawe College',
    role: 'Graphic Design',
    startedDate: 'Sept 2011',
    endedDate: 'Apr 2014',
    // url: 'hhttps://www.fanshawec.ca/programs/grd1-graphic-design/next'
  }
];

export const Hobbies: HobbiesProps[] = [
  {
    name: 'Games (PS4, Switch, PC and Mobile)',
  },
  {
    name: 'Gym (Cycling and Powerlifting)',
  },
  {
    name: 'TV Shows and Movies',
  }
];

export const Projects: ProjectsProps[] = [
  // {
  //   id: 1,
  //   title: 'Smart Cart',
  //   description: 'UI Design',
  //   poster: ''
  // },
  // {
  //   id: 2,
  //   title: 'British Airways',
  //   description: 'UI Design',
  //   poster: ''
  // },
  // {
  //   id: 3,
  //   title: 'Car Dashboard',
  //   description: 'UI Design',
  //   poster: ''
  // },
  // {
  //   id: 4,
  //   title: 'Zane Barles',
  //   description: 'UI Design',
  //   poster: ''
  // },
  // {
  //   id: 5,
  //   title: 'COVID-19 App',
  //   description: 'Web Development',
  //   poster: ''
  // },
  // {
  //   id: 6,
  //   title: 'Pokédex App',
  //   description: 'Web Development',
  //   poster: ''
  // },
  // {
  //   id: 7,
  //   title: 'Marvel App',
  //   description: 'Web Development',
  //   poster: ''
  // }
  // {
  //   id: 8,
  //   title: 'Rick and Morty App',
  //   description: 'Web Development',
  //   poster: ''
  // }
];

export const Softwares: SoftwaresProps[] = [
  {
    name: 'Google Chrome',
  },
  {
    name: 'Visual Studio Code (One Dark Pro and Material Icon Themes)',
  },
  {
    name: 'Terminal',
  },
  {
    name: 'Sourcetree',
  },
  {
    name: 'Trello',
  },
  {
    name: 'Slack',
  },
  {
    name: 'Discord',
  },
  {
    name: 'Spotify',
  },
  {
    name: 'Adobe Photoshop, Illustrator and XD',
  },
  {
    name: 'Sketch',
  },
  {
    name: 'Xcode',
  },
  {
    name: 'Android Studio',
  }
];

export const Hardwares: HardwaresProps[] = [
  {
    title: 'Laptop: ',
    name: 'MacBook Pro (13-inch, 2020) / ASUS ROG Strix (i7, GTX 1650)',
  },
  {
    title: 'Keyboard: ',
    name: 'Ducky One 2 SF',
  },
  {
    title: 'Mouse: ',
    name: 'Logitech G Pro Wireless',
  },
  {
    title: 'Monitors: ',
    name: 'Two 27-inch Asus VP278H-P Gaming Monitor',
  },
  {
    title: 'Headset: ',
    name: 'Bose QuietComfort 25 Over-Ear Noise Cancelling Headphones',
  },
  {
    title: 'Phone: ',
    name: 'Samsung S7',
  }
];

export const Others: OthersProps[] = [
  {
    title: 'Eyewear: ',
    name: 'Gunnar Intercept',
  },
  {
    title: 'Desk: ',
    name: 'BEKANT from Ikea',
  },
  {
    title: 'Chair: ',
    name: 'Hyken Technical Mesh Task Chair from Staples',
  }
];
