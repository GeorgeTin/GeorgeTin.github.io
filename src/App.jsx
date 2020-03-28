import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import Article from './components/Article';
import Blog from './components/Blog';
import Home from './components/Home';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

function App() {
  console.log("test")
  console.log(process.env.PUBLIC_URL)
  return (
    <div>
      <Menu></Menu>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <HashRouter basename='/'>
          <Switch>
              <Route path="/" exact  component={Home} />
              <Route path="/blog" exact component={Blog} /> 
              <Route path="/article" component={Article} />
              <Route component={NotFound} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
