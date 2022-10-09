import './Portfolio.style.css';
import { useState } from 'react';
import PortfolioModal from './PortfolioModal';

type PortfolioItem = {
  id: number;
  imgSrc?: string;
  imgSrcAlt?: string;
  title: string;
  description?: string;
}

const Portfolio = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 0,
      imgSrc: 'Starwars',
      imgSrcAlt: 'Starwars',
      title: 'Starwars',
      description: 'Project One description',
    },
    {
      id: 1,
      imgSrc: 'Marvel',
      imgSrcAlt: 'Marvel',
      title: 'Marvel',
      description: 'Project One description',
    },
    {
      id: 2,
      imgSrc: 'Pokemon',
      imgSrcAlt: 'Pokemon',
      title: 'Pokemon',
      description: 'Project One description',
    },
    {
      id: 3,
      imgSrc: 'Musicbook',
      imgSrcAlt: 'Musicbook',
      title: 'Musicbook',
    },
  ];
  const [items] = useState<PortfolioItem[]>(portfolioItems);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const handlePortfolioModalOpen = (item: PortfolioItem) => {
    setModalOpen(!isModalOpen);
    setSelectedPortfolio(item);
  };
  const handleModalClose = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <section id="projects" className="max-w-screen-xl mx-auto py-10 px-4 ">
        <h3 className="hidden">Projects</h3>
        <h4 className="title-gradient title-gradient--projects mb-5 font-bold text-3xl">Projects</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items && items.map((item: PortfolioItem) => (
            <div
              key={item.id}
              onClick={() => handlePortfolioModalOpen(item)}
              className="p-4 bg-gray-900 hover:bg-gray-800 border-1 border-solid border-gray-900 hover:border-gray-800 rounded-lg cursor-pointer transition-all"
              role="button"
              aria-label="Open portfolio modal"
            >
              <img className="" src={item.imgSrc} alt={item.imgSrcAlt} />
              <h4 className="text-white font-bold text-base md:text-lg leading-7 md:leading-8">{item.title}</h4>
              {item.description && (<p className="text-white text-sm md:text-base leading-7">{item.description}</p>)}
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
