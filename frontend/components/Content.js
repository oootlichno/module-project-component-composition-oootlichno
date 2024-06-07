import React from 'react'
import styled from "styled-components";

const StyleContent = styled.div`

display: flex;
align-items: center;
gap: 100px; 
padding: 20px;

&:hover {
    background-color: #93005a;
    p{
      color: white;
    }
    h2{
      color: white;
      font-weight: width; 
    }
    date{
      color: white;
    }
  }

h2{
  color: #93005a;
  text-align: left;
  margin-bottom: 20px;
}

p{
  font-family: 'Titillium Web', sans-serif;
  margin-top: 10px;
  
}

date {
  color: #93005a;
}

`

export default function Content({ title, explanation, url, date }) {

    return (
      <StyleContent className='content'>
        <img className="photo" src={url} alt={title} />
        <div className="text">
          <h2>{title}</h2>
          <p>{explanation}</p>
          <p><date>DATE: {date}</date></p>
        </div>
      </StyleContent>
    );
  }