import React from 'react';

export const Cow = ({cow}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={cow.image} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{cow.name}</p>
            <p className="subtitle is-6">{cow.location}</p>
          </div>
        </div>

        <div className="content">{cow.description}</div>
      </div>
    </div>
  );
}
