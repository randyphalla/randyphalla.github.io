import './Portfolio.style.css';
import { useState } from 'react';
import PortfolioModal from './PortfolioModal';
import type { PortfolioType } from '@types/Portfolio';

interface PortfolioProps {
  portfolios: PortfolioType[];
};

const Portfolio = (props: PortfolioProps) => {
  const { portfolios } = props;
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfolios[0]);
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
          {portfolios && portfolios.map((portfolio: PortfolioType) => (
            <div className="" key={portfolio.id}>
              <div
                onClick={() => handlePortfolioModalOpen(portfolio)}
                className="p-4 bg-gray-900 hover:bg-gray-700 border-1 border-solid border-gray-900 hover:border-gray-800 rounded-lg cursor-pointer transition-all"
                role="button"
                aria-label="Open portfolio modal"
              >
                <img className="w-full h-full" src={portfolio.imgSrc} alt={portfolio.imgSrcAlt} />
                <h4 className="mt-2 text-white font-bold text-base md:text-lg leading-7 md:leading-8">{portfolio.title}</h4>
              </div>
              {portfolio.type && (<p className="mt-2 text-gray-500 text-sm">{portfolio.type}</p>)}
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
