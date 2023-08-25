import React from 'react';
import Card from './Card';
import './Cardcontainer.css'

const Cardcontainer = ({ objects }) => {
  return (
    <div className="card-container">
      {objects.map((object, index) => (
        <Card key={index} object={object} />
      ))}
    </div>
  );
};

export default Cardcontainer;