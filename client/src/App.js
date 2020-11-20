import {useState} from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Results from "./components/Results";
import GoogleBooks from "./utils/GetBooks";
function App() {
  const [resultState, setResultState] = useState([]);

  const handleSearch = (event, searchItem) => {
    event.preventDefault();
    console.log(searchItem);
    GoogleBooks.searchTerms(searchItem)
      .then(res => {
        console.log(res);
        setResultState([...resultState, {
          title: res.data.items[0].volumeInfo.title,
          authors: res.data.items[0].volumeInfo.authors,
          description: res.data.items[0].volumeInfo.description,
          image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
          link: res.data.items[0].volumeInfo.infoLink
        }])
          
      }).catch(err => { console.log(err) });
  }
  console.log(resultState);
  return (
    <div className="App">
      <Wrapper>
        <Banner />
        <Search handleSearch={handleSearch} />
        <Results results={resultState} />
      </Wrapper>
    </div>
  );
}
export default App;