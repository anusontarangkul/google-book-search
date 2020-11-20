import React from "react";
import "./style.css";

function Results(results) {
  return <article className="resultsContainer container-fluid d-flex justify-content-center">
    <div class="row">
    {/* {results.map(cards => ( */}
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    {/* ))} */}
    </div>
  </article>;
}

export default Results;