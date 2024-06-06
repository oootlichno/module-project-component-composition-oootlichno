import React from 'react'

export default function Content({ title, explanation, url, date }) {

    return (
      <div className="content">
        <img className="photo" src={url} alt={title} />
        <div className="text">
          <h2>{title}</h2>
          <p>{explanation}</p>
          <p className="date">{date}</p>
        </div>
      </div>
    );
  }