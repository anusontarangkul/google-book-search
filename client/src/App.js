import react from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Results from "./components/Results";
import GoogleBooks from "./utils/GetBooks";
function App() {
  const [resultState, setResultState] = useState();
  function handleSearch(searchedBook) {
    console.log(searchedBook);
    GoogleBooks.searchTerms(searchedBook)
      .then(res => {

        setResultState({
          ...resultState,
          title: res.items[0].volumeInfo.title,
          authors: res.items[0].volumeInfo.authors,
          description: res.items[0].volumeInfo.description,
          image: res.items[0].volumeInfo.imageLinks.thumbnail,
          link: res.items[0].volumeInfo.infoLink
        })
          .catch(err => { console.log(err) });
      });
  }
  console.log(resultState);
  return (
    <div className="App">
      <Wrapper>
        <Banner />
        <Search handleSearch={handleSearch} />
        <Results result={resultState} />
      </Wrapper>
    </div>
  );
}
export default App;