import './App.css';
import CardContainer from './Cardcontainer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    // Fetch objects using Axios
    axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then(response => {
        setObjects(response.data); // Assuming the response data is an array of objects
      })
      .catch(error => {
        console.error('Error fetching objects:', error);
      });
  }, []);
  return (
    <div className="App">
      <CardContainer objects={objects} />
    </div>
  );
}

export default App;
