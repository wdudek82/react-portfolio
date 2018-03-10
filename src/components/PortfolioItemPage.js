import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItemPage = (props) => (
  <div>
    <Link to={`/portfolio/${props.match.params.id}`}>
      {props.label}
    </Link>
    <h2>A Thing I've Done: Item {props.match.params.id}</h2>
    <Link to="/portfolio">Go Back</Link>
    <p>
      This page is for the item with the id of {props.match.params.id}
    </p>
  </div>
);

export default PortfolioItemPage;