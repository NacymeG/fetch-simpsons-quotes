import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import DisplayQuote from './components/DisplayQuote';

const simpsonQuote = [  
  {
  quote: "Eat my shorts",
  character: "Bart Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
  characterDirection: "Right"
  }
]

function App() {
const [quote, setQuote] = useState(...simpsonQuote);

const getQuote = () => {
  // Send the request
  axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    // Extract the DATA from the received response
    .then((response) => response.data)
    // Use this data to update the state
    .then((data) => {
      setQuote(...data);
    });
};

  return (
    <div className='App'>
      <DisplayQuote props={quote} />
      <button type="button" onClick={getQuote}>Get a Quote</button>
    </div>
  );
}

export default App;
