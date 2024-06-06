import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NASA_URL, API_KEY } from '../constants';
import Content from './Content';


export default function App() {
  const [data, setData] = useState({});

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
      <Content 
        title={data.title} 
        explanation={data.explanation} 
        url={data.url} 
        date={data.date}
      />
    </div>
  );
}

