import React from "react";
import "./style.css";

function Search(props) {
  return <div>
    <input onSubmit={event => props.handleSearch(event.target.value)} className="input" placeholder="Search Books" />
  </div>
}

export default Search;