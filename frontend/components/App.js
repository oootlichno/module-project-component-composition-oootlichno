import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NASA_URL, API_KEY } from '../constants';

export default function App() {
  const [data, setData] = useState([]);
  const [currentDataId, setCurrentDataId] = useState(null);

  useEffect(() => {
    axios.get(`${NASA_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        setData(res.data);  
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div id="root">
   
    <div className="content">
      {data && (
        <>
          <img className="photo" src={data.url} alt={data.title} />
          <div className="text">
            <h2>{data.title}</h2>
            <p>{data.explanation}</p>
            <p className="date">{data.date}</p>
          </div>
        </>
      )}
    </div>
  </div>
);
}

