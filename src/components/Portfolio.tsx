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
      <section id="portfolio" className="py-10 px-4 dark:bg-gray-900">
        <h3 className="hidden">Projects</h3>
        <div className="max-w-screen-xl mx-auto">
          <h4 className="title-gradient title-gradient--projects mb-5 dark:text-white font-bold text-3xl">Projects</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolios && portfolios.map((portfolio: PortfolioType) => (
              <div className="" key={portfolio.id}>
                <div
                  onClick={() => handlePortfolioModalOpen(portfolio)}
                  className="p-4 bg-gray-900 dark:bg-gray-800 hover:bg-gray-700 border-1 border-solid border-gray-900 dark:border-gray-800 hover:border-gray-800 hover:dark:border-gray-700 rounded-lg cursor-pointer transition-all"
                  role="button"
                  aria-label="Open portfolio modal"
                >
                  <img className="w-full h-full" src={portfolio.imgSrc} alt={portfolio.imgSrcAlt} />
                  <h4 className="mt-2 text-white dark:text-white font-bold text-base md:text-lg leading-7 md:leading-8">{portfolio.title}</h4>
                  {portfolio.type && (<p className="mt-2 text-gray-400 dark:text-gray-200 text-sm">{portfolio.type}</p>)}
                </div>
              </div>
            ))}
          </div>
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
