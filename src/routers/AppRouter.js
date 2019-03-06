import React from 'react';
import { Switch, BrowserRouter, Route, NavLink } from 'react-router-dom';
import Card from '../components/Card';

const Header = () => (
    <header className="navigation">
        <div className="container">
            <NavLink to="/" exact={true} className="navigation__link">Home</NavLink>
            <NavLink to="/about" className="navigation__link">About</NavLink>
            <NavLink to="/portfolio" className="navigation__link">Portfolio</NavLink>
            <NavLink to="/contact" className="navigation__link">Contact</NavLink>
        </div>
    </header>
  );

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Header}/>
        </Switch>
        <Card />
      </div>
    </BrowserRouter>
);  

export default AppRouter;