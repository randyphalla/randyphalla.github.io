import './Portfolio.style.css';
import { useState } from 'react';
import PortfolioModal from './PortfolioModal';
import { PortfolioType } from '../types/Portfolio';

const Portfolio = () => {
  const portfolioItems: PortfolioType[] = [
    {
      id: 0,
      imgSrc: 'https://via.placeholder.com/150',
      imgSrcAlt: 'Starwars',
      title: 'Starwars',
      type: "Web",
      description: `
        This project is about fetching data from a server and a web application. The goal was to display a list of character and display the detail of that character and the the programming languages I used to create this project was HTML, CSS/SCSS, Foundation 6, JavaScript, Gulp.
      `,
      link: 'https://github.com/randyphalla/swapi-ajax/tree/development/fetch-api',
      languages: 'HTML5, CSS3, Foundation 6, JavaScript and Gulp',
    },
    {
      id: 1,
      imgSrc: 'https://via.placeholder.com/150',
      imgSrcAlt: 'Marvel',
      title: 'Marvel',
      type: "Mobile",
      description: `
        This project is about fetching data from a server and mobile application. The goal was to display a list of superheroes and display the detail of that superhero on click and the the programming languages I used to create this project was React Native & Expo.
      `,
      link: 'https://github.com/randyphalla/marvel-expo-app',
      languages: 'React Native, Expo and CSS-in-JS',
    },
    {
      id: 2,
      imgSrc: 'https://via.placeholder.com/150',
      imgSrcAlt: 'Pokemon',
      title: 'Pokemon',
      type: "Mobile",
      description: `
        This project is about fetching data from a server and mobile application. The goal was to display a list of Pokémon's and display the details of that Pokémon on click and the the programming languages I used to create this project was React Native & Expo.
      `,
      link: 'https://github.com/randyphalla/pokemon-expo-app',
      languages: 'React Native, Expo and CSS-in-JS',
    },
    {
      id: 3,
      imgSrc: 'https://via.placeholder.com/150',
      imgSrcAlt: 'Musicbook',
      title: 'Musicbook',
      type: "Web",
      description: `
        This project is about creating music app using PHP & MySQL. Users are able to create a user account and login with your new account, users have the ability to favorite/unfavorite their artists, albums, songs, playlist and users and able to create, update and delete their own playlist. and the the programming languages I used to create this project was HTML5, CSS3, Bootstrap v5, PHP and MySQL.
      `,
      link: 'https://github.com/randyphalla/musicbook-php-mysql',
      languages: 'HTML5, CSS3, Bootstrap v5, PHP and MySQL',
    },
  ];
  const [items] = useState<PortfolioType[]>(portfolioItems);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const handlePortfolioModalOpen = (item: PortfolioType) => {
    setModalOpen(!isModalOpen);
    setSelectedPortfolio(item);
  };
  const handleModalClose = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <section id="portfolio" className="max-w-screen-xl mx-auto py-10 px-4 ">
        <h3 className="hidden">Projects</h3>
        <h4 className="title-gradient title-gradient--projects mb-5 font-bold text-3xl">Projects</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items && items.map((item: PortfolioType) => (
            <div className="" key={item.id}>
              <div
                onClick={() => handlePortfolioModalOpen(item)}
                className="p-4 bg-gray-900 hover:bg-gray-700 border-1 border-solid border-gray-900 hover:border-gray-800 rounded-lg cursor-pointer transition-all"
                role="button"
                aria-label="Open portfolio modal"
              >
                <img className="w-full h-full" src={item.imgSrc} alt={item.imgSrcAlt} />
                <h4 className="mt-2 text-white font-bold text-base md:text-lg leading-7 md:leading-8">{item.title}</h4>
              </div>
              {item.type && (<p className="mt-2 text-gray-500 text-sm">{item.type}</p>)}
            </div>
          ))}
        </div>
      </section>
      <PortfolioModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        portfolio={selectedPortfolio}
      />
    </>
  )
};

export default Portfolio;
