import React, { useState } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Results from "./components/Results";
import SavedBanner from "./components/SavedBanner";
import Saved from "./components/Saved";
import GoogleBooks from "./utils/GetBooks";
import API from "./utils/api";

function App() {
  const [resultState, setResultState] = useState([]);

  const handleSearch = (event, searchItem) => {
    event.preventDefault();
    //console.log(searchItem);
    GoogleBooks.searchTerms(searchItem)
      .then(res => {
        //console.log(res);
        setResultState([...resultState, {
          title: res.data.items[0].volumeInfo.title,
          authors: res.data.items[0].volumeInfo.authors,
          description: res.data.items[0].volumeInfo.description,
          image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
          link: res.data.items[0].volumeInfo.infoLink
        }])
        
      }).catch(err => { console.log(err) });
  }
  //by id of result state push books to db
  const handleSave = (event, index) =>{
    event.preventDefault();
    console.log("hit saved");
    console.log(resultState[index]);
    API.saveBook(resultState[index])
    .then(res =>{
      console.log("saved");
    }).catch(err => { console.log(err) });
  }

  return (
    <div className="App">
      <Wrapper>
        <Banner />
          <Search handleSearch={handleSearch} />
          <Results results={resultState} handleSave = {handleSave}/>
      </Wrapper>
    </div>
  );
}
export default App;