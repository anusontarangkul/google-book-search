import React from "react";
import "./style.css";

function Saved(results) {
  return <article className="savedContainer container-fluid d-flex justify-content-center">
    <div class="row">
    {/* {results.map(cards => ( */}
      <div class="card">
        <div class="body">
          <div class="row">
            <div class="col-8 header">
              <h3 class="title">title</h3>
              <h5 class="author">By author</h5>
              
            </div>
            <div class="col-4">
              <button class="view btn btn-outline-primary">View</button>
              <button class="delete btn btn-outline-danger">Delete</button>
            </div>
            <hr/>
          </div>
          <img class="image" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"/>
          <p class="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    {/* ))} */}
    </div>
  </article>;
}

export default Saved;