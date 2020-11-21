import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  const [savedState , setSavedState] = useState([]);

  useEffect(()=>{
    getBooksDb();
  },[]);
  
  const getBooksDb = () =>{
    API.getBooks()
    .then(res => {
    setSavedState(res.data);
    }).catch(err => { console.log(err) });
  }
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
  const handleDelete = (event, id) =>{
    event.preventDefault();
    console.log("hit delete");
    console.log(id);
    API.deleteBook(id)
    .then(res =>{
      console.log("delete");
      getBooksDb();
    }).catch(err => { console.log(err) });
  }

  return (
    <Router>
      <Wrapper>
          <Banner />
          <Switch>
          <Route exact path= "/">
            <Search handleSearch={handleSearch} />
            <Results results={resultState} handleSave = {handleSave}/>
          </Route>
          <Route exact path= "/saved">
            <SavedBanner/>
            <Saved saved = {savedState} handleDelete = {handleDelete}/>
          </Route>
          </Switch>
      </Wrapper>
    </Router>
  );
}
export default App;
///