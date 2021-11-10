import React from 'react';
import { Router, Link } from "@reach/router";
import "./i18n";
import Home from './templates/home';
import About from './templates/about';
import SearchTemplate from './templates/search';
import ApiDocsFull from './templates/api';
import NotFound from './templates/not_found';
import Dataset from './templates/dataset';
import ApiDocsSpecific from './templates/dataset/api';
import Publishers from './templates/publishers';
import Project from './components/Project';
import Opendata from './components/Opendata';
import '@civicactions/data-catalog-components/dist/index.css';
import './theme/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about"/>
      <Project path="/project" />
      <Opendata path="/opendata" />
      <Publishers path="/publishers" />
      <SearchTemplate path="/search" />
      <ApiDocsFull path="/api" />
      <Dataset path="/dataset/:id" />
      <ApiDocsSpecific path="/dataset/:id/api" />
      <NotFound default />
    </Router>
  );
}

export default App;
