import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = (props) => {
  const id = props.match.params.id;
  const links = [1, 2, 3].map(itemId => (
    <Link
      key={`portfolioItem-${itemId}`}
      to={`/portfolio/${itemId}`}
    >
      Item {itemId}
    </Link>
  ));

  console.log(id);

  return (
    <div>
    {isNaN(id) ?
      <div>
        <h2>My Work</h2>
        <h4>Checkout the following thins I've done:</h4>
        <div>
          {links}
        </div>
      </div>
      :
      <div>
        <h2>A Thing I've Done</h2>
        <h4>This is page for the item with id of {id}</h4>
      </div>
    }
    </div>
  );
};

export default Portfolio;