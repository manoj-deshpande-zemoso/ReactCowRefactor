import React from 'react';
import './Cow.css';

export default ({imageUrl, name, field, description}) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img alt="Cow" src={imageUrl} />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{field}</p>
        </div>
      </div>

      <div className="content">{description}</div>
    </div>
  </div>
);