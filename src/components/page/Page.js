import React from 'react';
import Cow from '../Cow/Cow';
import cows from './constants/pageconstants';
import './Page.css';

export default () => {
  return (
    <div className="App">
      <h1>MY COWS</h1>
      <section className="cows">
        {
          cows.map((cow) => 
            <Cow imageUrl={cow.imageUrl} name={cow.name} field={cow.field} description={cow.description} />
          )
        }
      </section>
    </div>
  );
}