import React, {useRef} from "react";
import "./style.css";

function Search(props) {
  const inputRef = useRef();
  //console.log(inputRef.current.value)
  return (
  <div>
    <form onSubmit={(event) => props.handleSearch(event, inputRef.current.value)}>
      <input 
      type="text" 
      ref ={inputRef}  
      className="input" 
      placeholder="Search Books" />
    </form>
  </div>
  )
  
}

export default Search;