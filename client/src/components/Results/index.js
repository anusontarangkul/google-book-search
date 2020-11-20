import React from "react";
import "./style.css";

function Results({results}) {
  return <article className="resultsContainer container-fluid d-flex justify-content-center">
    <div className="row">
    {results.map(cards => ( 
      <div key={cards.title} className="card">
        <div className="card-body">
          <h5 className="card-title"></h5>
          <h6 className="card-subtitle mb-2 text-muted">{cards.title}</h6>
          <p className="card-text">{cards.description}</p>
          <img src = {cards.image}/>
          <a href={cards.link} className="card-link">Google Books link</a>
        </div>
      </div>
     ))}
    </div>
  </article>;
}

export default Results;