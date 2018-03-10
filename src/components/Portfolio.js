import React from 'react';
import { Link } from 'react-router-dom';

import PortfolioItemPage from './PortfolioItemPage';

const Portfolio = (props) => {
  const links = [1, 2, 3].map(itemId => (
    <Link
      key={`portfolioItem-${itemId}`}
      to={`/portfolio/${itemId}`}
    >
      Item {itemId}
    </Link>
  ));

  return (
    <div>
      <h2>My Work</h2>
      <h4>Checkout the following thins I've done:</h4>
      <div>
        {links}
      </div>
    </div>
  );
};

export default Portfolio;