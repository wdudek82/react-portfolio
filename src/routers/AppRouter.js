import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Portfolio from '../components/Portfolio';
import PortfolioItemPage from '../components/PortfolioItemPage';
import Contact from '../components/Contact';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;