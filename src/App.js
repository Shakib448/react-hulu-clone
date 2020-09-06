import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Results from './Components/Results/Results';
import Request from './Components/Request/Request';

function App() {

  const [selectedOption, setSelectedOption] = useState(Request.fetchTrending)

  return (
    <div className='app'>
        <Header/>
        <Nav setSelectedOption={setSelectedOption}/>
        <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
