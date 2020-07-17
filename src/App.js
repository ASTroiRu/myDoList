import React from 'react';
import logo from './logo.svg';

import './App.css';
import Content from './components/content/content';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
};


export default App;
