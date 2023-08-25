// Card.js
import React from 'react';
import './Card.css'

const Card = ({ object }) => {
  return (
    <div className="card">
      <img src={object.thumbnail.small} alt={object.title} />
      <div className="card-info">
        <h3 className="title">{object.title}</h3>
        <div className="desc">{object.content}</div>
        <div className='row'>
        <div className='bottom'>
        <div>{object.author.name}-</div>
<div>{object.author.role}</div>
</div>
<div>date-{object.date}</div>
        </div>


      </div>
    </div>
  );
};

export default Card;