import './Portfolio.style.css';
import { useState } from 'react';

export type portfolioItem = {
  id: number;
  imgSrc?: string;
  imgSrcAlt?: string;
  title: string;
  description?: string;
}

const Portfolio = () => {
  const portfolios: portfolioItem[] = [
    {
      id: 0,
      imgSrc: 'Starwars',
      imgSrcAlt: 'Starwars',
      title: 'Starwars',
      description: 'Project One description'
    },
    {
      id: 1,
      imgSrc: 'Marvel',
      imgSrcAlt: 'Marvel',
      title: 'Marvel',
      description: 'Project One description'
    },
    {
      id: 2,
      imgSrc: 'Pokemon',
      imgSrcAlt: 'Pokemon',
      title: 'Pokemon',
      description: 'Project One description'
    },
    {
      id: 3,
      imgSrc: 'Musicbook',
      imgSrcAlt: 'Musicbook',
      title: 'Musicbook',
    },
  ];
  const [portfolioItems] = useState(portfolios);

  const handlePortfolioModal = (item: portfolioItem) => {
    console.log(item);
  }

  return (
		<section id="projects" className="max-w-screen-xl mx-auto py-10 px-4 ">
			<h3 className="hidden">Projects</h3>
			<h4 className="mb-5 font-bold text-3xl">Projects</h4>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {portfolioItems && portfolioItems.map((portfolioItem: portfolioItem) => (
          <div
            key={portfolioItem.id}
            onClick={() => handlePortfolioModal(portfolioItem)}
            className="p-4 bg-gray-900 hover:bg-gray-800 border-1 border-solid border-gray-900 hover:border-gray-800 rounded-lg cursor-pointer transition-all"
          >
            <img className="" src={portfolioItem.imgSrc} alt={portfolioItem.imgSrcAlt} />
            <h4 className="text-white font-bold text-base md:text-lg leading-7 md:leading-8">{portfolioItem.title}</h4>
            {portfolioItem.description && (<p className="text-white text-sm md:text-base leading-7">{portfolioItem.description}</p>)}
          </div>
        ))}
			</div>
		</section>
  )
};

export default Portfolio;
