import {
  ExperiencesProps,
  EducationsProps,
  HobbiesProps,
  ProjectsProps,
  SoftwaresProps,
  HardwaresProps,
  OthersProps
} from "../types";
import StarWarsThumbnail from '../assets/images/portfolio/starwars_thumbnail.png';
import MarvelThumbnail from '../assets/images/portfolio/marvel_thumbnail.png';
import PokemonThumbnail from '../assets/images/portfolio/pokemon_thumbnail.png';
import MusicbookThumbnail from '../assets/images/portfolio/musicbook_thumbnail.png';

export const FrontEndSkills: string[] = [
  'HTML5', 'CSS3', 'SASS', 'CSS-in-JS', 'JavaScript', 'TypeScript', 'Angular', 'Ionic', 'React', 'React Native', 'Astro', 'Bootstrap', 'Tailwind CSS', 'Material UI (React)', 'Storybook', 'Responsive Web Design', 'Accessibility'
];

export const BackendSkills: string[] = [
  'PHP', 'Firebase (Firestore & Functions)', 'MySQL', 'noSQL',
];

export const ToolsSkills: string[] = [
  'Figma', 'Microsoft (Teams, Word and Excel)', 'Github Desktop', 'Sourcetree', 'Trello', 'Jira'
];

export const Experiences: ExperiencesProps[] = [
  {
    company: 'Denstu Creative',
    role: 'Senior Front End Developer',
    startedDate: 'April 2023',
    endedDate: 'Present',
    url: 'https://www.dentsucreative.com',
  },
  {
    company: 'Devlift Media',
    role: 'Full Stack Developer',
    startedDate: 'Dec 2016',
    endedDate: 'April 2023',
    url: 'https://www.devlift.com',
  },
  {
    company: 'BuzzPR',
    role: 'Graphic Design Intern',
    startedDate: 'Aug 2016',
    endedDate: 'Sept 2016',
    url: 'https://www.buzzpr.ca',
  }
];

export const Educations: EducationsProps[] = [
  {
    company: 'Fanshawe College',
    role: 'Interactive Media Specialist',
    startedDate: 'Sept 2015',
    endedDate: 'Apr 2016',
  },
  {
    company: 'Fanshawe College',
    role: 'Graphic Design',
    startedDate: 'Sept 2011',
    endedDate: 'Apr 2014',
  }
];

export const Hobbies: HobbiesProps[] = [
  {
    name: 'Games (PS4/5, Switch, PC and Mobile)',
  },
  {
    name: 'Powerlifting',
  },
  {
    name: 'Cycling/Biking'
  },
  {
    name: 'Running/Jogging'
  },
  {
    name: 'TV Shows and Movies',
  }
];

export const FeaturedProjects: ProjectsProps[] = [
  {
    id: 0,
    imgSrc: '/portfolio/starwars_thumbnail.png',
    imgSrcAlt: 'Starwars',
    title: 'Starwars',
    type: "Web",
    description: `
      This project involves retrieving data from an API to construct a web application. The objective was to present a comprehensive list of characters and provide detailed information about each character.
    `,
    siteLink: 'https://roaring-liger-fcf8b7.netlify.app/',
    repoLink: 'https://github.com/randyphalla/swapi-ajax/tree/development/fetch-api',
    languages: 'HTML5, CSS3, Foundation 6, JavaScript and Gulp',
  },
  {
    id: 1,
    imgSrc: '/portfolio/marvel_thumbnail.png',
    imgSrcAlt: 'Marvel',
    title: 'Marvel',
    type: "Web / Mobile",
    description: `
      This project involves retrieving data from an API to develop a mobile application with the goal of showcasing a comprehensive list of superheroes. The primary objective is to enable users to view detailed information about each superhero by clicking on their respective profiles.
    `,
    siteLink: 'https://serene-beijinho-2a498a.netlify.app/',
    repoLink: 'https://github.com/randyphalla/marvel-expo-app',
    languages: 'React Native, Expo and CSS-in-JS',
  },
  {
    id: 2,
    imgSrc: '/portfolio/pokemon_thumbnail.png',
    imgSrcAlt: 'Pokemon',
    title: 'Pokemon',
    type: "Web / Mobile",
    description: `
      This project revolves around fetching data from an API to construct a mobile application. The aim is to present a list of Pokémon and provide detailed information about each Pokémon upon user interaction.
    `,
    siteLink: 'https://lucent-banoffee-173852.netlify.app/',
    repoLink: 'https://github.com/randyphalla/pokemon-expo-app',
    languages: 'React Native, Expo and CSS-in-JS',
  },
];

export const Projects: ProjectsProps[] = [
  {
    id: 0,
    imgSrc: StarWarsThumbnail,
    imgSrcAlt: 'Starwars',
    title: 'Starwars',
    type: "Web",
    description: `
      This project involves retrieving data from an API to construct a web application. The objective was to present a comprehensive list of characters and provide detailed information about each character.
    `,
    siteLink: 'https://roaring-liger-fcf8b7.netlify.app/',
    repoLink: 'https://github.com/randyphalla/swapi-ajax/tree/development/fetch-api',
    languages: 'HTML5, CSS3, Foundation 6, JavaScript and Gulp',
  },
  {
    id: 1,
    imgSrc: MarvelThumbnail,
    imgSrcAlt: 'Marvel',
    title: 'Marvel',
    type: "Web / Mobile",
    description: `
      This project involves retrieving data from an API to develop a mobile application with the goal of showcasing a comprehensive list of superheroes. The primary objective is to enable users to view detailed information about each superhero by clicking on their respective profiles.
    `,
    siteLink: 'https://serene-beijinho-2a498a.netlify.app/',
    repoLink: 'https://github.com/randyphalla/marvel-expo-app',
    languages: 'React Native, Expo and CSS-in-JS',
  },
  {
    id: 2,
    imgSrc: PokemonThumbnail,
    imgSrcAlt: 'Pokemon',
    title: 'Pokemon',
    type: "Web / Mobile",
    description: `
      This project revolves around fetching data from an API to construct a mobile application. The aim is to present a list of Pokémon and provide detailed information about each Pokémon upon user interaction.
    `,
    siteLink: 'https://lucent-banoffee-173852.netlify.app/',
    repoLink: 'https://github.com/randyphalla/pokemon-expo-app',
    languages: 'React Native, Expo and CSS-in-JS',
  },
  {
    id: 3,
    imgSrc: MusicbookThumbnail,
    imgSrcAlt: 'Musicbook',
    title: 'Musicbook',
    type: "Web",
    description: `
      This project entails the development of a music app using PHP and MySQL. Users can register and log in to their accounts, where they gain the ability to favorite or unfavorite artists, albums, songs, and playlists. Additionally, users can create, update, and delete their personalized playlists.
    `,
    // siteLink: '',
    repoLink: 'https://github.com/randyphalla/musicbook-php-mysql',
    languages: 'HTML5, CSS3, Bootstrap v5, PHP and MySQL',
  }
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
    name: 'Microsoft Teams',
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
    name: 'Figma',
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
