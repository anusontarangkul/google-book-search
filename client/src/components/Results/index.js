import React from "react";
import "./style.css";

function Results(results) {
  return <article className="resultsContainer container-fluid d-flex justify-content-center">
    <div class="row">
    {/* {results.map(cards => ( */}
      <div class="card">
        <div class="body">
          <h3 class="title">title</h3>
          <h5 class="author">By author</h5>
          <button class="view">View</button>
          <button class="Delete">Delete</button>
          <hr/>
          <img class="image" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"/>
          <h6 class="subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    {/* ))} */}
    </div>
  </article>;
}

export default Results;