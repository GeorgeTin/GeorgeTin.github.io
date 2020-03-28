import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import Article from './components/Article';
import Blog from './components/Blog';
import Home from './components/Home';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <Menu></Menu>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
              <Route path="/" exact  component={Home} />
              <Route path="/blog" exact component={Blog} /> 
              <Route path="/article/" component={Article} />
              <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
