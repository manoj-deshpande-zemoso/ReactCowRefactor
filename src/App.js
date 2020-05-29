import React from "react";
import "bulma";
import "./styles.css";
import {Cow} from './Cow';

export default function App() {
  const cows = [
    {
      name: 'Margueritte',
      image: 'https://lh3.googleusercontent.com/eLxDr87icLAQlzF2LFIig62i46hm7f8sH77zIaZX6t64kFsjHlok6QMyCiReOzBcfpkPTZSv3g=w640-h400-e365',
      location: 'Field A',
      description: 'She love organize poker game in the basment of the farm.'
    },
    {
      name: 'Thérèse',
      image: 'https://image.posterlounge.fr/img/products/650000/649832/649832_poster_l.jpg',
      location: 'Field A',
      description: 'During the confinement, her hair grown up significantly.'
    },
    {
      name: 'Evelyne',
      image: 'https://oldmooresalmanac.com/wp-content/uploads/2017/11/cow-2896329_960_720-Copy-476x459.jpg',
      location: 'Field B',
      description: 'She smile to me, it\'s weird.'
    }
  ];


  return (
    <div className="App">
      <h1>MY COWS</h1>

      <section className="cows">
        {
          cows.map(cow => {
            return <Cow cow={cow} key={cow.name} />;
          })
        }
      </section>
    </div>
  );
}
