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
      <section id="portfolio" className="py-10 px-4 md:px-8 bg-white dark:bg-gray-900">
        <h3 className="hidden">Projects</h3>
        <div className="max-w-screen-xl mx-auto">
          <h4 className="mb-5 dark:text-white font-bold text-3xl">Projects</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolios && portfolios.map((portfolio: PortfolioType) => (
              <button
                key={portfolio.id}
                onClick={() => handlePortfolioModalOpen(portfolio)}
                role="button"
                aria-label="Open portfolio modal"
              >
                <div
                  className="p-4 bg-gray-900 dark:bg-gray-800 hover:bg-gray-700 rounded-lg cursor-pointer transition-all"
                >
                  <img className="w-full h-full" src={portfolio.imgSrc} alt={portfolio.imgSrcAlt} loading="lazy" />
                  <h4 className="mt-4 text-white dark:text-white font-bold text-base md:text-lg leading-7 md:leading-8 text-left">{portfolio.title}</h4>
                  {/* {portfolio.type && (<p className="text-gray-400 dark:text-gray-200 text-sm text-left">{portfolio.type}</p>)} */}
                  {portfolio.projectType && (<p className="text-gray-400 dark:text-gray-200 text-sm text-left">{portfolio.projectType}</p>)}
                </div>
              </button>
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
