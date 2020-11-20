import React, { useState } from "react";
import './App.css';
import Wrapper from './components/Wrapper';
import Banner from './components/Banner';
import Search from './components/Search';
import Results from './components/Results';



function App() {
  return (
    <div className="App">
       <Wrapper>
        <Banner />
        <Search/>
        <Results/>
      </Wrapper>
    </div>
  );
}

export default App;
