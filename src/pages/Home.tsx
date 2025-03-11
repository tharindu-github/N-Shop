import React from 'react';
import Hero from '../components/Hero';
import NewCollection from '../components/NewCollection';
import SportsEvent from '../components/SportsEvent';
import Products from '../components/Products';

const Home = () => {
  return (
    <>
      <Hero />
      <NewCollection />
      <SportsEvent />
      <Products />
    </>
  );
};

export default Home;