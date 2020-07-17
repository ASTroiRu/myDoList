import React from 'react';
import logo from './logo.svg';
import './App.css';

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

const Header = () => {
  return (
    <div>
      <h1> Header</h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <h1> Nav</h1>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <h1> Content</h1>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1> Footer</h1>
    </div>
  );
};



export default App;
