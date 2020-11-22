import React from "react";
import "./style.css";

function Saved({ saved, handleDelete }) {

  return <article className="savedContainer container-fluid justify-content-center">
    {saved.map((cards, index) => (
      <div key={index} class="card">
        <div class="body">
          <div class="row">
            <div class="col-8 header">
              <h3 class="title">{cards.title}</h3>
              <h5 class="author">By {cards.authors}</h5>

            </div>
            <div class="col-4">
              <button class="delete btn btn-outline-danger" onClick={event => handleDelete(event, cards._id)}>Delete</button>
              <a href={cards.link} target="_blank"><button target="_blank" class="view btn btn-outline-primary">View</button></a>
            </div>
            <hr />
          </div>

          <a href={cards.link} target="_blank">
            <img class="image" src={cards.image} alt={cards.title} />
          </a>
          <p class="text">{cards.description}</p>

        </div>
      </div>
    ))}

  </article>;
}

export default Saved;